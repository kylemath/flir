// FLIR 3D Hardware Visualization using Three.js

let scene, camera, renderer, controls;
let cameraModel = {};
let animationId;
let isExploded = false;
let componentStates = {
    lens: true,
    detector: true,
    cooling: true,
    housing: true,
    electronics: true
};

function init3DScene() {
    const container = document.getElementById('three-container');
    if (!container) return;
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a1a);
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(
        45,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
    );
    camera.position.set(5, 3, 5);
    camera.lookAt(0, 0, 0);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    
    // Lighting - Enhanced for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); // Increased from 0.6
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2); // Increased
    directionalLight1.position.set(10, 10, 5);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8); // Additional light
    directionalLight2.position.set(-10, 5, -5);
    scene.add(directionalLight2);
    
    const pointLight = new THREE.PointLight(0xff4500, 0.8); // Increased
    pointLight.position.set(0, 5, 5);
    scene.add(pointLight);
    
    // Create FLIR camera model
    createCameraModel();
    
    // Mouse controls
    setupControls();
    
    // Animation loop
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (!container.offsetWidth) return;
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}

function createCameraModel() {
    const group = new THREE.Group();
    
    // Housing (main body)
    const housingGeometry = new THREE.BoxGeometry(2, 1.5, 1.5);
    const housingMaterial = new THREE.MeshPhongMaterial({
        color: 0x2a2a3a,
        specular: 0x111111,
        shininess: 30
    });
    const housing = new THREE.Mesh(housingGeometry, housingMaterial);
    housing.name = 'housing';
    group.add(housing);
    
    // Add panel lines
    const edgesGeometry = new THREE.EdgesGeometry(housingGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xff4500 });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    housing.add(edges);
    
    // Lens assembly (front)
    const lensGeometry = new THREE.CylinderGeometry(0.5, 0.6, 0.4, 32);
    const lensMaterial = new THREE.MeshPhongMaterial({
        color: 0x1a1a2a,
        specular: 0x333333,
        shininess: 100
    });
    const lens = new THREE.Mesh(lensGeometry, lensMaterial);
    lens.rotation.z = Math.PI / 2;
    lens.position.set(1.2, 0, 0);
    lens.name = 'lens';
    group.add(lens);
    
    // Lens glass (germanium)
    const glassGeometry = new THREE.CylinderGeometry(0.45, 0.45, 0.1, 32);
    const glassMaterial = new THREE.MeshPhongMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.7,
        specular: 0xffffff,
        shininess: 100
    });
    const glass = new THREE.Mesh(glassGeometry, glassMaterial);
    glass.rotation.z = Math.PI / 2;
    glass.position.set(1.4, 0, 0);
    group.add(glass);
    
    // Detector array (inside, visible when exploded)
    const detectorGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.05);
    const detectorMaterial = new THREE.MeshPhongMaterial({
        color: 0x0066ff,
        emissive: 0x003388,
        specular: 0x6699ff,
        shininess: 100
    });
    const detector = new THREE.Mesh(detectorGeometry, detectorMaterial);
    detector.position.set(-0.5, 0, 0);
    detector.name = 'detector';
    group.add(detector);
    
    // Detector grid pattern
    const gridHelper = new THREE.GridHelper(0.3, 16, 0xff4500, 0xff4500);
    gridHelper.rotation.z = Math.PI / 2;
    gridHelper.position.copy(detector.position);
    gridHelper.position.x += 0.026;
    group.add(gridHelper);
    
    // Cooling system (for cooled detectors)
    const coolingGeometry = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
    const coolingMaterial = new THREE.MeshPhongMaterial({
        color: 0x00aaff,
        specular: 0x4444ff,
        shininess: 50
    });
    const cooling = new THREE.Mesh(coolingGeometry, coolingMaterial);
    cooling.position.set(-0.5, 0, 0);
    cooling.rotation.y = Math.PI / 2;
    cooling.name = 'cooling';
    group.add(cooling);
    
    // Electronics board
    const boardGeometry = new THREE.BoxGeometry(1.2, 0.8, 0.1);
    const boardMaterial = new THREE.MeshPhongMaterial({
        color: 0x006600,
        specular: 0x004400,
        shininess: 20
    });
    const board = new THREE.Mesh(boardGeometry, boardMaterial);
    board.position.set(-0.2, 0, 0.6);
    group.add(board);
    
    // Add some electronic components
    for (let i = 0; i < 8; i++) {
        const compGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.05);
        const compMaterial = new THREE.MeshPhongMaterial({ color: 0x111111 });
        const comp = new THREE.Mesh(compGeometry, compMaterial);
        comp.position.set(
            -0.5 + (i % 4) * 0.3,
            -0.2 + Math.floor(i / 4) * 0.4,
            0.66
        );
        group.add(comp);
    }
    
    // Mounting bracket
    const bracketGeometry = new THREE.BoxGeometry(0.2, 0.2, 2);
    const bracketMaterial = new THREE.MeshPhongMaterial({
        color: 0x444444,
        specular: 0x222222,
        shininess: 60
    });
    const bracket = new THREE.Mesh(bracketGeometry, bracketMaterial);
    bracket.position.set(0, -0.9, 0);
    group.add(bracket);
    
    // Store references with original positions
    cameraModel.group = group;
    cameraModel.housing = housing;
    cameraModel.lens = lens;
    cameraModel.glass = glass;
    cameraModel.detector = detector;
    cameraModel.cooling = cooling;
    cameraModel.board = board;
    cameraModel.bracket = bracket;
    
    // Store original positions for exploded view
    cameraModel.originalPositions = {
        lens: lens.position.clone(),
        glass: glass.position.clone(),
        detector: detector.position.clone(),
        cooling: cooling.position.clone(),
        housing: housing.position.clone(),
        board: board.position.clone(),
        bracket: bracket.position.clone()
    };
    
    scene.add(group);
}

function setupControls() {
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    renderer.domElement.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    renderer.domElement.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        if (cameraModel.group) {
            cameraModel.group.rotation.y += deltaX * 0.01;
            cameraModel.group.rotation.x += deltaY * 0.01;
        }
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    renderer.domElement.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    renderer.domElement.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.position.z += e.deltaY * 0.01;
        camera.position.z = Math.max(3, Math.min(15, camera.position.z));
    });
}

function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Gentle rotation when not being dragged
    if (cameraModel.group) {
        cameraModel.group.rotation.y += 0.002;
    }
    
    renderer.render(scene, camera);
}

function animateCamera() {
    // Reset rotation for better viewing
    if (cameraModel.group) {
        cameraModel.group.rotation.set(0, 0, 0);
    }
}

function focusComponent(componentName) {
    let targetPos, infoText;
    
    switch(componentName) {
        case 'lens':
            targetPos = { x: 5, y: 2, z: 2 };
            infoText = `
                <h4>Optics System</h4>
                <p><strong>Material:</strong> Germanium (Ge) or Zinc Selenide (ZnSe)</p>
                <p><strong>Function:</strong> Focuses infrared radiation onto the detector array</p>
                <p><strong>Properties:</strong></p>
                <ul>
                    <li>High refractive index for IR</li>
                    <li>Low dispersion in IR bands</li>
                    <li>Anti-reflective coating for specific wavelengths</li>
                </ul>
                <p><strong>Typical f-number:</strong> f/1.0 to f/2.0 for high sensitivity</p>
            `;
            break;
        case 'detector':
            targetPos = { x: 3, y: 2, z: 3 };
            infoText = `
                <h4>Detector Array (FPA)</h4>
                <p><strong>Type:</strong> Focal Plane Array</p>
                <p><strong>Common Technologies:</strong></p>
                <ul>
                    <li><strong>Cooled:</strong> InSb (MWIR), HgCdTe/MCT (MWIR/LWIR)</li>
                    <li><strong>Uncooled:</strong> Microbolometer (LWIR)</li>
                </ul>
                <p><strong>Resolution:</strong> 320×240 to 1920×1080 pixels</p>
                <p><strong>Pitch:</strong> 12-25 μm pixel spacing</p>
                <p><strong>Sensitivity:</strong> NETD < 50mK for high-end systems</p>
            `;
            break;
        case 'cooling':
            targetPos = { x: 3, y: 3, z: 4 };
            infoText = `
                <h4>Cooling System</h4>
                <p><strong>Type:</strong> Stirling cycle or thermoelectric cooler</p>
                <p><strong>Operating Temperature:</strong> 77K for InSb, 60-80K for MCT</p>
                <p><strong>Purpose:</strong></p>
                <ul>
                    <li>Reduces thermal noise in detector</li>
                    <li>Increases sensitivity (lower NETD)</li>
                    <li>Extends detection range</li>
                </ul>
                <p><strong>Trade-offs:</strong> Higher cost, power consumption, weight</p>
                <p><em>Uncooled systems operate at ambient temperature</em></p>
            `;
            break;
        case 'housing':
            targetPos = { x: 5, y: 3, z: 5 };
            infoText = `
                <h4>Camera Housing</h4>
                <p><strong>Material:</strong> Aluminum or composite materials</p>
                <p><strong>Functions:</strong></p>
                <ul>
                    <li>Protects sensitive components</li>
                    <li>Provides thermal management</li>
                    <li>Electromagnetic shielding</li>
                    <li>Mounting interface</li>
                </ul>
                <p><strong>Environmental:</strong> Often sealed (IP67) for outdoor use</p>
            `;
            break;
    }
    
    // Animate camera position
    const startPos = { ...camera.position };
    const duration = 1000; // ms
    const startTime = Date.now();
    
    function animateMove() {
        const elapsed = Date.now() - startTime;
        const t = Math.min(elapsed / duration, 1);
        
        // Easing function
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        
        camera.position.x = startPos.x + (targetPos.x - startPos.x) * eased;
        camera.position.y = startPos.y + (targetPos.y - startPos.y) * eased;
        camera.position.z = startPos.z + (targetPos.z - startPos.z) * eased;
        
        camera.lookAt(0, 0, 0);
        
        if (t < 1) {
            requestAnimationFrame(animateMove);
        }
    }
    
    animateMove();
    
    // Update info panel
    document.getElementById('component-details').innerHTML = infoText;
}

function resetCamera() {
    camera.position.set(5, 3, 5);
    camera.lookAt(0, 0, 0);
    if (cameraModel.group) {
        cameraModel.group.rotation.set(0, 0, 0);
    }
    // Reset exploded view
    if (isExploded) {
        toggleExplodedView();
    }
    document.getElementById('component-details').innerHTML = `
        <h4>FLIR Camera System</h4>
        <p>Interactive 3D model showing major components of a thermal imaging camera.</p>
        <p><strong>Click and drag</strong> to rotate the model.</p>
        <p><strong>Scroll</strong> to zoom in/out.</p>
        <p><strong>Click component buttons</strong> to learn more.</p>
    `;
}

function toggleExplodedView() {
    isExploded = !isExploded;
    const btn = document.getElementById('explode-btn');
    
    if (isExploded) {
        // Explode components outward
        animateToPosition(cameraModel.lens, { x: 2.5, y: 0, z: 0 }, 1000);
        animateToPosition(cameraModel.glass, { x: 2.8, y: 0, z: 0 }, 1000);
        animateToPosition(cameraModel.detector, { x: -1.5, y: 0, z: 0 }, 1000);
        animateToPosition(cameraModel.cooling, { x: -1.5, y: 0, z: 0 }, 1000);
        animateToPosition(cameraModel.board, { x: -0.2, y: 0, z: 1.5 }, 1000);
        animateToPosition(cameraModel.bracket, { x: 0, y: -1.5, z: 0 }, 1000);
        
        if (btn) btn.textContent = 'Assembled View';
    } else {
        // Return to original positions
        animateToPosition(cameraModel.lens, cameraModel.originalPositions.lens, 1000);
        animateToPosition(cameraModel.glass, cameraModel.originalPositions.glass, 1000);
        animateToPosition(cameraModel.detector, cameraModel.originalPositions.detector, 1000);
        animateToPosition(cameraModel.cooling, cameraModel.originalPositions.cooling, 1000);
        animateToPosition(cameraModel.board, cameraModel.originalPositions.board, 1000);
        animateToPosition(cameraModel.bracket, cameraModel.originalPositions.bracket, 1000);
        
        if (btn) btn.textContent = 'Exploded View';
    }
}

function animateToPosition(mesh, targetPos, duration) {
    if (!mesh) return;
    
    const startPos = { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z };
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const t = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-in-out)
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        
        mesh.position.x = startPos.x + (targetPos.x - startPos.x) * eased;
        mesh.position.y = startPos.y + (targetPos.y - startPos.y) * eased;
        mesh.position.z = startPos.z + (targetPos.z - startPos.z) * eased;
        
        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

function toggleComponent(componentName) {
    const component = cameraModel[componentName];
    if (!component) return;
    
    componentStates[componentName] = !componentStates[componentName];
    component.visible = componentStates[componentName];
    
    // Update checkbox state if exists
    const checkbox = document.getElementById(`toggle-${componentName}`);
    if (checkbox) {
        checkbox.checked = componentStates[componentName];
    }
}

