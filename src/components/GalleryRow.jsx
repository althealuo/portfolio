// src/components/GalleryRow.jsx
import ModelViewer from './ModelViewer'

function GalleryRow({ images = [] }) {
  const totalRatio = images.reduce((sum, img) => sum + (img.ratio || 1), 0)

  return (
    <div className="gallery-row">
      {images.map((img, i) => {
        const flex = (img.ratio || 1) / totalRatio
        const src = img.src
        const ext = src.split('.').pop().toLowerCase()

        // 🧠 CASE 1: 3D Model (.glb / .gltf)
        if (ext === 'glb' || ext === 'gltf') {
          return (
            <div key={i} style={{ flex: flex }}>
              <ModelViewer
                modelPath={src}
                rotation={img.rotation || [0, 0, 0]}
              />
            </div>
          )
        }

        // 🧠 CASE 2: Video (.mp4)
        if (ext === 'mp4') {
          return (
            <video
              key={i}
              className="gallery-item gallery-video"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              style={{ flex: flex }}
            />
          )
        }

        // 🧠 CASE 3: Image (default)
        return (
          <img
            key={i}
            className="gallery-item gallery-image"
            src={src}
            alt={img.alt || `gallery-${i}`}
            style={{ flex: flex }}
          />
        )
      })}
    </div>
  )
}

export default GalleryRow
