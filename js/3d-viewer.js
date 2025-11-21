// 3D Model Viewer using Three.js (ES Module)
// Handles loading and displaying GLB models for product showcase

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class Product3DViewer {
  constructor(containerId, modelPath, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container ${containerId} not found`);
      return;
    }

    this.modelPath = modelPath;
    this.options = {
      autoRotate: options.autoRotate !== undefined ? options.autoRotate : true,
      rotationSpeed: options.rotationSpeed || 0.5,
      cameraDistance: options.cameraDistance || 3,
      backgroundColor: options.backgroundColor || 0xe8f5e8,
      ...options
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.model = null;
    this.controls = null;
    this.animationId = null;

    this.init();
  }

  init() {
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.options.backgroundColor);

    // Create camera
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 1, this.options.cameraDistance);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Clear container and add canvas
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // Add lights
    this.setupLights();

    // Add orbit controls
    this.setupControls();

    // Load model
    this.loadModel();

    // Handle window resize
    this.resizeHandler = () => this.onWindowResize();
    window.addEventListener('resize', this.resizeHandler);

    // Start animation
    this.animate();
  }

  setupLights() {
    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    this.scene.add(mainLight);

    // Fill light from the side
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, 0, -5);
    this.scene.add(fillLight);

    // Rim light from behind
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, 5, -5);
    this.scene.add(rimLight);
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.minDistance = 1.5;
    this.controls.maxDistance = 8;
    this.controls.autoRotate = this.options.autoRotate;
    this.controls.autoRotateSpeed = this.options.rotationSpeed;
  }

  loadModel() {
    const loader = new GLTFLoader();
    
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.style.position = 'absolute';
    loadingDiv.style.top = '50%';
    loadingDiv.style.left = '50%';
    loadingDiv.style.transform = 'translate(-50%, -50%)';
    loadingDiv.style.color = '#2e8b57';
    loadingDiv.style.fontSize = '18px';
    loadingDiv.style.fontWeight = '600';
    loadingDiv.style.zIndex = '10';
    loadingDiv.innerHTML = 'Loading 3D Model...';
    this.container.appendChild(loadingDiv);

    console.log('Loading model from:', this.modelPath);

    loader.load(
      this.modelPath,
      (gltf) => {
        console.log('Model loaded successfully');
        this.model = gltf.scene;
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(this.model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Scale model to fit in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        this.model.scale.multiplyScalar(scale);
        
        // Center the model
        this.model.position.sub(center.multiplyScalar(scale));
        
        // Enable shadows
        this.model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        
        this.scene.add(this.model);
        
        // Remove loading indicator
        loadingDiv.remove();
      },
      (progress) => {
        if (progress.total > 0) {
          const percent = (progress.loaded / progress.total * 100).toFixed(0);
          loadingDiv.innerHTML = `Loading 3D Model... ${percent}%`;
        }
      },
      (error) => {
        console.error('Error loading model:', error);
        loadingDiv.innerHTML = 'Error loading 3D model<br><small>Check console for details</small>';
        loadingDiv.style.color = '#d32f2f';
        loadingDiv.style.fontSize = '16px';
      }
    );
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    if (this.controls) {
      this.controls.update();
    }
    
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(width, height);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    if (this.controls) {
      this.controls.dispose();
    }
    
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}

// Initialize 3D viewers when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initViewers);
} else {
  initViewers();
}

function initViewers() {
  // Check if we're on the products page
  if (!window.location.pathname.includes('products.html')) {
    console.log('Not on products page, skipping 3D viewer initialization');
    return;
  }

  console.log('Initializing 3D viewers...');

  // Product 1: Kalpavriksha Smart Sensor
  try {
    const viewer1 = new Product3DViewer('model-viewer-1', 'models/model 1 Smart sensor.glb', {
      autoRotate: true,
      rotationSpeed: 1.0,
      cameraDistance: 3.5,
      backgroundColor: 0xe8f5e8
    });
    console.log('Viewer 1 (Smart Sensor) initialized');
  } catch (error) {
    console.error('Error initializing viewer 1:', error);
  }

  // Product 2: Kalpavriksha Soil Quality Sensor (same model as product 1)
  try {
    const viewer2 = new Product3DViewer('model-viewer-2', 'models/soil moisture sensor 3d model.glb', {
      autoRotate: true,
      rotationSpeed: 0.8,
      cameraDistance: 3.5,
      backgroundColor: 0xe8f5e8
    });
    console.log('Viewer 2 (Soil Quality Sensor) initialized');
  } catch (error) {
    console.error('Error initializing viewer 2:', error);
  }

  // Product 3: Smart Drip Irrigation Mechanism
  try {
    const viewer3 = new Product3DViewer('model-viewer-3', 'models/drip irrigation sprinkler 3d model.glb', {
      autoRotate: true,
      rotationSpeed: 0.7,
      cameraDistance: 4.0,
      backgroundColor: 0xe8f5e8
    });
    console.log('Viewer 3 (Drip Irrigation) initialized');
  } catch (error) {
    console.error('Error initializing viewer 3:', error);
  }

  // Product 4: Verdantra Agricultural Drone
  try {
    const viewer4 = new Product3DViewer('model-viewer-4', 'models/agriculture drone.glb', {
      autoRotate: true,
      rotationSpeed: 0.6,
      cameraDistance: 4.5,
      backgroundColor: 0xe8f5e8
    });
    console.log('Viewer 4 (Agricultural Drone) initialized');
  } catch (error) {
    console.error('Error initializing viewer 4:', error);
  }
}
