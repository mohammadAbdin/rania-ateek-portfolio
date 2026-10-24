import React from "react";
import {
  ArrowUpRight,
  X,
  CalendarDays,
  MapPin,
} from "lucide-react";
export function PopUpEvent({ detail,
  setDetail
}) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => {
    if (e.target === e.currentTarget) setDetail(null);
  }}>
          <div className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-modal-title">
            <button className="modal-close" aria-label="Close event details" onClick={() => setDetail(null)}>
              <X />
            </button>
            <div className="section-kicker">{detail.type} / EVENT DETAILS</div>
            <h2 id="event-modal-title">{detail.title}</h2>
            <div className="modal-facts">
              <span>
                <CalendarDays size={19} />
                {new Date(detail.date).toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short"
          })}
              </span>
              <span>
                <MapPin size={19} />
                {detail.venue}, {detail.city}
              </span>
            </div>
            <p>{detail.description}</p>
            <div className="modal-note">
              This is a sample event. Replace the event information and booking
              URL with official details.
            </div>
            <a className="button primary" href="mailto:bookings@example.com?subject=Event%20inquiry">
              ASK ABOUT THIS EVENT <ArrowUpRight size={17} />
            </a>
          </div>
        </div>;
}
  