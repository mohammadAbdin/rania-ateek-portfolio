import React from "react";
import { images, videos } from "../data";
import { Play, VolumeX, Volume2 } from "lucide-react";
import Rania2 from "../Assets/Images/Rania-2.jpg";
// import RaniaStage from "../assets/images/Rania-stage.jpg";

export function Music({
  videoRef,
  videoVisible,
  videoStarted,
  muted,
  setVideoStarted,
  setMuted,
  videoIndex,
  setVideoIndex,
}) {
  return (
    <section id="music" className="music-section" ref={videoRef}>
      <div
        className="music-backdrop"
        style={{
          backgroundImage: `url("${images.video}")`,
        }}
      />
      <div className="music-inner">
        <div className="section-kicker light">04 / MUSIC & VIDEO</div>
        <div className="section-title-row">
          <h2>
            Some <em>Melodies.</em>
          </h2>
          <span>THE SOUND OF RANIA</span>
        </div>
        <div className="video-layout">
          <div className="video-frame">
            {videoVisible && videoStarted ? (
              <iframe
                key={videos[videoIndex].id}
                src={`https://www.youtube-nocookie.com/embed/${videos[videoIndex].id}?autoplay=1&mute=${muted ? 1 : 0}&playsinline=1&rel=0`}
                title={videos[videoIndex].title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="video-poster"
                style={{
                  backgroundImage: `url("${Rania2}")`,
                }}
              >
                <button
                  className="play-large"
                  aria-label="Play selected video"
                  onClick={() => setVideoStarted(true)}
                >
                  <Play fill="currentColor" size={27} />
                </button>
                <span>SELECT A VIDEO TO LISTEN</span>
              </div>
            )}
            <div className="video-controls">
              <span>
                {String(videoIndex + 1).padStart(2, "0")} /{" "}
                {String(videos.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setMuted((v) => !v)}
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
          <div className="video-list">
            <div className="video-list-heading">
              FEATURED VIDEOS <span>04 TRACKS</span>
            </div>
            {videos.map((v, i) => (
              <button
                key={v.id}
                className={`video-item ${i === videoIndex ? "selected" : ""}`}
                onClick={() => {
                  setVideoIndex(i);
                  setVideoStarted(true);
                }}
              >
                <span className="video-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="video-item-copy">
                  <strong>{v.title}</strong>
                  <small>{v.subtitle}</small>
                </span>
                <span className="video-item-play">
                  <Play size={15} fill="currentColor" />
                </span>
              </button>
            ))}
            <p className="video-note">
              Sample YouTube IDs for layout testing. Replace with Rania's
              official videos before launch. Autoplay begins muted after
              selecting a video; playback stops when the section leaves view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
