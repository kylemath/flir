# FLIR Educational Platform - Demo Guide for Class

## Quick Access
**URL**: http://localhost:8000/
**Backup**: Open `index.html` directly in browser

---

## 10-Minute Demo Flow

### 1. Introduction (1 min)
**Navigate to**: Introduction tab
- Show EM spectrum visualization
- Point out MWIR (3-5μm) and LWIR (8-14μm) bands
- Mention applications: night vision, search & rescue, autonomous vehicles

**Key Point**: "FLIR cameras detect infrared light invisible to human eye"

---

### 2. Theory Fundamentals (2 min)
**Navigate to**: Theory tab
- **Stefan-Boltzmann Law**: 
  - Show formula: M = εσT⁴
  - Enter T=310K (human body temp) → Calculate
  - Result: ~520 W/m² radiated power
  
- **Planck's Law**:
  - Drag temperature slider (250K → 400K)
  - Watch curve peak shift
  - Highlight MWIR/LWIR windows (orange boxes)
  
**Key Point**: "Hotter objects emit more infrared radiation - that's what we detect"

---

### 3. Hardware 3D Model (2 min)
**Navigate to**: Hardware 3D tab
- **Interactive demo**:
  - Click and drag to rotate model
  - Click "Optics System" → explain Germanium lens
  - Click "Detector Array" → explain FPA (Focal Plane Array)
  - Click "Cooling System" → cooled vs uncooled trade-offs
  
**Key Point**: "Real FLIR cameras have specialized optics and detectors for infrared"

---

### 4. Generate Synthetic Data (2 min)
**Navigate to**: Datasets tab
- **Preset demo**:
  1. Click "Person at 10m" → Generate Dataset
     - Point out person shape in thermal image
     - Show statistics (SNR, temp range)
  
  2. Click "Vehicle at 100m" → Generate Dataset
     - Notice smaller, fainter object
     - Compare SNR values
  
  3. Adjust sliders live:
     - Increase noise → Generate → show degradation
     - Decrease distance → Generate → show improvement

**Key Point**: "Distance and noise affect detection capability"

---

### 5. Image Analysis (2 min)
**Navigate to**: Analysis Tools tab
- **Processing pipeline**:
  1. Start with current dataset
  2. Click "Gaussian Blur" → show smoothing
  3. Click "Histogram Equalization" → show contrast boost
  4. Click "Sobel" edge detection → outline appears
  5. Adjust detection threshold slider
  6. Click "Detect Objects" → green bounding box!

**Key Point**: "Real systems use these algorithms to find targets automatically"

---

### 6. Real-Time Simulation (1 min)
**Navigate to**: Simulation tab
- **Live demo**:
  1. Set "Number of Objects" to 2
  2. Select "Linear" motion
  3. Click "Start Simulation" → objects move
  4. Show live metrics: SNR, detection range, frame time
  5. Adjust integration time → see noise change

**Key Point**: "Simulation shows how camera parameters affect performance"

---

## Troubleshooting

### If 3D model doesn't load:
- Check browser console (F12)
- Verify Three.js CDN loaded
- Try Chrome/Firefox

### If formulas don't render:
- MathJax may take a few seconds
- Refresh page if needed

### If page looks broken:
- Use http://localhost:8000/ instead of file://
- Check CSS loaded properly

---

## Student Exercises

### Beginner
1. Calculate radiance of a 350K object
2. Rotate 3D model and identify cooling system
3. Generate "Person at 10m" dataset
4. Apply Gaussian blur to reduce noise

### Intermediate
5. Generate person at different distances (10m, 50m, 100m) and compare SNR
6. Use edge detection to outline a vehicle
7. Calculate detection range for 1.8m person with 10K temperature difference

### Advanced
8. Design a system for 300m detection range:
   - Adjust NETD, FOV, integration time
   - Use calculator to verify
9. Apply full processing pipeline: filter → enhance → detect
10. Export dataset to CSV and analyze in spreadsheet

---

## Key Learning Outcomes

After this demo, students should understand:
- ✅ Infrared radiation basics (blackbody radiation)
- ✅ FLIR hardware components and functions
- ✅ How distance and noise affect imaging
- ✅ Image processing for target detection
- ✅ Trade-offs in system design

---

## Extension Activities

### For homework/next class:
1. **Compare detector types**: Research InSb vs Microbolometer
2. **Atmospheric effects**: How does fog/rain affect FLIR?
3. **Applications**: Find 3 real-world FLIR use cases
4. **Data analysis**: Download CSV, plot temperature profiles
5. **System design**: Design FLIR for specific scenario (e.g., drone surveillance at 500m)

---

## Technical Details for Questions

### Common Questions:

**Q: Why do we need cooling?**
A: Reduces thermal noise in detector → better sensitivity (lower NETD) → longer range

**Q: Why Germanium lenses?**
A: Glass blocks IR! Germanium transparent at 3-14μm wavelengths

**Q: What's NETD?**
A: Noise Equivalent Temperature Difference - minimum detectable temp difference (50mK = 0.05K for good camera)

**Q: Detection vs Recognition vs Identification?**
A: Johnson Criteria - Detection (2 line pairs), Recognition (8), Identification (12) across target

**Q: Why MWIR and LWIR windows?**
A: Atmosphere absorbs most IR, but transmits well at 3-5μm and 8-14μm

---

## Demo Checklist

Before class:
- [ ] Open http://localhost:8000/
- [ ] Navigate through all 6 tabs
- [ ] Test 3D model rotation
- [ ] Generate one dataset
- [ ] Run simulation briefly
- [ ] Connect laptop to projector
- [ ] Test full-screen mode (F11)
- [ ] Have backup: download page as HTML (already local!)

During class:
- [ ] Follow 10-minute flow above
- [ ] Pause for questions at each section
- [ ] Have students try on their devices
- [ ] Save 5 minutes for Q&A

---

## Backup Plan

If internet/server fails:
1. Open `index.html` directly (already local!)
2. CDN resources (Three.js, MathJax) cached in browser
3. All functionality client-side - no backend needed

If computer fails:
- Demo is local - copy entire /flir folder to USB
- Works on any computer with modern browser
- No installation required

---

**You're all set! Good luck with the demo! 🚀**

