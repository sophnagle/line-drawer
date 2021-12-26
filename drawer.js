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
light.position.set(0,0, -1)
// add light
scene.add(light)

// lets hold some data about the shapes being added
const shapes = []

// lets add in an animation loop
const animate = function () {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)

    // lets rotate the shapes each frame
    shapes.forEach(shape => {
        shape.rotateX(0.01)
    })
}
// start animation
animate()

// lets make a function that creates a shape
const createShape = function (x, y) {
    // using three.js cone geometry shape 
    const geometry = new THREE.ConeGeometry(10, 20, 32)
    const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        // from three.js not affected by lights
        emissive: 0xff0000
    })
    const shape = new THREE.Mesh(geometry, material)
    //position shape (x,y,z)
    shape.position.set((window.innerWidth / 2) - x, (window.innerHeight / 2) - y, 400)
    // rotate shape
    shape.rotateX(0.5)
    shape.rotateZ(0.5)

    //lets add it to the scene and list of shapes
    shapes.push(shape)
    // add shape
    scene.add(shape)
}

// lets do things on a click
document.addEventListener("click", function (event) {
    createShape(event.pageX, event.pageY)
})