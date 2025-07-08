// src/components/GalleryTextPair.jsx
import "../styles/gallery.scss";

function GalleryTextPair({ image, video, children, reverse = false }) {
  return (
    <div className={`gallery-text-pair ${reverse ? "reverse" : ""}`}>
      <div className="gallery-text-pair-visual">
        {video ? (
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
  );
}

export default GalleryTextPair;
