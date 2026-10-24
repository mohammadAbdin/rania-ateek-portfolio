import React from "react";
import { images } from "../data";
import { ArrowRight, ArrowLeft } from "lucide-react";
export function Gallery({
  photoIndex,
  nextPhoto,
  setPhotoPaused,
  colorReveal,
  setColorReveal,
}) {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-copy">
        <div className="section-kicker light">05 / BEHIND THE SCENES</div>
        <h2>
          Moments worth
          <br />
          <em>remembering.</em>
        </h2>
        <p>A glimpse into the music, the energy, and the moments in between.</p>
        <div className="gallery-pagination">
          <span>{String(photoIndex + 1).padStart(2, "0")}</span>
          <div className="progress-line">
            <div
              style={{
                width: `${((photoIndex + 1) / images.gallery.length) * 100}%`,
              }}
            />
          </div>
          <span>{String(images.gallery.length).padStart(2, "0")}</span>
        </div>
        <div className="gallery-arrows">
          <button aria-label="Previous photo" onClick={() => nextPhoto(-1)}>
            <ArrowLeft />
          </button>
          <button aria-label="Next photo" onClick={() => nextPhoto(1)}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div
        className="gallery-photo"
        onMouseEnter={() => setPhotoPaused(true)}
        onMouseLeave={() => setPhotoPaused(false)}
      >
        <img
          key={photoIndex}
          className={colorReveal ? "revealed" : ""}
          src={images.gallery[photoIndex]}
          alt={`Sample gallery photograph ${photoIndex + 1}`}
          loading="lazy"
        />
        <div className="photo-tag">
          PHOTO JOURNAL / {String(photoIndex + 1).padStart(2, "0")}
        </div>
        <button
          className="mobile-reveal"
          onClick={() => {
            setColorReveal((v) => !v);
            setPhotoPaused(true);
          }}
        >
          {colorReveal ? "BLACK & WHITE" : "REVEAL COLORS"}
        </button>
      </div>
    </section>
  );
}
