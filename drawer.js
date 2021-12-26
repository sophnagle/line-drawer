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
const scene = new THREE.Scene()

// lets create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
camera.position.z = -50
camera.lookAt(scene.position)

// lets add some lighting (directional light)
const light = new THREE.DirectionalLight(0xffffff, 1)
// add light
scene.add(light)

// lets add in an animation loop
const animate = function () {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}
// start animation
animate()

// lets make a function that creates a shape
const createShape = function () {
    // using three.js cone geometry shape 
    const geometry = new THREE.ConeGeometry(10, 20, 32)
    const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        // from three.js not affected by lights
        emissive: 0xff0000
    })
    const shape = new THREE.Mesh(geometry, material)
    // rotate shape
    shape.rotateX(0.5)
    shape.rotateZ(0.5)
    // add shape
    scene.add(shape)
}

createShape()