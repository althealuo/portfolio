import React, { useRef, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

// 🧩 Model with optional animation playback + custom rotation
function Model({ url, isPlaying, setHasAnimation, rotation }) {
  const group = useRef()
  const { scene, animations } = useGLTF(url)
  const mixer = useRef()

  // Detect animation availability
  useEffect(() => {
    if (animations.length > 0) setHasAnimation(true)
  }, [animations, setHasAnimation])

  // Initialize animation and orientation
  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene)
      animations.forEach((clip) => mixer.current.clipAction(clip).play())
      mixer.current.timeScale = 0 // start paused
    }
  }, [animations, scene])

  // Update animation playback
  useEffect(() => {
    if (mixer.current) mixer.current.timeScale = isPlaying ? 1 : 0
  }, [isPlaying])

  // Apply rotation prop whenever it changes
  useEffect(() => {
    if (group.current && rotation) {
      group.current.rotation.set(rotation[0], rotation[1], rotation[2])
    }
  }, [rotation])

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta)
  })

  return <primitive ref={group} object={scene} scale={1.5} />
}

// 🌀 Loader
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

// 🧠 Main viewer
export default function ModelViewer({ modelPath, rotation = [0, 0, 0] }) {
  const [hasAnimation, setHasAnimation] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false) // start paused by default

  return (
    <div className="model-viewer">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.1} />
          {/* <directionalLight
            position={[2, 2, 3]}
            intensity={0.8}
            color="#f8ffc3ff"
          /> */}
          <Environment preset="sunset" background={false} blur={0.8} intensity={0.8}/>
          {/* <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.2}
              mipmapBlur
            />
          </EffectComposer> */}
          <Model
            url={modelPath}
            isPlaying={isPlaying}
            setHasAnimation={setHasAnimation}
            rotation={rotation}
          />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>

      {hasAnimation && (
        <button
          className="animation-toggle"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  )
}

