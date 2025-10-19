// src/components/GalleryTextPair.jsx
import ModelViewer from './ModelViewer'

function GalleryTextPair({ image, video, model, children, reverse = false, rotation = [0, 0, 0] }) {
  return (
    <div className={`gallery-text-pair ${reverse ? "reverse" : ""}`}>
      <div className="gallery-text-pair-visual">
        {model ? (
          <ModelViewer modelPath={model} rotation={rotation} />
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="gallery-media"
          />
        ) : (
          <img src={image} alt="Gallery visual" className="gallery-media" />
        )}
      </div>
      <div className="gallery-text-pair-text">
        {children}
      </div>
    </div>
  )
}

export default GalleryTextPair
