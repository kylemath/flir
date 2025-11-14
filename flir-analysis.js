// FLIR Image Analysis Tools

let analysisState = {
    currentStep: 'original',
    originalData: null,
    processedData: null,
    kernelSize: 5,
    contrast: 1.0,
    edgeThreshold: 50,
    detectThreshold: 50
};

function initAnalysis() {
    // Setup processing step buttons
    const steps = document.querySelectorAll('.process-step');
    steps.forEach(step => {
        step.addEventListener('click', () => {
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
            analysisState.currentStep = step.dataset.step;
            displayProcessedImage();
        });
    });
}

function applyFilter(filterType) {
    if (!window.currentDataset) {
        alert('Please generate a dataset first');
        return;
    }
    
    const data = window.currentDataset;
    analysisState.originalData = new Float32Array(data.thermalData);
    
    const width = data.width;
    const height = data.height;
    const result = new Float32Array(width * height);
    const k = analysisState.kernelSize;
    const halfK = Math.floor(k / 2);
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            
            if (filterType === 'gaussian') {
                // Gaussian blur
                let sum = 0;
                let weightSum = 0;
                
                for (let ky = -halfK; ky <= halfK; ky++) {
                    for (let kx = -halfK; kx <= halfK; kx++) {
                        const ny = Math.max(0, Math.min(height - 1, y + ky));
                        const nx = Math.max(0, Math.min(width - 1, x + kx));
                        const nidx = ny * width + nx;
                        
                        const weight = Math.exp(-(kx * kx + ky * ky) / (2 * (k / 3) * (k / 3)));
                        sum += data.thermalData[nidx] * weight;
                        weightSum += weight;
                    }
                }
                result[idx] = sum / weightSum;
                
            } else if (filterType === 'median') {
                // Median filter
                const neighbors = [];
                
                for (let ky = -halfK; ky <= halfK; ky++) {
                    for (let kx = -halfK; kx <= halfK; kx++) {
                        const ny = Math.max(0, Math.min(height - 1, y + ky));
                        const nx = Math.max(0, Math.min(width - 1, x + kx));
                        const nidx = ny * width + nx;
                        neighbors.push(data.thermalData[nidx]);
                    }
                }
                
                neighbors.sort((a, b) => a - b);
                result[idx] = neighbors[Math.floor(neighbors.length / 2)];
                
            } else if (filterType === 'sharpen') {
                // Sharpening filter
                const center = data.thermalData[idx];
                let sum = 0;
                let count = 0;
                
                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        if (kx === 0 && ky === 0) continue;
                        
                        const ny = Math.max(0, Math.min(height - 1, y + ky));
                        const nx = Math.max(0, Math.min(width - 1, x + kx));
                        const nidx = ny * width + nx;
                        sum += data.thermalData[nidx];
                        count++;
                    }
                }
                
                const avg = sum / count;
                result[idx] = center + 2 * (center - avg);
            }
        }
    }
    
    analysisState.processedData = result;
    updateAnalysisDisplay(result, data.minTemp, data.maxTemp);
    
    document.getElementById('detection-results').innerHTML = 
        `<p>✓ Applied ${filterType} filter with kernel size ${k}</p>`;
}

function applyEnhancement(enhanceType) {
    if (!window.currentDataset) {
        alert('Please generate a dataset first');
        return;
    }
    
    const data = window.currentDataset;
    const width = data.width;
    const height = data.height;
    const result = new Float32Array(data.thermalData);
    
    if (enhanceType === 'histogram-eq') {
        // Histogram equalization
        const histogram = new Array(256).fill(0);
        
        // Build histogram
        for (let i = 0; i < result.length; i++) {
            const bin = Math.floor(((result[i] - data.minTemp) / (data.maxTemp - data.minTemp)) * 255);
            histogram[Math.max(0, Math.min(255, bin))]++;
        }
        
        // Compute CDF
        const cdf = new Array(256);
        cdf[0] = histogram[0];
        for (let i = 1; i < 256; i++) {
            cdf[i] = cdf[i - 1] + histogram[i];
        }
        
        // Normalize CDF
        const cdfMin = cdf.find(v => v > 0);
        const totalPixels = width * height;
        
        // Apply equalization
        for (let i = 0; i < result.length; i++) {
            const bin = Math.floor(((result[i] - data.minTemp) / (data.maxTemp - data.minTemp)) * 255);
            const clampedBin = Math.max(0, Math.min(255, bin));
            const newValue = ((cdf[clampedBin] - cdfMin) / (totalPixels - cdfMin)) * (data.maxTemp - data.minTemp) + data.minTemp;
            result[i] = newValue;
        }
        
    } else if (enhanceType === 'clahe') {
        // Simplified CLAHE (Contrast Limited Adaptive Histogram Equalization)
        const tileSize = 40;
        const clipLimit = 2.0;
        
        for (let ty = 0; ty < height; ty += tileSize) {
            for (let tx = 0; tx < width; tx += tileSize) {
                const tileHistogram = new Array(256).fill(0);
                
                // Build tile histogram
                for (let y = ty; y < Math.min(height, ty + tileSize); y++) {
                    for (let x = tx; x < Math.min(width, tx + tileSize); x++) {
                        const idx = y * width + x;
                        const bin = Math.floor(((result[idx] - data.minTemp) / (data.maxTemp - data.minTemp)) * 255);
                        tileHistogram[Math.max(0, Math.min(255, bin))]++;
                    }
                }
                
                // Apply enhancement to tile
                const tilePixels = (Math.min(height, ty + tileSize) - ty) * (Math.min(width, tx + tileSize) - tx);
                const avgBin = tilePixels / 256;
                
                for (let y = ty; y < Math.min(height, ty + tileSize); y++) {
                    for (let x = tx; x < Math.min(width, tx + tileSize); x++) {
                        const idx = y * width + x;
                        result[idx] *= analysisState.contrast;
                    }
                }
            }
        }
    }
    
    analysisState.processedData = result;
    updateAnalysisDisplay(result, data.minTemp, data.maxTemp);
    
    document.getElementById('detection-results').innerHTML = 
        `<p>✓ Applied ${enhanceType} enhancement</p>`;
}

function applyEdge(edgeType) {
    if (!window.currentDataset) {
        alert('Please generate a dataset first');
        return;
    }
    
    const data = window.currentDataset;
    const width = data.width;
    const height = data.height;
    const result = new Float32Array(width * height);
    
    if (edgeType === 'sobel') {
        // Sobel edge detection
        const sobelX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
        const sobelY = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
        
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                let gx = 0;
                let gy = 0;
                
                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        const idx = (y + ky) * width + (x + kx);
                        gx += data.thermalData[idx] * sobelX[ky + 1][kx + 1];
                        gy += data.thermalData[idx] * sobelY[ky + 1][kx + 1];
                    }
                }
                
                const idx = y * width + x;
                result[idx] = Math.sqrt(gx * gx + gy * gy);
            }
        }
        
    } else if (edgeType === 'canny') {
        // Simplified Canny edge detection (Sobel + thresholding)
        const sobelX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
        const sobelY = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
        
        const magnitude = new Float32Array(width * height);
        let maxMag = 0;
        
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                let gx = 0;
                let gy = 0;
                
                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        const idx = (y + ky) * width + (x + kx);
                        gx += data.thermalData[idx] * sobelX[ky + 1][kx + 1];
                        gy += data.thermalData[idx] * sobelY[ky + 1][kx + 1];
                    }
                }
                
                const idx = y * width + x;
                magnitude[idx] = Math.sqrt(gx * gx + gy * gy);
                maxMag = Math.max(maxMag, magnitude[idx]);
            }
        }
        
        // Threshold
        const threshold = (analysisState.edgeThreshold / 100) * maxMag;
        for (let i = 0; i < result.length; i++) {
            result[i] = magnitude[i] > threshold ? magnitude[i] : 0;
        }
    }
    
    analysisState.processedData = result;
    const minEdge = Math.min(...result);
    const maxEdge = Math.max(...result);
    updateAnalysisDisplay(result, minEdge, maxEdge);
    
    document.getElementById('detection-results').innerHTML = 
        `<p>✓ Applied ${edgeType} edge detection</p>`;
}

function detectObjects() {
    if (!window.currentDataset) {
        alert('Please generate a dataset first');
        return;
    }
    
    const data = window.currentDataset;
    const width = data.width;
    const height = data.height;
    
    // Simple threshold-based detection
    const threshold = data.minTemp + (data.maxTemp - data.minTemp) * (analysisState.detectThreshold / 100);
    
    // Connected components labeling (simplified)
    const labels = new Int32Array(width * height);
    let currentLabel = 1;
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            
            if (data.thermalData[idx] > threshold && labels[idx] === 0) {
                // Flood fill
                const stack = [[x, y]];
                let objectSize = 0;
                
                while (stack.length > 0) {
                    const [cx, cy] = stack.pop();
                    const cidx = cy * width + cx;
                    
                    if (cx < 0 || cx >= width || cy < 0 || cy >= height) continue;
                    if (labels[cidx] !== 0) continue;
                    if (data.thermalData[cidx] <= threshold) continue;
                    
                    labels[cidx] = currentLabel;
                    objectSize++;
                    
                    stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
                }
                
                if (objectSize > 100) { // Minimum object size
                    currentLabel++;
                }
            }
        }
    }
    
    const numObjects = currentLabel - 1;
    
    // Draw bounding boxes
    const canvas = document.getElementById('analysis-canvas');
    const ctx = canvas.getContext('2d');
    
    // Redraw base image
    updateAnalysisDisplay(data.thermalData, data.minTemp, data.maxTemp);
    
    // Draw detection boxes
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    
    for (let label = 1; label < currentLabel; label++) {
        let minX = width, maxX = 0, minY = height, maxY = 0;
        
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (labels[y * width + x] === label) {
                    minX = Math.min(minX, x);
                    maxX = Math.max(maxX, x);
                    minY = Math.min(minY, y);
                    maxY = Math.max(maxY, y);
                }
            }
        }
        
        ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
        ctx.fillStyle = '#00ff00';
        ctx.font = '12px Arial';
        ctx.fillText(`Object ${label}`, minX, minY - 5);
    }
    
    document.getElementById('detection-results').innerHTML = 
        `<p><strong>✓ Detection Complete</strong></p>
         <p>Objects detected: ${numObjects}</p>
         <p>Detection threshold: ${threshold.toFixed(2)}K</p>`;
}

function updateAnalysisDisplay(data, minTemp, maxTemp) {
    const canvas = document.getElementById('analysis-canvas');
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    
    for (let i = 0; i < data.length; i++) {
        const normalized = (data[i] - minTemp) / (maxTemp - minTemp);
        const color = getIronColor(Math.max(0, Math.min(1, normalized)));
        
        imageData.data[i * 4] = color[0];
        imageData.data[i * 4 + 1] = color[1];
        imageData.data[i * 4 + 2] = color[2];
        imageData.data[i * 4 + 3] = 255;
    }
    
    ctx.putImageData(imageData, 0, 0);
}

function updateKernelSize(value) {
    analysisState.kernelSize = parseInt(value);
    document.getElementById('kernel-val').textContent = value;
}

function updateContrast(value) {
    analysisState.contrast = parseFloat(value);
    document.getElementById('contrast-val').textContent = value;
}

function updateEdgeThresh(value) {
    analysisState.edgeThreshold = parseFloat(value);
    document.getElementById('edge-val').textContent = value;
}

function updateDetectThresh(value) {
    analysisState.detectThreshold = parseFloat(value);
    document.getElementById('detect-val').textContent = value;
}

function resetAnalysis() {
    if (window.currentDataset) {
        const canvas = document.getElementById('analysis-canvas');
        const ctx = canvas.getContext('2d');
        ctx.putImageData(window.currentDataset.imageData, 0, 0);
        
        document.getElementById('detection-results').innerHTML = 
            '<p>Analysis reset. Apply tools to see results.</p>';
    }
}

function displayProcessedImage() {
    // This function could switch between different processing steps
    // For now, it maintains the current display
}

