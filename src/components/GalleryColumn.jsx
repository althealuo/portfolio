// src/components/GalleryColumn.jsx
import "../styles/gallery.scss";

function GalleryColumn({ images = [] }) {
  return (
    <div className="gallery-column">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`gallery-${i}`} />
      ))}
    </div>
  );
}

export default GalleryColumn;
