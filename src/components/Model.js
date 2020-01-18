import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const Model = () => {
  let pokeballRef = useRef(null)

  useEffect(() => {
    const width = pokeballRef.clientWidth
    const height = pokeballRef.clientWidth

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    pokeballRef.appendChild(renderer.domElement)

    let loader = new GLTFLoader()
    loader.load('./assets/pokeball/scene.gltf', gltf => {
      scene.add(gltf.scene)
      // renderer.render(scene, camera)
    })

    // const geometry = new THREE.BoxGeometry(2, 2, 2)
    // const material = new THREE.MeshPhongMaterial({
    //   color: 0x156289,
    //   emissive: 0x072534,
    //   side: THREE.DoubleSide,
    //   flatShading: true,
    // })

    // const cube = new THREE.Mesh(geometry, material)
    // scene.add(cube)

    const lights = []
    lights[0] = new THREE.AmbientLight(0xffffff, 1, 0)
    lights[1] = new THREE.AmbientLight(0xffffff, 1, 1)
    lights[2] = new THREE.AmbientLight(0xffffff, 0, 0)

    lights[0].position.set(0, 0, 0)
    lights[1].position.set(100, 100, 100)
    lights[2].position.set(-100, -100, -100)

    scene.add(lights[0])
    scene.add(lights[1])
    scene.add(lights[2])

    const animate = () => {
      requestAnimationFrame(animate)

      // camera.rotation.x += (1 / 180) * 2
      // camera.rotation.y += (1 / 180) * 2

      renderer.render(scene, camera)
    }

    const handleWindowResize = () => {
      const width = pokeballRef.clientWidth
      const height = pokeballRef.clientHeight

      renderer.setSize(width, height)
      camera.aspect = width / height

      camera.updateProjectionMatrix()
    }

    animate()
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
      // cancelAnimationFrame(requestID)
    }
  }, [])

  return <div ref={ref => (pokeballRef = ref)} className="about__3d-model" />
}

export default Model
