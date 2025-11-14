# FLIR Imaging Educational Platform

## Overview
Interactive web-based educational platform for teaching Forward-Looking Infrared (FLIR) imaging technology. Features real-time simulations, 3D hardware visualization, synthetic datasets, and comprehensive analysis tools.

## Features

### 1. **Introduction Section**
- Electromagnetic spectrum visualization
- FLIR wavelength bands (MWIR 3-5μm, LWIR 8-14μm)
- Applications and use cases

### 2. **Theory & Fundamentals**
- **Stefan-Boltzmann Law**: Blackbody radiation calculations
- **Planck's Law**: Interactive spectral radiance curves
- **Atmospheric Transmission**: Window analysis
- **Signal-to-Noise Ratio**: Noise models and calculations
- **Johnson Criteria**: Detection, recognition, identification standards

### 3. **3D Hardware Visualization**
- Interactive Three.js model of FLIR camera
- Components: lens system, detector array, cooling system, housing
- Click-and-drag rotation, zoom functionality
- Detailed specifications for each component

### 4. **Synthetic Datasets**
- Realistic thermal scene generation
- Adjustable parameters:
  - Object distance (10m - 500m)
  - Object temperature (300K - 400K)
  - Background temperature
  - Atmospheric visibility
  - Noise levels
- Iron colormap thermal visualization
- Statistical analysis (mean, std dev, SNR)
- Histogram visualization
- CSV data export

### 5. **Analysis Tools**
- **Spatial Filtering**: Gaussian blur, median filter, sharpening
- **Enhancement**: Histogram equalization, CLAHE, contrast adjustment
- **Edge Detection**: Sobel, Canny algorithms
- **Object Detection**: Threshold-based detection with bounding boxes
- Real-time processing pipeline

### 6. **Real-Time Simulation**
- Live thermal scene rendering
- Multiple moving objects
- Motion patterns: static, linear, random walk
- Adjustable camera parameters:
  - Frame rate
  - Integration time
  - Field of view
- Performance metrics (SNR, detection range, frame time)
- Detection range calculator based on Johnson criteria

## Technical Implementation

### Technologies Used
- **HTML5/CSS3**: Responsive design, modern UI
- **JavaScript (ES6+)**: Core functionality
- **Three.js**: 3D hardware visualization
- **Chart.js**: Data plotting (referenced, expandable)
- **MathJax**: Mathematical formula rendering

### File Structure
```
flir/
├── index.html              # Main HTML structure
├── style.css              # Responsive styling
├── app.js                 # Main application controller
├── flir-data.js           # Dataset generation and management
├── flir-analysis.js       # Image analysis algorithms
├── flir-simulation.js     # Real-time simulation engine
├── flir-3d.js            # Three.js 3D visualization
├── todo.md               # Development plan and checklist
└── README.md             # This file
```

## Physics & Algorithms

### Thermal Modeling
- **Blackbody Radiation**: Stefan-Boltzmann law (M = εσT⁴)
- **Spectral Distribution**: Planck's law for wavelength-dependent radiance
- **Atmospheric Attenuation**: Beer-Lambert law (τ = e^(-αd))

### Image Processing
- **Convolution Filters**: Gaussian, median, sharpening kernels
- **Edge Detection**: Sobel gradient operators, Canny multi-stage
- **Histogram Equalization**: CDF-based contrast enhancement
- **CLAHE**: Contrast Limited Adaptive Histogram Equalization

### Detection Range Calculation
Based on Johnson Criteria:
- **Detection**: 2 line pairs across target
- **Recognition**: 8 line pairs
- **Identification**: 12 line pairs

Range limited by:
1. Geometric resolution (pixel size × distance)
2. SNR (NETD vs target-background ΔT)
3. Atmospheric transmission

## Usage Instructions

### Getting Started
1. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, Edge)
2. Navigate through sections using the top menu bar
3. All features are client-side JavaScript - no server required

### Section Guides

#### Theory Section
- Adjust temperature sliders to see real-time Planck curve updates
- Use calculators to compute radiance values
- Study atmospheric transmission windows

#### Hardware 3D
- Click and drag to rotate the 3D camera model
- Scroll to zoom
- Click component buttons for detailed specifications
- Components highlight on interaction

#### Datasets
- Adjust scenario parameters with sliders
- Click "Generate Dataset" to create new thermal images
- Use preset buttons for quick scenarios
- Download data as CSV for external analysis

#### Analysis Tools
- Generated datasets automatically load for analysis
- Apply filters in sequence to build processing pipelines
- Adjust parameters with sliders for real-time feedback
- Detection algorithm draws bounding boxes on targets

#### Simulation
- Click "Start Simulation" for real-time thermal video
- Add multiple moving objects
- Adjust camera settings to see effects on image quality
- Use detection range calculator for system design

## Educational Applications

### Lesson Plans
1. **Introduction to IR Physics** (45 min)
   - Theory section: radiation laws
   - Planck curves at different temperatures
   - Atmospheric windows

2. **Hardware Systems** (30 min)
   - 3D model exploration
   - Component trade-offs (cooled vs uncooled)
   - Material selection for optics

3. **Hands-On Data Analysis** (60 min)
   - Generate datasets at various ranges
   - Apply filtering and enhancement
   - Implement object detection
   - Analyze SNR vs range

4. **System Design** (45 min)
   - Real-time simulation
   - Detection range calculations
   - Performance trade-offs

### Learning Objectives
- Understand fundamental IR physics
- Identify FLIR camera components and functions
- Apply image processing algorithms
- Calculate detection ranges using Johnson criteria
- Design systems for specific applications

## Performance & Compatibility

### Browser Requirements
- Modern browser with JavaScript ES6+ support
- WebGL support for 3D graphics
- Canvas API for image rendering

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Notes
- Dataset generation: < 100ms for 320×240 images
- Analysis operations: Real-time for most filters
- 3D rendering: 60 FPS on modern hardware
- Simulation: 30 FPS default, adjustable

## Future Enhancements

### Potential Additions
- [ ] WebGL-accelerated image processing
- [ ] Additional detector types (InGaAs, etc.)
- [ ] Multi-spectral fusion demonstrations
- [ ] Advanced tracking algorithms
- [ ] 3D scene reconstruction from thermal
- [ ] Export analysis results as reports
- [ ] More detailed atmospheric models (MODTRAN integration)
- [ ] Camera calibration tutorials

## References & Resources

### Fundamental Theory
- **Stefan-Boltzmann Law**: Total radiated power from blackbodies
- **Planck's Law**: Spectral distribution of blackbody radiation
- **Johnson Criteria**: Military standard for target acquisition (STANAG 4347)

### Industry Standards
- SPIE Infrared Imaging Handbook
- Electro-Optical System Design (Friedman & Miller)
- FLIR Systems Technical Documentation

### Web Technologies
- Three.js Documentation: https://threejs.org/docs/
- WebGL Fundamentals: https://webglfundamentals.org/
- MathJax: https://www.mathjax.org/

## License & Usage
Educational use. All physics calculations based on established scientific principles. Simulated data for training purposes only.

## Credits
Developed as an educational tool for teaching FLIR imaging concepts. Uses established physics models and image processing algorithms from scientific literature.

---

## Recent Enhancements (Latest Updates)

### **Content & Research Integration** ✅
- [x] Added comprehensive prose-style Introduction (4 paragraphs, 650+ words)
- [x] Added detailed Theory introduction (3 paragraphs, 550+ words)
- [x] Integrated 10 professional references with working links:
  - DSIAC (Defense Systems), IEC Infrared, SPIE, NIST, peer-reviewed journals
  - Historical sources (Johnson 1958, Lloyd 1975, Holst 2008)
  - Recent industry sources (2019-2023)
- [x] Added real-world examples: Operation Desert Storm, Arlington Police (2021)
- [x] Enhanced Johnson Criteria table with descriptions column
- [x] Added "Key Advantages" section with 4 interactive cards
- [x] Professional academic citations throughout text

### **3D Hardware Improvements** ✅
- [x] Fixed lighting (4 light sources, brighter rendering)
- [x] Added **Exploded View** animation (smooth 1-second transitions)
- [x] Added **Component Visibility** toggles (5 checkboxes)
- [x] Reorganized control panel with sections
- [x] Added Focus buttons (2×2 grid for quick component zoom)
- [x] Removed Three.js console warning (metalness property)

### **Visual & Style Enhancements** ✅
- [x] Added `.prose-section` styling for rich text content
- [x] Professional hyperlinks with hover effects
- [x] Professional references section with numbered list
- [x] Advantage cards with emoji icons and hover animations
- [x] Enhanced Johnson table (3 columns, hover effects)
- [x] Responsive captions for visualizations

### **Defense Department Professional Theme** ✅
- [x] Complete redesign to professional light mode
- [x] Official color scheme: Navy Blue (#003366), Red (#C41E3A), White
- [x] Government/defense department aesthetic
- [x] High contrast for accessibility (WCAG AA/AAA compliant)
- [x] Uppercase headings with letter-spacing
- [x] Sharp corners (border-radius: 0) - professional
- [x] Standardized button styles (primary navy, secondary white/bordered)
- [x] Official typography (Arial/Helvetica)
- [x] Professional shadows and borders
- [x] Suitable for military/government presentations

### **Enhanced Interactive Theory Section** ✅
- [x] Added comprehensive "Application to FLIR Imaging" explanations for each equation
- [x] Explained what each equation computes and why it matters
- [x] Detailed parameter effects on imaging performance
- [x] **Stefan-Boltzmann:** Comparison calculator (2 objects side-by-side)
- [x] **Planck's Law:** Multi-curve overlays (human/vehicle/fire temperatures)
- [x] **Planck's Law:** Toggle MWIR/LWIR band highlighting
- [x] **Atmospheric:** 4 condition presets (clear/haze/fog with real α values)
- [x] **Atmospheric:** Distance slider with real-time transmission calculation
- [x] **SNR:** Interactive calculator with 3 noise parameters
- [x] **SNR:** Detector type presets (uncooled/InSb/HgCdTe) for instant comparison
- [x] Color-coded results (green=good, orange=warning, red=poor)
- [x] ~800 words of parameter effect explanations
- [x] Real-world values from literature (NETD, α coefficients)

### **State-of-the-Art Dataset Generation** ✅ (Latest)
- [x] **Multiple resolutions:** 320×240, 640×480, 640×512 (FLIR Tau 2 compatible)
- [x] **Realistic object types:** Person, Vehicle, Building with accurate thermal signatures
- [x] **Thermal gradients:** Head/extremities temperature variations, engine hotspots, window heat loss
- [x] **Atmospheric PSF:** Distance-dependent blur (σ ∝ distance/100)
- [x] **Advanced noise:** Gaussian + 1/f noise (spatial correlations) + detector nonlinearity
- [x] **NETD-based sensor model:** 20-200mK range (matches commercial/military specs)
- [x] **JSON export:** Full metadata, parameters, timestamps (FLIR-EDU-JSON-v1.0 format)
- [x] **CSV export:** Enhanced headers with complete provenance
- [x] **Load capability:** Import previously saved datasets (JSON/CSV)
- [x] **Toggleable features:** PSF, 1/f noise, nonlinearity - see individual effects
- [x] **Professional workflow:** Generate → Save → Load → Analyze like real systems
- [x] Matches FLIR ADAS dataset specifications (640×512, realistic scenes)

## Quick Start Checklist for Class Demo
- [x] All sections functional
- [x] Theory calculators working
- [x] 3D model interactive with exploded view
- [x] Dataset generation with presets
- [x] Analysis tools operational
- [x] Simulation running smoothly
- [x] Detection range calculator accurate
- [x] Local server running on port 8000
- [x] All interactive elements responsive
- [x] Comprehensive references section
- [x] Professional academic content

**✅ READY FOR DEMO! 🎉**

### Demo URL
- **File system**: `file:///Users/kylemathewson/flir/index.html`
- **Local server**: `http://localhost:8000/`

### Pre-Demo Checklist
1. Open in browser (Chrome recommended)
2. Check 3D model loads (Three.js)
3. Check MathJax renders formulas
4. Test one preset dataset generation
5. Test simulation start/stop
6. Full screen for projector (F11/Cmd+Shift+F)

