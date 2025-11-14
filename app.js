// Main application controller
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Navigation
    setupNavigation();
    
    // Initialize theory section
    initTheory();
    
    // Initialize spectrum chart
    createSpectrumChart();
    
    // Initialize 3D scene
    init3DScene();
    
    // Initialize dataset section
    initDatasets();
    
    // Initialize analysis section
    initAnalysis();
    
    // Initialize simulation
    initSimulation();
    
    console.log('FLIR Educational Platform Initialized');
}

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            
            // Update active states
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
            
            // Trigger section-specific updates
            if (targetSection === 'hardware') {
                animateCamera();
            } else if (targetSection === 'simulation') {
                // Initialize simulation when tab is opened
                if (!simulationState.ctx) {
                    initSimulation();
                }
            }
        });
    });
}

function createSpectrumChart() {
    const canvas = document.getElementById('spectrumChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 200;
    
    // Draw EM spectrum with IR bands highlighted
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#8b00ff');    // UV
    gradient.addColorStop(0.15, '#4b0082'); // Violet
    gradient.addColorStop(0.25, '#0000ff'); // Blue
    gradient.addColorStop(0.35, '#00ff00'); // Green
    gradient.addColorStop(0.45, '#ffff00'); // Yellow
    gradient.addColorStop(0.5, '#ff7f00');  // Orange
    gradient.addColorStop(0.55, '#ff0000'); // Red
    gradient.addColorStop(0.65, '#8b0000'); // Near-IR
    gradient.addColorStop(0.8, '#4a0000');  // MWIR
    gradient.addColorStop(1, '#1a0000');    // LWIR
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 50, canvas.width, 100);
    
    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    const labels = [
        {text: 'Visible', pos: 0.35},
        {text: 'NIR', pos: 0.6},
        {text: 'MWIR\n3-5μm', pos: 0.75},
        {text: 'LWIR\n8-14μm', pos: 0.9}
    ];
    
    labels.forEach(label => {
        const x = label.pos * canvas.width;
        ctx.fillText(label.text, x, 30);
        ctx.beginPath();
        ctx.moveTo(x, 40);
        ctx.lineTo(x, 50);
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    });
    
    // Highlight FLIR bands
    ctx.strokeStyle = '#ff4500';
    ctx.lineWidth = 3;
    ctx.strokeRect(canvas.width * 0.7, 45, canvas.width * 0.1, 110);
    ctx.strokeRect(canvas.width * 0.85, 45, canvas.width * 0.12, 110);
}

// Theory section calculations - Enhanced
function calculateRadiance() {
    const temp1 = parseFloat(document.getElementById('temp-input').value);
    const emissivity1 = parseFloat(document.getElementById('emissivity-input').value);
    const temp2 = parseFloat(document.getElementById('temp-input-2').value);
    const emissivity2 = parseFloat(document.getElementById('emissivity-input-2').value);
    const sigma = 5.67e-8; // Stefan-Boltzmann constant
    
    const radiance1 = emissivity1 * sigma * Math.pow(temp1, 4);
    const radiance2 = emissivity2 * sigma * Math.pow(temp2, 4);
    const difference = radiance1 - radiance2;
    const contrast = (difference / radiance2) * 100;
    
    document.getElementById('radiance-result').innerHTML = 
        `<div class="result-comparison">
            <div class="result-col">
                <h5>Object 1 (Target)</h5>
                <p><strong>Radiant Exitance:</strong> ${radiance1.toFixed(2)} W/m²</p>
                <p><strong>Temp:</strong> ${temp1}K, <strong>ε:</strong> ${emissivity1}</p>
            </div>
            <div class="result-col">
                <h5>Object 2 (Background)</h5>
                <p><strong>Radiant Exitance:</strong> ${radiance2.toFixed(2)} W/m²</p>
                <p><strong>Temp:</strong> ${temp2}K, <strong>ε:</strong> ${emissivity2}</p>
            </div>
        </div>
        <div class="result-summary">
            <p><strong>Signal Difference:</strong> ${difference.toFixed(2)} W/m² (${difference > 0 ? '+' : ''}${contrast.toFixed(1)}%)</p>
            <p><strong>Detection:</strong> ${Math.abs(difference) > 20 ? '✓ Easily detectable' : Math.abs(difference) > 5 ? '⚠ Moderate contrast' : '✗ Difficult to detect'}</p>
            <p><em>Higher contrast = easier target detection. Need >5 W/m² difference for reliable imaging.</em></p>
        </div>`;
}

function updatePlanck() {
    const temp = parseFloat(document.getElementById('planck-temp').value);
    document.getElementById('planck-temp-val').textContent = temp;
    
    // Get checkbox states
    const showHuman = document.getElementById('show-human')?.checked || false;
    const showVehicle = document.getElementById('show-vehicle')?.checked || false;
    const showFire = document.getElementById('show-fire')?.checked || false;
    const highlightMWIR = document.getElementById('highlight-mwir')?.checked || true;
    const highlightLWIR = document.getElementById('highlight-lwir')?.checked || true;
    
    drawPlanckCurve(temp, showHuman, showVehicle, showFire, highlightMWIR, highlightLWIR);
}

function drawPlanckCurve(temp, showHuman = false, showVehicle = false, showFire = false, highlightMWIR = true, highlightLWIR = true) {
    const canvas = document.getElementById('planckChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Constants
    const h = 6.626e-34;  // Planck constant
    const c = 3e8;        // Speed of light
    const k = 1.381e-23;  // Boltzmann constant
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;
    
    // Function to calculate Planck curve
    function calculatePlanck(temperature) {
        const wavelengths = [];
        const intensities = [];
        
        for (let lambda = 1e-6; lambda <= 20e-6; lambda += 0.1e-6) {
            wavelengths.push(lambda * 1e6);
            const L = (2 * h * c * c) / (Math.pow(lambda, 5) * (Math.exp((h * c) / (lambda * k * temperature)) - 1));
            intensities.push(L);
        }
        return { wavelengths, intensities };
    }
    
    // Calculate all curves
    const curves = [{ temp, color: '#003366', label: `${temp}K (slider)`, width: 3 }];
    
    if (showHuman) curves.push({ temp: 310, color: '#C41E3A', label: '310K (Human)', width: 2 });
    if (showVehicle) curves.push({ temp: 350, color: '#0066CC', label: '350K (Vehicle)', width: 2 });
    if (showFire) curves.push({ temp: 700, color: '#FF6600', label: '700K (Fire)', width: 2 });
    
    // Find global max for normalization
    let globalMax = 0;
    curves.forEach(curve => {
        const data = calculatePlanck(curve.temp);
        globalMax = Math.max(globalMax, ...data.intensities);
    });
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Highlight MWIR and LWIR bands
    if (highlightMWIR) {
        ctx.fillStyle = 'rgba(196, 30, 58, 0.1)';
        const mwirStart = padding + ((3 - 1) / 19) * (width - 2 * padding);
        const mwirEnd = padding + ((5 - 1) / 19) * (width - 2 * padding);
        ctx.fillRect(mwirStart, padding, mwirEnd - mwirStart, height - 2 * padding);
        
        ctx.fillStyle = '#C41E3A';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('MWIR', (mwirStart + mwirEnd) / 2, padding + 15);
    }
    
    if (highlightLWIR) {
        ctx.fillStyle = 'rgba(0, 102, 204, 0.1)';
        const lwirStart = padding + ((8 - 1) / 19) * (width - 2 * padding);
        const lwirEnd = padding + ((14 - 1) / 19) * (width - 2 * padding);
        ctx.fillRect(lwirStart, padding, lwirEnd - lwirStart, height - 2 * padding);
        
        ctx.fillStyle = '#0066CC';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('LWIR', (lwirStart + lwirEnd) / 2, padding + 15);
    }
    
    // Draw all curves
    curves.forEach(curve => {
        const data = calculatePlanck(curve.temp);
        
        ctx.strokeStyle = curve.color;
        ctx.lineWidth = curve.width;
        ctx.beginPath();
        
        data.wavelengths.forEach((lambda, i) => {
            const x = padding + ((lambda - 1) / 19) * (width - 2 * padding);
            const y = height - padding - (data.intensities[i] / globalMax) * (height - 2 * padding);
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
    });
    
    // Draw legend
    let legendY = padding + 30;
    curves.forEach(curve => {
        ctx.fillStyle = curve.color;
        ctx.fillRect(width - padding - 120, legendY, 20, 3);
        ctx.fillStyle = '#333';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(curve.label, width - padding - 95, legendY + 3);
        legendY += 18;
    });
    
    // Labels
    ctx.fillStyle = '#333';
    ctx.font = '13px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Wavelength (μm)', width / 2, height - 10);
    
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Spectral Radiance (W/sr·m²·μm)', 0, 0);
    ctx.restore();
    
    // Axis values
    ctx.textAlign = 'center';
    ctx.font = '11px Arial';
    [1, 5, 10, 15, 20].forEach(val => {
        const x = padding + ((val - 1) / 19) * (width - 2 * padding);
        ctx.fillText(val.toString(), x, height - padding + 18);
    });
}

function initTheory() {
    // Draw initial Planck curve with defaults
    updatePlanck();
    
    // Draw atmospheric transmission with defaults
    updateAtmosphere();
}

function updateAtmosphere() {
    const distance = parseFloat(document.getElementById('atmos-distance')?.value || 10);
    document.getElementById('atmos-distance-val').textContent = distance;
    
    const alphaRadio = document.querySelector('input[name="atmos-condition"]:checked');
    const alpha = parseFloat(alphaRadio?.value || 0.05);
    
    drawAtmosphericTransmission(distance, alpha);
    
    // Show transmission result
    const transmission = Math.exp(-alpha * distance);
    const conditionName = alphaRadio?.nextSibling?.textContent || 'Clear';
    
    document.getElementById('transmission-result').innerHTML = `
        <div class="atmos-result">
            <p><strong>Atmospheric Transmission at ${distance}km:</strong></p>
            <p style="font-size: 1.3rem; color: ${transmission > 0.7 ? '#00AA00' : transmission > 0.3 ? '#FF8800' : '#CC0000'};">
                <strong>${(transmission * 100).toFixed(1)}%</strong> of signal reaches detector
            </p>
            <p><strong>Signal Loss:</strong> ${(100 - transmission * 100).toFixed(1)}% absorbed by atmosphere</p>
            <p><em>Condition: ${conditionName}</em></p>
            <p><em>${transmission > 0.7 ? '✓ Excellent visibility' : transmission > 0.3 ? '⚠ Reduced range' : '✗ Severely limited range'}</em></p>
        </div>
    `;
}

function drawAtmosphericTransmission(maxDistance = 30, alpha = 0.05) {
    const canvas = document.getElementById('atmosphereChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw transmission curve vs distance
    ctx.strokeStyle = alpha < 0.2 ? '#00AA00' : alpha < 1 ? '#FF8800' : '#CC0000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let d = 0; d <= maxDistance; d += 0.5) {
        const trans = Math.exp(-alpha * d);
        const x = padding + (d / maxDistance) * (width - 2 * padding);
        const y = height - padding - trans * (height - 2 * padding);
        
        if (d === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // Mark current distance
    const currentTrans = Math.exp(-alpha * (document.getElementById('atmos-distance')?.value || 10));
    const currentX = padding + ((document.getElementById('atmos-distance')?.value || 10) / maxDistance) * (width - 2 * padding);
    const currentY = height - padding - currentTrans * (height - 2 * padding);
    
    ctx.fillStyle = '#C41E3A';
    ctx.beginPath();
    ctx.arc(currentX, currentY, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    // Dashed line to axes
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#C41E3A';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(padding, currentY);
    ctx.moveTo(currentX, currentY);
    ctx.lineTo(currentX, height - padding);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Labels
    ctx.fillStyle = '#333';
    ctx.font = '13px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Distance (km)', width / 2, height - 10);
    
    ctx.save();
    ctx.translate(18, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Transmission τ(d)', 0, 0);
    ctx.restore();
    
    // Y-axis values
    ctx.textAlign = 'right';
    ctx.font = '11px Arial';
    [0, 0.25, 0.5, 0.75, 1.0].forEach(val => {
        const y = height - padding - val * (height - 2 * padding);
        ctx.fillText(val.toFixed(2), padding - 10, y + 4);
    });
    
    // X-axis values
    ctx.textAlign = 'center';
    for (let d = 0; d <= maxDistance; d += 5) {
        const x = padding + (d / maxDistance) * (width - 2 * padding);
        ctx.fillText(d.toString(), x, height - padding + 18);
    }
    
    // Legend
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`α = ${alpha} km⁻¹`, width - 150, padding + 20);
}

function calculateSNR() {
    const signal = parseFloat(document.getElementById('signal-input').value);
    const darkNoise = parseFloat(document.getElementById('dark-noise-input').value);
    const readNoise = parseFloat(document.getElementById('read-noise-input').value);
    
    const totalNoise = Math.sqrt(signal + darkNoise + readNoise * readNoise);
    const snr = signal / totalNoise;
    const snrDB = 20 * Math.log10(snr);
    
    // Estimate NETD (simplified)
    const netd = (1 / snr) * 1000; // in mK, simplified model
    
    document.getElementById('snr-result').innerHTML = `
        <div class="result-summary">
            <p><strong>SNR (linear):</strong> ${snr.toFixed(2)}</p>
            <p><strong>SNR (decibels):</strong> ${snrDB.toFixed(1)} dB</p>
            <p><strong>Total Noise:</strong> ${totalNoise.toFixed(0)} electrons</p>
            <p><strong>Estimated NETD:</strong> ${netd.toFixed(1)} mK</p>
            <hr>
            <p><strong>Image Quality:</strong> ${snrDB > 40 ? '✓ Excellent (research-grade)' : snrDB > 20 ? '✓ Good (commercial)' : snrDB > 14 ? '⚠ Adequate (detection only)' : '✗ Poor'}</p>
            <p><em>For reference: Commercial systems achieve 30-40 dB, military systems 40-50+ dB</em></p>
        </div>
    `;
}

function setDetectorType(type) {
    switch(type) {
        case 'uncooled':
            document.getElementById('signal-input').value = 5000;
            document.getElementById('dark-noise-input').value = 2000;
            document.getElementById('read-noise-input').value = 150;
            break;
        case 'cooled-insb':
            document.getElementById('signal-input').value = 20000;
            document.getElementById('dark-noise-input').value = 50;
            document.getElementById('read-noise-input').value = 80;
            break;
        case 'cooled-mct':
            document.getElementById('signal-input').value = 25000;
            document.getElementById('dark-noise-input').value = 30;
            document.getElementById('read-noise-input').value = 60;
            break;
    }
    calculateSNR();
}

function initDatasets() {
    // Initialize with a default dataset
    generateDataset();
}

function initAnalysis() {
    // Load initial image for analysis
    const canvas = document.getElementById('analysis-canvas');
    if (canvas && window.currentDataset) {
        const ctx = canvas.getContext('2d');
        ctx.putImageData(window.currentDataset.imageData, 0, 0);
    }
}

function initSimulation() {
    // Simulation initialization handled by flir-simulation.js
}

// ============================================
// STEEL INSPECTION SECTION FUNCTIONS
// ============================================

// Defect information database
const steelDefectData = {
    crack: {
        title: 'Fatigue Crack',
        mechanism: 'Cyclic loading concentrates stress at crack tips, generating localized heating through hysteresis. Crack opening disrupts heat flow, creating thermal gradient.',
        signature: 'ΔT ≈ 0.2-2.0K depending on loading. Appears as linear hot or cold region depending on inspection timing.',
        range: 'Surface cracks: 0.5-5m. Subsurface: 1-2m (active thermography required)',
        band: 'LWIR (8-14μm) for passive, MWIR (3-5μm) for active pulsed thermography',
        tempDiff: 0.8,
        pattern: 'linear'
    },
    void: {
        title: 'Subsurface Void',
        mechanism: 'Internal cavity (air-filled) has drastically lower thermal conductivity (k≈0.025 W/m·K) than steel (k≈50 W/m·K). Heat flow bypasses void, creating surface temperature anomaly.',
        signature: 'ΔT ≈ 0.3-1.5K for active thermography. Delayed thermal response compared to intact regions.',
        range: 'Detection depth: 1-10mm passive, up to 50mm with flash thermography',
        band: 'MWIR (3-5μm) for active flash, LWIR (8-14μm) for lock-in methods',
        tempDiff: 1.2,
        pattern: 'circular'
    },
    corrosion: {
        title: 'Corrosion / Rust',
        mechanism: 'Iron oxide (rust) has higher emissivity (ε≈0.75) than bare steel (ε≈0.25) and different thermal properties. Absorbs more solar radiation, reducing structural thickness.',
        signature: 'ΔT ≈ 2-10K under solar loading. Corroded areas appear warmer during day, cooler at night (reduced thermal mass).',
        range: 'Detection: 1-10m depending on corrosion extent. Minimum detectable: ~20mm diameter patch',
        band: 'LWIR (8-14μm) preferred for emissivity contrast detection',
        tempDiff: 3.5,
        pattern: 'irregular'
    },
    delamination: {
        title: 'Coating Delamination',
        mechanism: 'Air gap between coating and steel substrate acts as thermal insulator (k<sub>air</sub>≈0.025 W/m·K). Heat accumulates under separated coating during heating, drains slowly during cooling.',
        signature: 'ΔT ≈ 0.5-3K. Appears warmer during heating phase (solar/flash), cooler during decay phase.',
        range: 'Detection: 0.5-5m. Minimum area: ~25mm diameter for passive, ~10mm for flash thermography',
        band: 'LWIR (8-14μm) for passive, MWIR (3-5μm) for active methods',
        tempDiff: 1.8,
        pattern: 'boundary'
    },
    weld: {
        title: 'Weld Defect (Incomplete Penetration)',
        mechanism: 'Incomplete fusion, porosity, or slag inclusions create voids with different thermal diffusivity. Weld metal thermal properties (k≈40 W/m·K) differ from base metal.',
        signature: 'ΔT ≈ 0.5-2.5K. Defects appear as cooler regions during active heating due to reduced thermal conductivity path.',
        range: 'Surface detection: 1-3m. Subsurface (flash): depths up to 10mm in typical weld thickness',
        band: 'MWIR (3-5μm) preferred for active flash thermography of welds',
        tempDiff: 1.5,
        pattern: 'spot'
    }
};

function showSteelDefect(defectType) {
    // Update button states
    document.querySelectorAll('.defect-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.defect === defectType || btn.getAttribute('onclick')?.includes(defectType)) {
            btn.classList.add('active');
        }
    });
    
    // Update description
    const defect = steelDefectData[defectType];
    document.getElementById('defect-info').innerHTML = `
        <h4>${defect.title}</h4>
        <p><strong>Mechanism:</strong> ${defect.mechanism}</p>
        <p><strong>Thermal Signature:</strong> ${defect.signature}</p>
        <p><strong>Detection Range:</strong> ${defect.range}</p>
        <p><strong>Optimal Band:</strong> ${defect.band}</p>
    `;
    
    // Draw thermal image
    drawSteelDefectImage(defectType);
    
    // Draw temperature profile
    drawSteelTempProfile(defectType);
}

function drawSteelDefectImage(defectType) {
    const canvas = document.getElementById('steel-thermal-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Create image data
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    
    const defect = steelDefectData[defectType];
    const baseTemp = 300; // 300K baseline
    const tempDiff = defect.tempDiff;
    
    // Define defect location and shape
    const centerX = width / 2;
    const centerY = height / 2;
    const defectSize = 40; // pixels
    
    // Generate thermal image
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            
            // Calculate distance from center
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Determine if pixel is in defect region
            let inDefect = false;
            
            switch(defect.pattern) {
                case 'linear': // Crack - diagonal line
                    inDefect = Math.abs(dy - dx * 0.3) < 3;
                    break;
                case 'circular': // Void
                    inDefect = dist < defectSize;
                    break;
                case 'irregular': // Corrosion - rough patches
                    const noise = Math.sin(x * 0.3) * Math.cos(y * 0.2) * 15;
                    inDefect = (dist + noise) < defectSize * 1.2;
                    break;
                case 'boundary': // Delamination - region boundary
                    inDefect = x > centerX - 50 && x < centerX + 50 && y > centerY - 30 && y < centerY + 30;
                    break;
                case 'spot': // Weld defect - multiple spots
                    const spot1 = Math.sqrt((x-centerX+20)**2 + (y-centerY)**2) < 15;
                    const spot2 = Math.sqrt((x-centerX-25)**2 + (y-centerY+15)**2) < 12;
                    inDefect = spot1 || spot2;
                    break;
            }
            
            // Calculate temperature
            let temp = baseTemp;
            if (inDefect) {
                // Smooth transition at defect edges
                const edgeDist = defect.pattern === 'circular' ? (defectSize - dist) / 10 : 1;
                const smoothing = Math.max(0, Math.min(1, edgeDist));
                temp = baseTemp + tempDiff * smoothing;
            }
            
            // Add some noise
            temp += (Math.random() - 0.5) * 0.3;
            
            // Convert to color (iron colormap)
            const color = temperatureToColor(temp, baseTemp - 2, baseTemp + tempDiff + 2);
            
            data[idx] = color.r;
            data[idx + 1] = color.g;
            data[idx + 2] = color.b;
            data[idx + 3] = 255;
        }
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Draw colorbar
    drawSteelColorbar(baseTemp - 2, baseTemp + tempDiff + 2);
}

function drawSteelColorbar(minTemp, maxTemp) {
    const canvas = document.getElementById('steel-colorbar');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    for (let x = 0; x < width; x++) {
        const temp = minTemp + (x / width) * (maxTemp - minTemp);
        const color = temperatureToColor(temp, minTemp, maxTemp);
        
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.fillRect(x, 0, 1, height);
    }
}

function temperatureToColor(temp, minTemp, maxTemp) {
    // Iron colormap (blue -> purple -> red -> yellow -> white)
    const normalized = Math.max(0, Math.min(1, (temp - minTemp) / (maxTemp - minTemp)));
    
    let r, g, b;
    if (normalized < 0.25) {
        // Blue to purple
        const t = normalized / 0.25;
        r = Math.floor(t * 128);
        g = 0;
        b = Math.floor(128 + t * 127);
    } else if (normalized < 0.5) {
        // Purple to red
        const t = (normalized - 0.25) / 0.25;
        r = Math.floor(128 + t * 127);
        g = 0;
        b = Math.floor(255 * (1 - t));
    } else if (normalized < 0.75) {
        // Red to yellow
        const t = (normalized - 0.5) / 0.25;
        r = 255;
        g = Math.floor(t * 255);
        b = 0;
    } else {
        // Yellow to white
        const t = (normalized - 0.75) / 0.25;
        r = 255;
        g = 255;
        b = Math.floor(t * 255);
    }
    
    return { r, g, b };
}

function drawSteelTempProfile(defectType) {
    const canvas = document.getElementById('steel-profile-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    
    const defect = steelDefectData[defectType];
    const baseTemp = 300;
    const tempDiff = defect.tempDiff;
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw temperature profile
    ctx.strokeStyle = '#C41E3A';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const points = 200;
    for (let i = 0; i < points; i++) {
        const position = i / points;
        const x = padding + position * (width - 2 * padding);
        
        // Temperature profile across defect
        let temp = baseTemp;
        const defectCenter = 0.5;
        const defectWidth = 0.15;
        
        if (Math.abs(position - defectCenter) < defectWidth) {
            const distFromCenter = Math.abs(position - defectCenter) / defectWidth;
            temp = baseTemp + tempDiff * (1 - distFromCenter);
        }
        
        // Normalize to canvas coordinates
        const tempNorm = (temp - (baseTemp - 1)) / (tempDiff + 2);
        const y = height - padding - tempNorm * (height - 2 * padding);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();
    
    // Mark defect location
    ctx.fillStyle = 'rgba(196, 30, 58, 0.2)';
    const defectStart = padding + 0.35 * (width - 2 * padding);
    const defectEnd = padding + 0.65 * (width - 2 * padding);
    ctx.fillRect(defectStart, padding, defectEnd - defectStart, height - 2 * padding);
    
    // Labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Position along surface (mm)', width / 2, height - 10);
    
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Temperature (K)', 0, 0);
    ctx.restore();
    
    // Y-axis values
    ctx.textAlign = 'right';
    ctx.font = '10px Arial';
    for (let i = 0; i <= 4; i++) {
        const temp = (baseTemp - 1) + (i / 4) * (tempDiff + 2);
        const y = height - padding - (i / 4) * (height - 2 * padding);
        ctx.fillText(temp.toFixed(1), padding - 8, y + 4);
    }
}

function runSteelInspection() {
    const method = document.getElementById('inspection-method').value;
    const thickness = parseFloat(document.getElementById('steel-thickness').value);
    const depth = parseFloat(document.getElementById('defect-depth').value);
    const size = parseFloat(document.getElementById('defect-size').value);
    const emissivity = parseFloat(document.getElementById('steel-emissivity').value);
    const distance = parseFloat(document.getElementById('camera-distance-steel').value);
    const detectorType = document.getElementById('detector-type-steel').value;
    
    // Simulate inspection
    const canvas = document.getElementById('steel-sim-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Generate synthetic thermal image with defect
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    
    const baseTemp = 298;
    
    // Calculate defect visibility based on parameters
    let tempAnomaly = 0;
    switch(method) {
        case 'passive':
            tempAnomaly = Math.max(0.1, 3.0 / (depth + 1)) * (size / 2);
            break;
        case 'flash':
            tempAnomaly = Math.max(0.5, 8.0 / (depth + 1)) * (size / 2);
            break;
        case 'lock-in':
            tempAnomaly = Math.max(0.3, 5.0 / (depth + 1)) * (size / 2);
            break;
        case 'induction':
            tempAnomaly = Math.max(0.8, 10.0 / (depth + 1)) * (size / 2);
            break;
    }
    
    // Reduce anomaly if too deep
    if (depth > thickness / 2) {
        tempAnomaly *= 0.3;
    }
    
    // Get detector NETD
    const netdMap = {
        'uncooled': 0.050,
        'cooled-lwir': 0.020,
        'cooled-mwir': 0.015
    };
    const netd = netdMap[detectorType];
    
    // Add noise based on detector
    const noiseLevel = netd;
    
    // Defect location (random)
    const defectX = width * (0.3 + Math.random() * 0.4);
    const defectY = height * (0.3 + Math.random() * 0.4);
    const defectRadius = 20 + size * 5;
    
    // Generate image
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            
            const dx = x - defectX;
            const dy = y - defectY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            let temp = baseTemp + (Math.random() - 0.5) * noiseLevel * 2;
            
            // Add defect signature
            if (dist < defectRadius) {
                const smoothing = Math.exp(-(dist * dist) / (defectRadius * defectRadius / 2));
                temp += tempAnomaly * smoothing;
            }
            
            const color = temperatureToColor(temp, baseTemp - 1, baseTemp + tempAnomaly + 1);
            data[idx] = color.r;
            data[idx + 1] = color.g;
            data[idx + 2] = color.b;
            data[idx + 3] = 255;
        }
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Calculate SNR
    const snr = tempAnomaly / netd;
    const detectable = snr > 5;
    
    // Display results
    document.getElementById('steel-results').innerHTML = `
        <div class="inspection-result ${detectable ? 'detectable' : 'not-detectable'}">
            <h5>${detectable ? '✓ Defect Detected' : '✗ Below Detection Threshold'}</h5>
            <p><strong>Thermal Anomaly:</strong> ${tempAnomaly.toFixed(2)}K</p>
            <p><strong>Camera NETD:</strong> ${(netd * 1000).toFixed(0)}mK</p>
            <p><strong>Signal-to-Noise Ratio:</strong> ${snr.toFixed(1)} ${snr > 5 ? '(>5 threshold ✓)' : '(<5 threshold ✗)'}</p>
            <p><strong>Method:</strong> ${method.charAt(0).toUpperCase() + method.slice(1)}</p>
            <p><strong>Defect Depth:</strong> ${depth}mm ${depth > thickness/2 ? '(⚠ very deep)' : ''}</p>
            
            ${detectable ? 
                `<p class="success-msg"><strong>Recommendation:</strong> Defect clearly visible. Proceed with ultrasonic testing for sizing and depth confirmation.</p>` :
                `<p class="warning-msg"><strong>Recommendation:</strong> ${
                    depth > 10 ? 'Defect too deep for this method. Try flash thermography with higher energy pulse.' :
                    size < 1 ? 'Defect too small. Reduce inspection distance or use higher resolution camera.' :
                    'Increase thermal stimulus or use cooled detector for better NETD.'
                }</p>`
            }
        </div>
        
        <div class="physics-analysis">
            <h5>Physics Analysis</h5>
            <p><strong>Heat diffusion depth:</strong> δ ≈ √(α·t) = √(1.4×10⁻⁵ m²/s × 10s) ≈ ${(Math.sqrt(1.4e-5 * 10) * 1000).toFixed(1)}mm</p>
            <p><em>Defects deeper than δ produce weaker surface signatures and require longer inspection times or higher energy input.</em></p>
        </div>
    `;
}

function drawSteelTempProfile(defectType) {
    // Profile already drawn in main function - this is placeholder for enhancement
}

function updateSteelInspection() {
    // Update displays when parameters change
    const resultsDiv = document.getElementById('steel-results');
    if (resultsDiv && !resultsDiv.querySelector('.instruction-text')) {
        runSteelInspection();
    }
}

function updateSteelThickness(val) {
    document.getElementById('steel-thickness-val').textContent = val;
    updateSteelInspection();
}

function updateDefectDepth(val) {
    document.getElementById('defect-depth-val').textContent = val;
    updateSteelInspection();
}

function updateDefectSize(val) {
    document.getElementById('defect-size-val').textContent = val;
    updateSteelInspection();
}

function updateSteelEmissivity(val) {
    document.getElementById('steel-emissivity-val').textContent = val;
    updateSteelInspection();
}

function updateCameraDistance(val) {
    document.getElementById('camera-distance-val').textContent = val;
    updateSteelInspection();
}

function updateDetectorType() {
    updateSteelInspection();
}

function calculateEmissivityError() {
    const trueTemp = parseFloat(document.getElementById('true-temp-steel').value);
    const trueEmissivity = parseFloat(document.getElementById('true-emissivity').value);
    const assumedEmissivity = parseFloat(document.getElementById('assumed-emissivity').value);
    
    const sigma = 5.67e-8;
    
    // Actual radiance
    const actualRadiance = trueEmissivity * sigma * Math.pow(trueTemp, 4);
    
    // Camera measures this radiance but assumes wrong emissivity
    // M = ε_assumed * σ * T_apparent^4 = actualRadiance
    // T_apparent = (actualRadiance / (ε_assumed * σ))^(1/4)
    const apparentTemp = Math.pow(actualRadiance / (assumedEmissivity * sigma), 0.25);
    
    const error = apparentTemp - trueTemp;
    const errorPercent = (error / trueTemp) * 100;
    
    document.getElementById('emissivity-error-result').innerHTML = `
        <div class="result-summary">
            <p><strong>True Temperature:</strong> ${trueTemp}K (${(trueTemp - 273.15).toFixed(1)}°C)</p>
            <p><strong>Camera Reading:</strong> ${apparentTemp.toFixed(1)}K (${(apparentTemp - 273.15).toFixed(1)}°C)</p>
            <p style="font-size: 1.2rem; color: ${Math.abs(error) > 10 ? '#C41E3A' : '#FF8800'};">
                <strong>Measurement Error: ${error > 0 ? '+' : ''}${error.toFixed(1)}K (${errorPercent > 0 ? '+' : ''}${errorPercent.toFixed(1)}%)</strong>
            </p>
            <hr>
            <p><strong>Analysis:</strong> ${Math.abs(error) < 2 ? 
                '✓ Acceptable error for qualitative inspection' : 
                Math.abs(error) < 10 ? 
                '⚠ Moderate error - consider emissivity correction' : 
                '✗ Large error - surface coating required for quantitative work'
            }</p>
            <p><em>For accurate temperature measurement, apply high-emissivity coating (ε≈0.95) or use emissivity correction factor: ε<sub>true</sub>/ε<sub>assumed</sub> = ${(trueEmissivity/assumedEmissivity).toFixed(3)}</em></p>
        </div>
    `;
}

function updateDecay() {
    const pulseEnergy = parseFloat(document.getElementById('pulse-energy').value);
    document.getElementById('pulse-energy-val').textContent = pulseEnergy;
    
    const showSurface = document.getElementById('show-surface').checked;
    const show2mm = document.getElementById('show-2mm').checked;
    const show5mm = document.getElementById('show-5mm').checked;
    const show10mm = document.getElementById('show-10mm').checked;
    
    drawThermalDecay(pulseEnergy, showSurface, show2mm, show5mm, show10mm);
}

function drawThermalDecay(pulseEnergy, showSurface, show2mm, show5mm, show10mm) {
    const canvas = document.getElementById('thermal-decay-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 50;
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Thermal diffusivity of steel
    const alpha = 1.4e-5; // m²/s
    const maxTime = 60; // seconds
    
    // Define depth-dependent cooling curves
    const depths = [];
    if (showSurface) depths.push({ depth: 0, color: '#C41E3A', label: 'Surface (0mm)' });
    if (show2mm) depths.push({ depth: 0.002, color: '#0066CC', label: '2mm depth' });
    if (show5mm) depths.push({ depth: 0.005, color: '#00AA00', label: '5mm depth' });
    if (show10mm) depths.push({ depth: 0.010, color: '#FF8800', label: '10mm depth' });
    
    // Draw cooling curves
    depths.forEach(depthInfo => {
        ctx.strokeStyle = depthInfo.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let t = 0.1; t <= maxTime; t += 0.5) {
            // Simplified 1D heat diffusion solution
            // ΔT(z,t) = ΔT₀ * erfc(z / (2√(αt)))
            const erfcArg = depthInfo.depth / (2 * Math.sqrt(alpha * t));
            const erfc = 1 - erf(erfcArg); // Approximate
            const deltaT = pulseEnergy * erfc * Math.exp(-t / 20);
            
            const x = padding + (t / maxTime) * (width - 2 * padding);
            const y = height - padding - (deltaT / (pulseEnergy * 1.2)) * (height - 2 * padding);
            
            if (t === 0.1) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    });
    
    // Legend
    let legendY = padding + 20;
    depths.forEach(depthInfo => {
        ctx.fillStyle = depthInfo.color;
        ctx.fillRect(width - padding - 120, legendY, 30, 3);
        ctx.fillStyle = '#333';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(depthInfo.label, width - padding - 85, legendY + 3);
        legendY += 20;
    });
    
    // Labels
    ctx.fillStyle = '#333';
    ctx.font = '13px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Time after pulse (seconds)', width / 2, height - 10);
    
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('ΔT above ambient (K)', 0, 0);
    ctx.restore();
    
    // Axis values
    ctx.textAlign = 'right';
    ctx.font = '11px Arial';
    for (let i = 0; i <= 5; i++) {
        const temp = (i / 5) * pulseEnergy;
        const y = height - padding - (i / 5) * (height - 2 * padding);
        ctx.fillText(temp.toFixed(1), padding - 8, y + 4);
    }
    
    ctx.textAlign = 'center';
    for (let t = 0; t <= maxTime; t += 10) {
        const x = padding + (t / maxTime) * (width - 2 * padding);
        ctx.fillText(t.toString(), x, height - padding + 18);
    }
}

// Error function approximation for thermal diffusion
function erf(x) {
    // Abramowitz and Stegun approximation
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
}

function calculateDefectDetection() {
    const k = parseFloat(document.getElementById('thermal-cond').value);
    const alpha = parseFloat(document.getElementById('thermal-diff').value);
    const emissivity = parseFloat(document.getElementById('surf-emissivity').value);
    const ambientTemp = parseFloat(document.getElementById('ambient-temp-steel').value);
    const appliedHeat = parseFloat(document.getElementById('applied-heat').value);
    const inspectionTime = parseFloat(document.getElementById('inspection-time').value);
    const netd = parseFloat(document.getElementById('camera-netd-steel').value) / 1000; // Convert mK to K
    const pixelSize = parseFloat(document.getElementById('pixel-size-steel').value);
    const requiredSNR = parseFloat(document.getElementById('snr-required-steel').value);
    
    // Calculate minimum detectable temperature difference
    const minDeltaT = netd * requiredSNR;
    
    // Calculate thermal diffusion depth
    const diffusionDepth = Math.sqrt(alpha * inspectionTime) * 1000; // in mm
    
    // Estimate minimum detectable defect size (simplified model)
    // For a defect to be detectable, it must produce ΔT > minDeltaT
    // Rough approximation: defect size must be > 2 * pixel size for spatial resolution
    const minDefectSize = Math.max(2 * pixelSize, 0.5);
    
    // Calculate expected signal for typical defect
    const typicalDefectTemp = appliedHeat > 0 ? 
        ambientTemp + (appliedHeat * 100) / (k * emissivity) : // Active
        ambientTemp + 2; // Passive (solar loading)
    
    const expectedDeltaT = Math.abs(typicalDefectTemp - ambientTemp);
    const snr = expectedDeltaT / netd;
    const detectable = snr >= requiredSNR;
    
    document.getElementById('defect-calc-result').innerHTML = `
        <div class="result-summary">
            <h4>Detection Capability Analysis</h4>
            
            <div class="calc-result-grid">
                <div class="calc-result-item">
                    <strong>Minimum Detectable ΔT:</strong>
                    <p style="font-size: 1.2rem;">${(minDeltaT * 1000).toFixed(0)}mK</p>
                    <p class="small-text">= NETD × Required SNR</p>
                </div>
                
                <div class="calc-result-item">
                    <strong>Thermal Diffusion Depth:</strong>
                    <p style="font-size: 1.2rem;">${diffusionDepth.toFixed(1)}mm</p>
                    <p class="small-text">δ = √(α·t) at ${inspectionTime}s</p>
                </div>
                
                <div class="calc-result-item">
                    <strong>Minimum Defect Size:</strong>
                    <p style="font-size: 1.2rem;">${minDefectSize.toFixed(1)}mm</p>
                    <p class="small-text">Limited by pixel size & diffraction</p>
                </div>
                
                <div class="calc-result-item">
                    <strong>Inspection Mode:</strong>
                    <p style="font-size: 1.2rem;">${appliedHeat > 0 ? 'Active' : 'Passive'}</p>
                    <p class="small-text">${appliedHeat > 0 ? `${appliedHeat} W/cm² applied` : 'Ambient thermal gradients'}</p>
                </div>
            </div>
            
            <hr>
            
            <div class="detection-verdict ${detectable ? 'verdict-pass' : 'verdict-fail'}">
                <h5>${detectable ? '✓ Defects Detectable' : '✗ Below Detection Limit'}</h5>
                <p><strong>Expected SNR for typical defect:</strong> ${snr.toFixed(1)} ${detectable ? '(exceeds threshold)' : '(below threshold)'}</p>
                <p><strong>Expected ΔT from defect:</strong> ${(expectedDeltaT * 1000).toFixed(0)}mK</p>
            </div>
            
            <div class="recommendations">
                <h5>Optimization Recommendations:</h5>
                <ul>
                    ${netd > 0.030 ? '<li>Consider cooled detector (NETD: 15-20mK) for better sensitivity</li>' : ''}
                    ${pixelSize > 1.5 ? '<li>Reduce inspection distance or use telephoto lens to improve spatial resolution</li>' : ''}
                    ${appliedHeat === 0 && diffusionDepth < 3 ? '<li>For subsurface defects, use active thermography with external heat source</li>' : ''}
                    ${emissivity < 0.7 ? '<li>Apply high-emissivity coating (black paint, ε≈0.95) for quantitative measurements</li>' : ''}
                    ${inspectionTime < 5 && appliedHeat > 0 ? '<li>Extend observation time to allow deeper thermal penetration</li>' : ''}
                </ul>
            </div>
            
            <div class="physics-note">
                <p><em><strong>Physics Note:</strong> Detection capability scales with √(inspection time) for active methods. Doubling observation time increases diffusion depth by √2 ≈ 1.41×, revealing deeper defects at cost of longer inspection duration.</em></p>
            </div>
        </div>
    `;
}

// Initialize steel section when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize first defect visualization
    setTimeout(() => {
        if (document.getElementById('steel-thermal-canvas')) {
            showSteelDefect('crack');
            updateDecay();
        }
    }, 500);
});

