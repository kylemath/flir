// FLIR Real-Time Simulation

let simulationState = {
    running: false,
    canvas: null,
    ctx: null,
    width: 320,
    height: 240,
    objects: [],
    frameRate: 30,
    integrationTime: 10,
    fov: 40,
    numObjects: 1,
    motionType: 'static',
    motionSpeed: 2,
    lastFrameTime: 0,
    frameCount: 0
};

function initSimulation() {
    simulationState.canvas = document.getElementById('sim-canvas');
    if (!simulationState.canvas) {
        console.warn('Simulation canvas not found - will initialize when Simulation tab is opened');
        return;
    }
    simulationState.ctx = simulationState.canvas.getContext('2d');
    
    // Initialize objects
    resetSimulation();
}

function resetSimulation() {
    simulationState.running = false;
    const toggleBtn = document.getElementById('sim-toggle');
    if (toggleBtn) toggleBtn.textContent = 'Start Simulation';
    
    // Ensure canvas is initialized
    if (!simulationState.canvas || !simulationState.ctx) {
        simulationState.canvas = document.getElementById('sim-canvas');
        if (simulationState.canvas) {
            simulationState.ctx = simulationState.canvas.getContext('2d');
        }
    }
    
    // Create objects
    simulationState.objects = [];
    for (let i = 0; i < simulationState.numObjects; i++) {
        simulationState.objects.push({
            x: Math.random() * simulationState.width,
            y: Math.random() * simulationState.height,
            vx: (Math.random() - 0.5) * simulationState.motionSpeed,
            vy: (Math.random() - 0.5) * simulationState.motionSpeed,
            temp: 310 + Math.random() * 20,
            size: 20 + Math.random() * 30
        });
    }
    
    if (simulationState.ctx) {
        renderSimulationFrame();
    }
}

function toggleSimulation() {
    simulationState.running = !simulationState.running;
    
    if (simulationState.running) {
        document.getElementById('sim-toggle').textContent = 'Stop Simulation';
        simulationState.lastFrameTime = performance.now();
        runSimulation();
    } else {
        document.getElementById('sim-toggle').textContent = 'Start Simulation';
    }
}

function runSimulation() {
    if (!simulationState.running) return;
    
    const currentTime = performance.now();
    const deltaTime = (currentTime - simulationState.lastFrameTime) / 1000;
    
    if (deltaTime >= 1 / simulationState.frameRate) {
        updateSimulation(deltaTime);
        renderSimulationFrame();
        updateMetrics(deltaTime);
        
        simulationState.lastFrameTime = currentTime;
        simulationState.frameCount++;
    }
    
    requestAnimationFrame(runSimulation);
}

function updateSimulation(deltaTime) {
    const width = simulationState.width;
    const height = simulationState.height;
    
    simulationState.objects.forEach(obj => {
        if (simulationState.motionType === 'linear') {
            obj.x += obj.vx * deltaTime * 20;
            obj.y += obj.vy * deltaTime * 20;
            
            // Bounce off edges
            if (obj.x < 0 || obj.x > width) obj.vx *= -1;
            if (obj.y < 0 || obj.y > height) obj.vy *= -1;
            
            obj.x = Math.max(0, Math.min(width, obj.x));
            obj.y = Math.max(0, Math.min(height, obj.y));
            
        } else if (simulationState.motionType === 'random') {
            // Random walk
            obj.vx += (Math.random() - 0.5) * 2;
            obj.vy += (Math.random() - 0.5) * 2;
            
            // Limit velocity
            const speed = Math.sqrt(obj.vx * obj.vx + obj.vy * obj.vy);
            if (speed > simulationState.motionSpeed) {
                obj.vx = (obj.vx / speed) * simulationState.motionSpeed;
                obj.vy = (obj.vy / speed) * simulationState.motionSpeed;
            }
            
            obj.x += obj.vx * deltaTime * 10;
            obj.y += obj.vy * deltaTime * 10;
            
            obj.x = Math.max(0, Math.min(width, obj.x));
            obj.y = Math.max(0, Math.min(height, obj.y));
        }
        
        // Slight temperature variation
        obj.temp += (Math.random() - 0.5) * 0.5;
        obj.temp = Math.max(305, Math.min(340, obj.temp));
    });
}

function renderSimulationFrame() {
    // Ensure context is ready
    if (!simulationState.ctx) {
        simulationState.canvas = document.getElementById('sim-canvas');
        if (simulationState.canvas) {
            simulationState.ctx = simulationState.canvas.getContext('2d');
        } else {
            return; // Canvas not available yet
        }
    }
    
    const width = simulationState.width;
    const height = simulationState.height;
    
    // Create thermal image
    const thermalData = new Float32Array(width * height);
    const bgTemp = 295;
    
    // Background
    for (let i = 0; i < thermalData.length; i++) {
        thermalData[i] = bgTemp + (Math.random() - 0.5) * 2;
    }
    
    // Add objects
    simulationState.objects.forEach(obj => {
        const radius = obj.size / 2;
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const dx = x - obj.x;
                const dy = y - obj.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < radius) {
                    const idx = y * width + x;
                    // Gaussian temperature profile
                    const tempDrop = Math.exp(-dist * dist / (radius * radius / 2));
                    thermalData[idx] = bgTemp + (obj.temp - bgTemp) * tempDrop;
                }
            }
        }
    });
    
    // Add noise based on integration time
    const noiseLevel = 50 / simulationState.integrationTime;
    for (let i = 0; i < thermalData.length; i++) {
        thermalData[i] += (Math.random() - 0.5) * noiseLevel * 0.5;
    }
    
    // Render to canvas
    const imageData = simulationState.ctx.createImageData(width, height);
    const minTemp = 290;
    const maxTemp = 340;
    
    for (let i = 0; i < thermalData.length; i++) {
        const normalized = (thermalData[i] - minTemp) / (maxTemp - minTemp);
        const color = getIronColor(Math.max(0, Math.min(1, normalized)));
        
        imageData.data[i * 4] = color[0];
        imageData.data[i * 4 + 1] = color[1];
        imageData.data[i * 4 + 2] = color[2];
        imageData.data[i * 4 + 3] = 255;
    }
    
    simulationState.ctx.putImageData(imageData, 0, 0);
}

function updateMetrics(deltaTime) {
    // Calculate SNR
    const netd = 50; // mK
    const avgSignal = 310; // K
    const snr = 20 * Math.log10(avgSignal * 1000 / netd);
    
    // Detection range (simplified Johnson criteria)
    const objectSize = 1.8; // meters
    const deltaT = 15; // K
    const range = (objectSize * 1000) / (2 * (netd / 1000) / deltaT); // very simplified
    
    document.getElementById('snr-metric').textContent = snr.toFixed(1);
    document.getElementById('range-metric').textContent = Math.min(range, 500).toFixed(0);
    document.getElementById('frame-time').textContent = (deltaTime * 1000).toFixed(1);
}

function updateNumObjects(value) {
    simulationState.numObjects = parseInt(value);
    if (!simulationState.running) {
        resetSimulation();
    }
}

function updateMotion(value) {
    simulationState.motionType = value;
}

function updateMotionSpeed(value) {
    simulationState.motionSpeed = parseFloat(value);
    document.getElementById('speed-val').textContent = value;
}

function updateFrameRate(value) {
    simulationState.frameRate = parseInt(value);
}

function updateIntegration(value) {
    simulationState.integrationTime = parseFloat(value);
    document.getElementById('integration-val').textContent = value;
}

function updateFOV(value) {
    simulationState.fov = parseFloat(value);
    document.getElementById('fov-val').textContent = value;
}

function calculateDetectionRange() {
    const objSize = parseFloat(document.getElementById('obj-size').value);
    const deltaT = parseFloat(document.getElementById('delta-t').value);
    const netd = parseFloat(document.getElementById('netd').value) / 1000; // Convert mK to K
    const reqSNR = parseFloat(document.getElementById('req-snr').value);
    
    // Johnson criteria: Detection requires ~2 line pairs across target
    // Assuming a 640x480 sensor with 40° FOV
    const fov = 40 * Math.PI / 180; // radians
    const sensorPixels = 640;
    
    // Angular resolution per pixel
    const angularRes = fov / sensorPixels;
    
    // Detection range where object subtends 4 pixels (2 line pairs)
    const minPixels = 4;
    const detectionRange = objSize / (minPixels * Math.tan(angularRes));
    
    // SNR-limited range
    const snr = deltaT / netd;
    const snrLimitedRange = snr >= reqSNR ? detectionRange : detectionRange * (snr / reqSNR);
    
    // Atmospheric limited range (simplified: 10% loss per km)
    const atmosphericRange = -Math.log(0.1) / 0.0001; // ~23 km for 90% transmission
    
    const effectiveRange = Math.min(snrLimitedRange, atmosphericRange);
    
    const resultHtml = `
        <h4>Detection Range Analysis</h4>
        <p><strong>Geometry-limited range:</strong> ${detectionRange.toFixed(1)} m</p>
        <p><strong>Current SNR:</strong> ${(20 * Math.log10(snr)).toFixed(1)} dB</p>
        <p><strong>SNR-limited range:</strong> ${snrLimitedRange.toFixed(1)} m</p>
        <p><strong>Atmospheric limit:</strong> ${atmosphericRange > 1000 ? '>1000' : atmosphericRange.toFixed(0)} m</p>
        <hr style="border-color: rgba(255,69,0,0.3); margin: 1rem 0;">
        <p style="font-size: 1.2rem;"><strong>Effective Detection Range:</strong> <span style="color: #ff4500;">${effectiveRange.toFixed(1)} m</span></p>
        <p><em>Based on Johnson criteria for detection (2 line pairs)</em></p>
    `;
    
    document.getElementById('range-result').innerHTML = resultHtml;
}

