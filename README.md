# Line-drawer

This is Project 4 of Experimental JavaScript with SuperHi. We dive into 3D in the browser and use Three.js to add cameras, scenes, geometries, materials and meshes to the project.

The live site can be found [HERE](https://sophnagle.github.io/line-drawer/)

## Tech stack
* HTML
* CSS
* JavaScript

## Bugs
* interia scroll bug fixed for iOS only

* Touch screen only works in iOS

SuperHi suggests: 

    event.touches[0].clientX
    event.touches[0].clientY

    // so you could maybe do the following:
    event.pageX || event.touches[0].clientX


However for me this is still an unresolved bug.