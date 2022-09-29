import './style.css'

import * as THREE from 'three'


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 315 / 301, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#container_torus'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize (315, 301 );
camera.position.setZ(30);

renderer.render (scene, camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshBasicMaterial({color:0xB830E8, wireframe: true});
const torus = new THREE.Mesh (geometry, material);

scene.add(torus)

function animate(){
  requestAnimationFrame(animate);
  
  
  torus.rotation.x += 0.02;
  torus.rotation.y += 0.0;
  torus.rotation.z += 0.00;

  
  
  renderer.render(scene,camera)
}

animate()