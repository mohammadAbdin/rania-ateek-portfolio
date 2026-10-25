// Replace sample entries with Rania's approved content before publishing.
import Rania1 from "./Assets/Images/Rania-1.jpg";
import Rania2 from "./Assets/Images/Rania-2.jpg";
import Rania3 from "./Assets/Images/Rania-3.jpg";
import Rania4 from "./Assets/Images/Rania-4.jpg";
import Rania5 from "./Assets/Images/Rania-5.jpg";
import Rania6 from "./Assets/Images/Rania-6.jpg";
import Rania7 from "./Assets/Images/Rania-7.jpg";


export const images = {
  hero: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1800&q=85",
  // about:
  //   "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1100&q=85",
  // video:
  //   "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800&q=85",
  // events:
  //   "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1800&q=85",
  gallery: [
    Rania1,Rania2,Rania3,Rania4,Rania5,Rania6,Rania7
  ],
};
// The sample video IDs are placeholders. Supply four actual YouTube IDs for launch.
export const videos = [
  {
    id: "Udqr79TuBvo",
    title: "Wa Habibi",
    subtitle: "Featured performance · Demo 01",
  },
  {
    id: "jfKfPfyJRdk",
    title: "Live in concert",
    subtitle: "Live performance · Demo 02",
  },
  {
    id: "ScMzIvxBSi4",
    title: "Behind the melody",
    subtitle: "Studio session · Demo 03",
  },
  {
    id: "aqz-KE-bpKQ",
    title: "An intimate evening",
    subtitle: "Acoustic session · Demo 04",
  },
];
// Dates are deliberately future sample dates; replace with verified event information.
export const events = [
  {
    id: "concert-evening",
    type: "CONCERT",
    title: "An Evening of Music",
    date: "2027-03-12T19:30:00",
    venue: "Venue to be announced",
    city: "Jerusalem",
    description:
      "A special night celebrating music, connection, and storytelling. Event details and ticket information will be announced soon.",
    accent: "#ff7a66",
  },
  {
    id: "vocal-workshop",
    type: "WORKSHOP",
    title: "Find Your Voice",
    date: "2027-04-18T16:00:00",
    venue: "Location to be announced",
    city: "Online / In person",
    description:
      "An interactive vocal workshop exploring confidence, expression, and musical storytelling. Registration details coming soon.",
    accent: "#e4abff",
  },
  {
    id: "creative-session",
    type: "TRAINING",
    title: "Creative Vocal Session",
    date: "2027-05-09T11:00:00",
    venue: "Location to be announced",
    city: "Haifa",
    description:
      "A guided training session for singers and music enthusiasts. Program and registration will be available later.",
    accent: "#ffcc73",
  },
  {
    id: "summer-stage",
    type: "LIVE SHOW",
    title: "Summer Stage",
    date: "2027-06-25T20:00:00",
    venue: "Venue to be announced",
    city: "Tel Aviv",
    description:
      "A summer performance filled with music and energy. More information to follow.",
    accent: "#7ce8df",
    // image: '/images/concert-evening.jpg',

  },
];

// export const events = [
//   {
//     id: 'concert-evening',
//     type: 'CONCERT',
//     title: 'An Evening of Music',
//     date: '2027-03-12T19:30:00',
//     venue: 'Venue to be announced',
//     city: 'Jerusalem',
//     description: 'A special night celebrating music, connection, and storytelling. Event details and ticket information will be announced soon.',
//     accent: '#ff7a66',
//     image: '/images/concert-evening.jpg'
//   },
//   {
//     id: 'vocal-workshop',
//     type: 'WORKSHOP',
//     title: 'Find Your Voice',
//     date: '2027-04-18T16:00:00',
//     venue: 'Location to be announced',
//     city: 'Online / In person',
//     description: 'An interactive vocal workshop exploring confidence, expression, and musical storytelling. Registration details coming soon.',
//     accent: '#e4abff',
//     image: '/images/vocal-workshop.jpg'
//   },
//   {
//     id: 'creative-session',
//     type: 'TRAINING',
//     title: 'Creative Vocal Session',
//     date: '2027-05-09T11:00:00',
//     venue: 'Location to be announced',
//     city: 'Haifa',
//     description: 'A guided training session for singers and music enthusiasts. Program and registration will be available later.',
//     accent: '#ffcc73',
//     image: '/images/creative-session.jpg'
//   },
//   {
//     id: 'summer-stage',
//     type: 'LIVE SHOW',
//     title: 'Summer Stage',
//     date: '2027-06-25T20:00:00',
//     venue: 'Venue to be announced',
//     city: 'Tel Aviv',
//     description: 'A summer performance filled with music and energy. More information to follow.',
//     accent: '#7ce8df',
//     image: '/images/summer-stage.jpg'
//   }
// ];
