// src/components/GalleryRow.jsx
import "../styles/gallery.scss";

function GalleryRow({ images = [] }) {
  const totalRatio = images.reduce((sum, img) => sum + (img.ratio || 1), 0);

  return (
    <div className="gallery-row">
      {images.map((img, i) => {
        const flex = (img.ratio || 1) / totalRatio;
        return (
          <img
            key={i}
            src={img.src}
            alt={`gallery-${i}`}
            style={{ flex: `${flex} ${flex} 0` }}
          />
        );
      })}
    </div>
  );
}

export default GalleryRow;
