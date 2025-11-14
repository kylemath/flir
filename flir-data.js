// FLIR Data Generation and Management

// Global storage for current dataset
window.currentDataset = null;

// Thermal colormap (Iron colormap - commonly used in thermal imaging)
function getIronColor(value) {
    // value should be between 0 and 1
    const colormaps = [
        [0, 0, 0],       // Black
        [0, 0, 128],     // Dark blue
        [128, 0, 128],   // Purple
        [128, 0, 0],     // Dark red
        [255, 0, 0],     // Red
        [255, 128, 0],   // Orange
        [255, 255, 0],   // Yellow
        [255, 255, 255]  // White
    ];
    
    const scaled = value * (colormaps.length - 1);
    const idx = Math.floor(scaled);
    const frac = scaled - idx;
    
    if (idx >= colormaps.length - 1) {
        return colormaps[colormaps.length - 1];
    }
    
    const c1 = colormaps[idx];
    const c2 = colormaps[idx + 1];
    
    return [
        c1[0] + frac * (c2[0] - c1[0]),
        c1[1] + frac * (c2[1] - c1[1]),
        c1[2] + frac * (c2[2] - c1[2])
    ];
}

function updateResolution(value) {
    // Resolution will be applied on next generation
}

function updateObjectType(value) {
    // Object type will be applied on next generation
}

function generateDataset() {
    // Get resolution
    const resSelect = document.getElementById('resolution-select')?.value || '320x240';
    const [width, height] = resSelect.split('x').map(Number);
    
    // Get parameters
    const distance = parseFloat(document.getElementById('obj-distance').value);
    const objTemp = parseFloat(document.getElementById('obj-temp').value);
    const bgTemp = parseFloat(document.getElementById('bg-temp').value);
    const visibility = parseFloat(document.getElementById('visibility').value);
    const netd = parseFloat(document.getElementById('noise-level').value) / 1000; // Convert mK to K
    const objectType = document.getElementById('object-type')?.value || 'person';
    
    // Advanced options
    const enablePSF = document.getElementById('enable-psf')?.checked !== false;
    const enable1fNoise = document.getElementById('enable-1f-noise')?.checked !== false;
    const enableNonlinearity = document.getElementById('enable-nonlinearity')?.checked || false;
    
    // Create raw thermal data
    const thermalData = new Float32Array(width * height);
    
    // Background temperature
    for (let i = 0; i < thermalData.length; i++) {
        thermalData[i] = bgTemp + (Math.random() - 0.5) * 2;
    }
    
    // Add object with realistic thermal signature
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Object size decreases with distance (angular size)
    const baseSize = objectType === 'person' ? 1.8 : objectType === 'vehicle' ? 4.0 : objectType === 'building' ? 10.0 : 1.8;
    const fov = 40 * Math.PI / 180; // 40 degree field of view
    const pixelAngle = fov / width;
    const apparentSizePixels = baseSize / (distance * Math.tan(pixelAngle));
    
    // Draw realistic object shape with thermal gradients
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const dx = x - centerX;
            const dy = y - centerY;
            const idx = y * width + x;
            
            let inObject = false;
            let tempVariation = 0;
            
            if (objectType === 'person') {
                // Realistic human thermal signature
                const inHead = (dx * dx) / (apparentSizePixels * 0.35) + (dy + apparentSizePixels * 0.7) ** 2 / (apparentSizePixels * 0.35) < 1;
                const inTorso = (dx * dx) / (apparentSizePixels * 0.45) + (dy - apparentSizePixels * 0.2) ** 2 / (apparentSizePixels * 1.0) < 1;
                const inLegLeft = ((dx + apparentSizePixels * 0.15) ** 2) / (apparentSizePixels * 0.15) + (dy - apparentSizePixels * 1.3) ** 2 / (apparentSizePixels * 0.8) < 1;
                const inLegRight = ((dx - apparentSizePixels * 0.15) ** 2) / (apparentSizePixels * 0.15) + (dy - apparentSizePixels * 1.3) ** 2 / (apparentSizePixels * 0.8) < 1;
                
                inObject = inHead || inTorso || inLegLeft || inLegRight;
                
                // Thermal gradients: head warmer, extremities cooler
                if (inHead) tempVariation = 0.05 * objTemp; // 5% warmer
                else if (inTorso) tempVariation = 0;
                else if (inLegLeft || inLegRight) tempVariation = -0.03 * objTemp; // 3% cooler
                
            } else if (objectType === 'vehicle') {
                // Vehicle (engine hot, body cooler)
                const inBody = (dx * dx) / (apparentSizePixels * 1.2) + (dy ** 2) / (apparentSizePixels * 0.6) < 1;
                const inEngine = (dx - apparentSizePixels * 0.8) ** 2 / (apparentSizePixels * 0.3) + (dy ** 2) / (apparentSizePixels * 0.4) < 1;
                const inWheels = ((dy - apparentSizePixels * 0.7) ** 2 < apparentSizePixels * 0.2) && (Math.abs(dx - apparentSizePixels * 0.5) < apparentSizePixels * 0.15 || Math.abs(dx + apparentSizePixels * 0.5) < apparentSizePixels * 0.15);
                
                inObject = inBody || inEngine || inWheels;
                
                if (inEngine) tempVariation = 0.15 * objTemp; // Engine 15% hotter
                else if (inWheels) tempVariation = 0.08 * objTemp; // Tires 8% hotter (friction)
                else if (inBody) tempVariation = -0.05 * objTemp; // Body cooler
                
            } else if (objectType === 'building') {
                // Building (windows hotter due to heat loss)
                const inStructure = Math.abs(dx) < apparentSizePixels * 1.5 && Math.abs(dy) < apparentSizePixels * 1.0;
                const inWindow1 = Math.abs(dx - apparentSizePixels * 0.5) < apparentSizePixels * 0.3 && Math.abs(dy + apparentSizePixels * 0.3) < apparentSizePixels * 0.3;
                const inWindow2 = Math.abs(dx + apparentSizePixels * 0.5) < apparentSizePixels * 0.3 && Math.abs(dy + apparentSizePixels * 0.3) < apparentSizePixels * 0.3;
                
                inObject = inStructure;
                
                if (inWindow1 || inWindow2) tempVariation = 0.10 * objTemp; // Windows 10% warmer
                else tempVariation = 0;
            }
            
            if (inObject) {
                // Apply atmospheric attenuation
                const attenuation = Math.exp(-distance / (visibility * 100));
                const effectiveTemp = bgTemp + (objTemp - bgTemp + tempVariation) * attenuation;
                
                // Add spatial temperature gradient (edges cooler - heat diffusion)
                const distFromCenter = Math.sqrt(dx * dx + dy * dy);
                const edgeFactor = Math.exp(-distFromCenter / (apparentSizePixels * 0.5));
                thermalData[idx] = effectiveTemp * edgeFactor + bgTemp * (1 - edgeFactor);
            }
        }
    }
    
    // Apply atmospheric PSF (Point Spread Function) - blur increases with distance
    if (enablePSF) {
        const psfSigma = Math.max(0.5, distance / 100); // Blur increases with distance
        applyGaussianBlur(thermalData, width, height, psfSigma);
    }
    
    // Add realistic sensor noise
    const gaussianNoise = netd; // White Gaussian noise from NETD
    for (let i = 0; i < thermalData.length; i++) {
        // Gaussian thermal noise
        thermalData[i] += (Math.random() - 0.5) * 2 * gaussianNoise;
    }
    
    // Add 1/f noise (low-frequency spatial correlations)
    if (enable1fNoise) {
        add1fNoise(thermalData, width, height, gaussianNoise * 0.5);
    }
    
    // Apply detector non-linearity
    if (enableNonlinearity) {
        for (let i = 0; i < thermalData.length; i++) {
            // Saturation curve: slight compression at extremes
            const normalized = (thermalData[i] - bgTemp) / (objTemp - bgTemp);
            const compressed = Math.sign(normalized) * Math.pow(Math.abs(normalized), 0.95);
            thermalData[i] = bgTemp + compressed * (objTemp - bgTemp);
        }
    }
    
    // Find min/max for normalization
    let minTemp = Infinity;
    let maxTemp = -Infinity;
    for (let i = 0; i < thermalData.length; i++) {
        minTemp = Math.min(minTemp, thermalData[i]);
        maxTemp = Math.max(maxTemp, thermalData[i]);
    }
    
    // Create ImageData with colormap
    const canvas = document.getElementById('thermal-canvas');
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(width, height);
    
    for (let i = 0; i < thermalData.length; i++) {
        const normalized = (thermalData[i] - minTemp) / (maxTemp - minTemp);
        const color = getIronColor(normalized);
        
        imageData.data[i * 4] = color[0];
        imageData.data[i * 4 + 1] = color[1];
        imageData.data[i * 4 + 2] = color[2];
        imageData.data[i * 4 + 3] = 255;
    }
    
    ctx.putImageData(imageData, 0, 0);
    
    // Update colorbar
    drawColorbar(minTemp, maxTemp);
    
    // Store dataset with metadata
    window.currentDataset = {
        width,
        height,
        thermalData,
        imageData,
        minTemp,
        maxTemp,
        params: { 
            distance, 
            objTemp, 
            bgTemp, 
            visibility, 
            netd: netd * 1000, // Store in mK
            objectType,
            resolution: resSelect,
            enablePSF,
            enable1fNoise,
            enableNonlinearity
        },
        metadata: {
            generated: new Date().toISOString(),
            simulator: 'FLIR Educational Platform v1.0',
            physicsModel: 'Stefan-Boltzmann + Beer-Lambert + Gaussian PSF'
        }
    };
    
    // Update statistics
    updateStatistics(thermalData, minTemp, maxTemp);
    
    // Draw histogram
    drawHistogram(thermalData, minTemp, maxTemp);
    
    // Update analysis canvas
    const analysisCanvas = document.getElementById('analysis-canvas');
    if (analysisCanvas) {
        const analysisCtx = analysisCanvas.getContext('2d');
        analysisCtx.putImageData(imageData, 0, 0);
    }
}

function drawColorbar(minTemp, maxTemp) {
    const canvas = document.getElementById('colorbar-canvas');
    const ctx = canvas.getContext('2d');
    
    const width = canvas.width;
    const height = canvas.height;
    
    for (let y = 0; y < height; y++) {
        const value = 1 - (y / height);
        const color = getIronColor(value);
        
        ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        ctx.fillRect(0, y, width, 1);
    }
    
    // Update labels
    document.getElementById('temp-max').textContent = maxTemp.toFixed(1) + 'K';
    document.getElementById('temp-min').textContent = minTemp.toFixed(1) + 'K';
}

function updateStatistics(data, minTemp, maxTemp) {
    // Calculate statistics
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    const mean = sum / data.length;
    
    let variance = 0;
    for (let i = 0; i < data.length; i++) {
        variance += (data[i] - mean) ** 2;
    }
    variance /= data.length;
    const stdDev = Math.sqrt(variance);
    
    // Calculate SNR (signal to noise ratio)
    const snr = mean / stdDev;
    
    const statsHtml = `
        <p><strong>Min Temperature:</strong> ${minTemp.toFixed(2)} K</p>
        <p><strong>Max Temperature:</strong> ${maxTemp.toFixed(2)} K</p>
        <p><strong>Mean Temperature:</strong> ${mean.toFixed(2)} K</p>
        <p><strong>Std Deviation:</strong> ${stdDev.toFixed(2)} K</p>
        <p><strong>Temperature Range:</strong> ${(maxTemp - minTemp).toFixed(2)} K</p>
        <p><strong>Estimated SNR:</strong> ${(20 * Math.log10(snr)).toFixed(2)} dB</p>
        <p><strong>Pixels:</strong> ${data.length.toLocaleString()}</p>
    `;
    
    document.getElementById('stats-display').innerHTML = statsHtml;
}

function drawHistogram(data, minTemp, maxTemp) {
    const canvas = document.getElementById('histogram-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Create histogram
    const bins = 50;
    const histogram = new Array(bins).fill(0);
    
    for (let i = 0; i < data.length; i++) {
        const binIdx = Math.floor(((data[i] - minTemp) / (maxTemp - minTemp)) * (bins - 1));
        histogram[Math.max(0, Math.min(bins - 1, binIdx))]++;
    }
    
    // Draw histogram
    const maxCount = Math.max(...histogram);
    const barWidth = canvas.width / bins;
    
    ctx.fillStyle = '#ff4500';
    for (let i = 0; i < bins; i++) {
        const barHeight = (histogram[i] / maxCount) * (canvas.height - 20);
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 1, barHeight);
    }
    
    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Temperature Distribution', canvas.width / 2, 15);
}

function updateDistance(value) {
    document.getElementById('distance-val').textContent = value;
}

function updateObjTemp(value) {
    document.getElementById('obj-temp-val').textContent = value;
}

function updateBgTemp(value) {
    document.getElementById('bg-temp-val').textContent = value;
}

function updateVisibility(value) {
    document.getElementById('visibility-val').textContent = value;
}

function updateNoise(value) {
    document.getElementById('noise-val').textContent = value;
}

function loadPreset(preset) {
    switch(preset) {
        case 'person-near':
            document.getElementById('obj-distance').value = 10;
            document.getElementById('obj-temp').value = 310;
            document.getElementById('bg-temp').value = 290;
            document.getElementById('visibility').value = 10;
            document.getElementById('noise-level').value = 10;
            break;
        case 'vehicle-mid':
            document.getElementById('obj-distance').value = 100;
            document.getElementById('obj-temp').value = 320;
            document.getElementById('bg-temp').value = 295;
            document.getElementById('visibility').value = 8;
            document.getElementById('noise-level').value = 25;
            break;
        case 'building-far':
            document.getElementById('obj-distance').value = 500;
            document.getElementById('obj-temp').value = 305;
            document.getElementById('bg-temp').value = 295;
            document.getElementById('visibility').value = 5;
            document.getElementById('noise-level').value = 40;
            break;
        case 'no-object':
            document.getElementById('obj-distance').value = 1000;
            document.getElementById('obj-temp').value = 295;
            document.getElementById('bg-temp').value = 295;
            document.getElementById('visibility').value = 10;
            document.getElementById('noise-level').value = 30;
            break;
    }
    
    // Update display values
    updateDistance(document.getElementById('obj-distance').value);
    updateObjTemp(document.getElementById('obj-temp').value);
    updateBgTemp(document.getElementById('bg-temp').value);
    updateVisibility(document.getElementById('visibility').value);
    updateNoise(document.getElementById('noise-level').value);
    
    generateDataset();
}

// Advanced processing functions
function applyGaussianBlur(data, width, height, sigma) {
    const kernelSize = Math.ceil(sigma * 3) * 2 + 1;
    const halfKernel = Math.floor(kernelSize / 2);
    const kernel = [];
    let kernelSum = 0;
    
    // Create Gaussian kernel
    for (let i = -halfKernel; i <= halfKernel; i++) {
        const weight = Math.exp(-(i * i) / (2 * sigma * sigma));
        kernel.push(weight);
        kernelSum += weight;
    }
    
    // Normalize kernel
    for (let i = 0; i < kernel.length; i++) {
        kernel[i] /= kernelSum;
    }
    
    // Apply separable Gaussian blur
    const temp = new Float32Array(width * height);
    
    // Horizontal pass
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let sum = 0;
            for (let k = -halfKernel; k <= halfKernel; k++) {
                const nx = Math.max(0, Math.min(width - 1, x + k));
                sum += data[y * width + nx] * kernel[k + halfKernel];
            }
            temp[y * width + x] = sum;
        }
    }
    
    // Vertical pass
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let sum = 0;
            for (let k = -halfKernel; k <= halfKernel; k++) {
                const ny = Math.max(0, Math.min(height - 1, y + k));
                sum += temp[ny * width + x] * kernel[k + halfKernel];
            }
            data[y * width + x] = sum;
        }
    }
}

function add1fNoise(data, width, height, amplitude) {
    // Simplified 1/f noise using low-frequency components
    const freqComponents = 5;
    
    for (let freq = 1; freq <= freqComponents; freq++) {
        const wavelength = Math.min(width, height) / freq;
        const phaseX = Math.random() * 2 * Math.PI;
        const phaseY = Math.random() * 2 * Math.PI;
        const noiseAmp = amplitude / freq; // 1/f amplitude
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const noise = noiseAmp * (
                    Math.sin(2 * Math.PI * x / wavelength + phaseX) +
                    Math.sin(2 * Math.PI * y / wavelength + phaseY)
                );
                data[y * width + x] += noise;
            }
        }
    }
}

function downloadDataset() {
    if (!window.currentDataset) {
        alert('Please generate a dataset first');
        return;
    }
    
    const data = window.currentDataset;
    
    // Create CSV format with comprehensive header
    let csv = `# FLIR Simulated Thermal Dataset\n`;
    csv += `# Generated: ${data.metadata.generated}\n`;
    csv += `# Simulator: ${data.metadata.simulator}\n`;
    csv += `# Physics Model: ${data.metadata.physicsModel}\n`;
    csv += `# Resolution: ${data.width}×${data.height} pixels\n`;
    csv += `# Object Type: ${data.params.objectType}\n`;
    csv += `# Distance: ${data.params.distance}m\n`;
    csv += `# Object Temp: ${data.params.objTemp}K, Background: ${data.params.bgTemp}K\n`;
    csv += `# Atmospheric Visibility: ${data.params.visibility}km\n`;
    csv += `# Sensor NETD: ${data.params.netd}mK\n`;
    csv += `# PSF Enabled: ${data.params.enablePSF}, 1/f Noise: ${data.params.enable1fNoise}, Nonlinearity: ${data.params.enableNonlinearity}\n`;
    csv += `# Temperature Range: ${data.minTemp.toFixed(3)}K to ${data.maxTemp.toFixed(3)}K\n`;
    csv += `#\n`;
    csv += `# Data format: row,col,temperature(K)\n`;
    csv += `row,col,temperature\n`;
    
    for (let y = 0; y < data.height; y++) {
        for (let x = 0; x < data.width; x++) {
            const idx = y * data.width + x;
            csv += `${y},${x},${data.thermalData[idx].toFixed(4)}\n`;
        }
    }
    
    // Create download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flir_thermal_${data.params.objectType}_${data.params.distance}m_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}

function downloadDatasetJSON() {
    if (!window.currentDataset) {
        alert('Please generate a dataset first');
        return;
    }
    
    const data = window.currentDataset;
    
    // Create comprehensive JSON format (FLIR-compatible)
    const jsonData = {
        metadata: data.metadata,
        parameters: data.params,
        dimensions: {
            width: data.width,
            height: data.height,
            pixels: data.width * data.height
        },
        statistics: {
            minTemperature: data.minTemp,
            maxTemperature: data.maxTemp,
            temperatureRange: data.maxTemp - data.minTemp
        },
        thermalData: Array.from(data.thermalData),
        format: 'FLIR-EDU-JSON-v1.0',
        units: {
            temperature: 'Kelvin',
            distance: 'meters',
            netd: 'milliKelvin'
        }
    };
    
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flir_thermal_${data.params.objectType}_${data.params.distance}m_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function loadDatasetFile(input) {
    const file = input.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const content = e.target.result;
        
        if (file.name.endsWith('.json')) {
            loadJSONDataset(content);
        } else if (file.name.endsWith('.csv')) {
            loadCSVDataset(content);
        }
    };
    
    reader.readAsText(file);
}

function loadJSONDataset(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        
        if (!data.thermalData || !data.dimensions) {
            alert('Invalid JSON format. Must contain thermalData and dimensions.');
            return;
        }
        
        const width = data.dimensions.width;
        const height = data.dimensions.height;
        const thermalData = new Float32Array(data.thermalData);
        
        // Find min/max
        let minTemp = Math.min(...thermalData);
        let maxTemp = Math.max(...thermalData);
        
        // Create image
        const canvas = document.getElementById('thermal-canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(width, height);
        
        for (let i = 0; i < thermalData.length; i++) {
            const normalized = (thermalData[i] - minTemp) / (maxTemp - minTemp);
            const color = getIronColor(normalized);
            
            imageData.data[i * 4] = color[0];
            imageData.data[i * 4 + 1] = color[1];
            imageData.data[i * 4 + 2] = color[2];
            imageData.data[i * 4 + 3] = 255;
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        // Update displays
        drawColorbar(minTemp, maxTemp);
        updateStatistics(thermalData, minTemp, maxTemp);
        drawHistogram(thermalData, minTemp, maxTemp);
        
        // Store dataset
        window.currentDataset = {
            width,
            height,
            thermalData,
            imageData,
            minTemp,
            maxTemp,
            params: data.parameters || {},
            metadata: data.metadata || {}
        };
        
        // Update analysis canvas
        const analysisCanvas = document.getElementById('analysis-canvas');
        if (analysisCanvas) {
            analysisCanvas.width = width;
            analysisCanvas.height = height;
            const analysisCtx = analysisCanvas.getContext('2d');
            analysisCtx.putImageData(imageData, 0, 0);
        }
        
        alert(`✓ Loaded ${file.name}\nResolution: ${width}×${height}\nSource: ${data.metadata?.simulator || 'External'}`);
        
    } catch (error) {
        alert('Error loading JSON dataset: ' + error.message);
    }
}

function loadCSVDataset(csvString) {
    try {
        const lines = csvString.split('\n');
        const dataLines = lines.filter(line => !line.startsWith('#') && line.trim() && line.includes(','));
        
        if (dataLines.length < 2) {
            alert('Invalid CSV format');
            return;
        }
        
        // Parse data
        const temps = [];
        let maxRow = 0, maxCol = 0;
        
        for (let i = 1; i < dataLines.length; i++) { // Skip header
            const parts = dataLines[i].split(',');
            if (parts.length >= 3) {
                const row = parseInt(parts[0]);
                const col = parseInt(parts[1]);
                const temp = parseFloat(parts[2]);
                
                maxRow = Math.max(maxRow, row);
                maxCol = Math.max(maxCol, col);
                temps.push({ row, col, temp });
            }
        }
        
        const width = maxCol + 1;
        const height = maxRow + 1;
        const thermalData = new Float32Array(width * height);
        
        temps.forEach(({ row, col, temp }) => {
            thermalData[row * width + col] = temp;
        });
        
        // Render loaded dataset
        const minTemp = Math.min(...thermalData);
        const maxTemp = Math.max(...thermalData);
        
        const canvas = document.getElementById('thermal-canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.createImageData(width, height);
        
        for (let i = 0; i < thermalData.length; i++) {
            const normalized = (thermalData[i] - minTemp) / (maxTemp - minTemp);
            const color = getIronColor(normalized);
            
            imageData.data[i * 4] = color[0];
            imageData.data[i * 4 + 1] = color[1];
            imageData.data[i * 4 + 2] = color[2];
            imageData.data[i * 4 + 3] = 255;
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        drawColorbar(minTemp, maxTemp);
        updateStatistics(thermalData, minTemp, maxTemp);
        drawHistogram(thermalData, minTemp, maxTemp);
        
        window.currentDataset = {
            width,
            height,
            thermalData,
            imageData,
            minTemp,
            maxTemp,
            params: {},
            metadata: { loaded: new Date().toISOString(), source: 'CSV Import' }
        };
        
        alert(`✓ Loaded CSV dataset\nResolution: ${width}×${height}`);
        
    } catch (error) {
        alert('Error loading CSV dataset: ' + error.message);
    }
}


