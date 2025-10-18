import React, { useRef, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei'
import '../styles/gallery.scss' // 👈 make sure the path is correct

function Model({ url, isPlaying, setHasAnimation }) {
  const group = useRef()
  const { scene, animations } = useGLTF(url)
  const mixer = useRef()

  useEffect(() => {
    if (animations.length > 0) setHasAnimation(true)
  }, [animations, setHasAnimation])

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene)
      animations.forEach((clip) => mixer.current.clipAction(clip).play())
      if (!isPlaying) mixer.current.timeScale = 0
    }
  }, [animations, scene])

  useEffect(() => {
    if (mixer.current) mixer.current.timeScale = isPlaying ? 1 : 0
  }, [isPlaying])

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta)
  })

  return <primitive ref={group} object={scene} scale={1.5} />
}

function Loader() {
  return (
    <Html center>
      <div className="model-loader">
        <div className="model-spinner" />
        <p>Loading...</p>
      </div>
    </Html>
  )
}

export default function ModelViewer({ modelPath }) {
  const [hasAnimation, setHasAnimation] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="model-viewer">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Model url={modelPath} isPlaying={isPlaying} setHasAnimation={setHasAnimation} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>

      {hasAnimation && (
        <button
          className="animation-toggle"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause Animation' : 'Play Animation'}
        </button>
      )}
    </div>
  )
}
