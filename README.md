# Rania Ateek — React Portfolio (Starter)

Mobile-first portfolio with a cinematic homepage, YouTube playlist, rotating upcoming-event carousel, event detail modal, and grayscale-to-color gallery.

## Start locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite. For a production build:

```bash
npm run build
```

## Replace placeholder content

- `src/data.js` contains all images, the four YouTube video IDs, and event data.
- `src/main.jsx` contains the placeholder biography, contact address, and social URLs.
- Replace `bookings@example.com` and the generic social URLs before publishing.
- Photos are stock placeholders, **not** photographs of Rania.
- Event dates and locations are examples and are **not** real bookings.
- YouTube IDs are sample/embed test IDs, **not** Rania's videos. Some test videos may not be embeddable.

## Behavior

- Events automatically rotate every 6 seconds and pause on pointer hover or keyboard focus. Only future events are shown when any future events exist.
- Gallery automatically rotates every 5.5 seconds and pauses on hover. On mobile, tap **Reveal colors** to show the color version.
- YouTube video plays muted when the user selects it and the section is visible; the iframe unmounts when the section leaves view, stopping playback. Browsers restrict autoplay; initial user interaction is intentionally required for reliable playback.
- Event cards open a detail dialog. Replace its placeholder inquiry link with each event's official URL once available.

## Next steps

Add actual Rania images, biography, YouTube IDs, confirmed events, links, and optionally a CMS, multilingual routing, and real event detail routes.
