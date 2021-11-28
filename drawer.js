// set up a renderer 

const renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
// THREE Colours look like 0xff00ff, same as #ff00ff
renderer.setClearColor(0x333333, 1)


// find the element we want to add the renderer to 
const section = document.querySelector("section")
section.appendChild(renderer.domElement)

// lets create a scene
const scene = new.THREE.Scene()

// lets create a camera
const camera = new.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
camera.position.z = -50
camera.lookAt(scene.position)

// lets add in an animation loop
const animate = function () {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
// start animation
animate()