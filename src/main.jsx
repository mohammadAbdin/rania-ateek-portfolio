import { PopUpEvent } from "./Components/PopUpEvent";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import { Gallery } from "./Components/Gallery";
import { Events } from "./Components/Events";
import { Music } from "./Components/Music";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { images, events } from "./data";
import "./styles.css";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
const orderedEvents = [...events]
  .filter((e) => new Date(e.date).getTime() >= Date.now())
  .sort((a, b) => new Date(a.date) - new Date(b.date));
const displayEvents = orderedEvents.length
  ? orderedEvents
  : [...events].sort((a, b) => new Date(b.date) - new Date(a.date));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventIndex, setEventIndex] = useState(0);
  const [eventPaused, setEventPaused] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoPaused, setPhotoPaused] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoVisible, setVideoVisible] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [detail, setDetail] = useState(null);
  const [colorReveal, setColorReveal] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setVideoVisible(entry.isIntersecting),
      { threshold: 0.45 },
    );
    if (videoRef.current) io.observe(videoRef.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (eventPaused || detail || displayEvents.length < 2) return;
    const t = setInterval(
      () => setEventIndex((i) => (i + 1) % displayEvents.length),
      6000,
    );
    return () => clearInterval(t);
  }, [eventPaused, detail]);
  useEffect(() => {
    if (photoPaused || colorReveal || detail) return;
    const t = setInterval(
      () => setPhotoIndex((i) => (i + 1) % images.gallery.length),
      5500,
    );
    return () => clearInterval(t);
  }, [photoPaused, colorReveal, detail]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDetail(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = detail ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [detail]);
  const nextEvent = (delta) =>
    setEventIndex(
      (i) => (i + delta + displayEvents.length) % displayEvents.length,
    );
  const nextPhoto = (delta) =>
    setPhotoIndex(
      (i) => (i + delta + images.gallery.length) % images.gallery.length,
    );
  const navigate = () => setMenuOpen(false);
  const current = displayEvents[eventIndex];
  return (
    <>
      <Header
        navigate={navigate}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Home />
        <About />
        <Music
          videoRef={videoRef}
          videoVisible={videoVisible}
          videoStarted={videoStarted}
          muted={muted}
          setVideoStarted={setVideoStarted}
          setMuted={setMuted}
          videoIndex={videoIndex}
          setVideoIndex={setVideoIndex}
        />
        {/* <Events
          setEventPaused={setEventPaused}
          formatDate={formatDate}
          setDetail={setDetail}
          current={current}
          eventIndex={eventIndex}
          setEventIndex={setEventIndex}
          nextEvent={nextEvent}
          displayEvents={displayEvents}
        /> */}
        <Gallery
          photoIndex={photoIndex}
          nextPhoto={nextPhoto}
          setPhotoPaused={setPhotoPaused}
          colorReveal={colorReveal}
          setColorReveal={setColorReveal}
        />
        <Contact />
      </main>
      <Footer />
      {detail && <PopUpEvent detail={detail} setDetail={setDetail} />}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
