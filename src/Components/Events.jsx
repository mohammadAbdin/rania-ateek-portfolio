import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  CalendarDays,
  MapPin,
} from "lucide-react";
export function Events({
  setEventPaused,
  formatDate,
  setDetail,
  current,
  eventIndex,
  setEventIndex,
  nextEvent,
  displayEvents,
}) {
  return (
    <section id="events" className="events-section section-pad">
      <div className="section-kicker">03 / WHAT'S COMING</div>
      <div className="section-title-row dark-title">
        <h2>
          See you <em>there.</em>
        </h2>
        <span>UPCOMING EVENTS & EXPERIENCES</span>
      </div>
      <div
        className="event-slider"
        onMouseEnter={() => setEventPaused(true)}
        onMouseLeave={() => setEventPaused(false)}
        onFocus={() => setEventPaused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setEventPaused(false);
        }}
      >
        <div
          className="event-feature"
          style={{
            "--event-accent": current.accent,
          }}
        >
          <div className="event-left">
            <div className="event-type">
              <span className="pulse-dot" /> {current.type}
            </div>
            <div className="event-date">
              <strong>
                {new Date(current.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
              </strong>
              <span>
                {new Date(current.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="event-main">
            <h3>{current.title}</h3>
            <div className="event-meta">
              <span>
                <CalendarDays size={17} />
                {formatDate(current.date)}
              </span>
              <span>
                <MapPin size={17} />
                {current.city}
              </span>
            </div>
            <p>{current.description}</p>
            <button
              className="event-details"
              onClick={() => setDetail(current)}
            >
              VIEW EVENT DETAILS <ArrowUpRight size={19} />
            </button>
          </div>
          <div className="event-art">
            {/* <img
            src={current.image}
            alt={current.title}
            className="event-art-image"
            /> */}
          </div>
        </div>
        <div className="slider-footer">
          <div className="slider-dots">
            {displayEvents.map((event, i) => (
              <button
                key={event.id}
                aria-label={`Show event ${i + 1}`}
                className={i === eventIndex ? "active" : ""}
                onClick={() => setEventIndex(i)}
              />
            ))}
          </div>
          <div className="slider-arrows">
            <button aria-label="Previous event" onClick={() => nextEvent(-1)}>
              <ArrowLeft size={21} />
            </button>
            <button aria-label="Next event" onClick={() => nextEvent(1)}>
              <ArrowRight size={21} />
            </button>
          </div>
        </div>
      </div>
      <p className="sample-warning">
        Event dates and locations are sample content, not confirmed bookings.
      </p>
    </section>
  );
}
