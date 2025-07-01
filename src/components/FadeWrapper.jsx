import { useEffect, useRef } from "react";
import "../styles/sections.scss";

function FadeWrapper({ defaultSrc, hoverImage, hoverVideo, alt }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!hoverVideo || !videoRef.current) return;

    const wrapper = videoRef.current.closest(".image-fade-wrapper");

    const play = () => {
      videoRef.current.play();
    };

    const pause = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };

    wrapper.addEventListener("mouseenter", play);
    wrapper.addEventListener("mouseleave", pause);

    return () => {
      wrapper.removeEventListener("mouseenter", play);
      wrapper.removeEventListener("mouseleave", pause);
    };
  }, [hoverVideo]);

  return (
    <div className="image-fade-wrapper">
      <img src={defaultSrc} alt={alt} className="project-image default-img" />
      {hoverVideo ? (
        <video
          ref={videoRef}
          src={hoverVideo}
          muted
          loop
          playsInline
          className="project-image hover-img"
        />
      ) : hoverImage ? (
        <img
          src={hoverImage}
          alt={`${alt} (alternate)`}
          className="project-image hover-img"
        />
      ) : null}
    </div>
  );
}

export default FadeWrapper;
