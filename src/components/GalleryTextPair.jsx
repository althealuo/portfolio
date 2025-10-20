// src/components/GalleryTextPair.jsx
import ModelViewer from './ModelViewer'

function GalleryTextPair({
  image,
  video,
  model,
  children,
  reverse = false,
  rotation = [0, 0, 0],
}) {
  // Check if video is a YouTube link (supports both formats)
  const isYouTube =
    video && (video.includes('youtube.com') || video.includes('youtu.be'));

  // Convert YouTube URL to proper embed format
  let embedUrl = '';
  if (isYouTube) {
    if (video.includes('youtu.be')) {
      // Short link: https://youtu.be/VIDEO_ID
      const videoId = video.split('youtu.be/')[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (video.includes('watch?v=')) {
      // Standard link: https://www.youtube.com/watch?v=VIDEO_ID
      const videoId = video.split('watch?v=')[1];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }

  return (
    <div className={`gallery-text-pair ${reverse ? 'reverse' : ''}`}>
      <div className="gallery-text-pair-visual">
        {model ? (
          <ModelViewer modelPath={model} rotation={rotation} />
        ) : video ? (
          isYouTube ? (
            <iframe
              className="gallery-media"
              src={embedUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="gallery-media"
            />
          )
        ) : (
          <img src={image} alt="Gallery visual" className="gallery-media" />
        )}
      </div>

      <div className="gallery-text-pair-text">{children}</div>
    </div>
  )
}

export default GalleryTextPair
