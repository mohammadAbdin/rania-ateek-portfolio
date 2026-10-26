// import React from "react";
// import { images } from "../data";
// import { ArrowUpRight } from "lucide-react";

// export function About({}) {
//   return (
//     <section id="about" className="about section-pad">
//       <div className="about-visual">
//         <img
//           src={images.about}
//           alt="Placeholder live music atmosphere"
//           loading="lazy"
//         />
//         <span className="visual-stamp">
//           MORE THAN
//           <br />
//           MUSIC ✳
//         </span>
//       </div>
//       <div className="about-copy">
//         <div className="section-kicker">01 / THE ARTIST</div>
//         <h2>
//           Meet the voice
//           <br />
//           behind the <em>magic.</em>
//         </h2>
//         <p>
//           Welcome to the world of Rania Ateek — where every performance is an
//           invitation to feel, connect, and celebrate music.
//         </p>
//         <p className="muted">
//           This is placeholder biography text. Add Rania's story, artistic
//           background, and achievements here when you're ready.
//         </p>
//         <a
//           className="outline-link"
//           href="mailto:bookings@example.com?subject=About%20Rania"
//         >
//           GET IN TOUCH <ArrowUpRight size={19} />
//         </a>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { images } from "../data";
import nardImage from "../Assets/Images/nard-ensemble.jpeg";
import Rania4 from "../Assets/Images/Rania-4.jpg";
import Rania7 from "../Assets/Images/Rania-7.jpg";

import { ArrowUpRight, Music2 } from "lucide-react";

const repertoire = [
  {
    composer: "Wolfgang Amadeus Mozart",
    works: [
      {
        opera: "Die Zauberflöte",
        roles: "Papagena · Queen of the Night",
      },
      {
        opera: "Le nozze di Figaro",
        roles: "Susanna · Barbarina",
      },
    ],
  },
  {
    composer: "Gaetano Donizetti",
    works: [
      { opera: "L'elisir d'amore", roles: "Adina" },
      { opera: "Don Pasquale", roles: "Norina" },
    ],
  },
  {
    composer: "Giacomo Puccini",
    works: [
      {
        opera: "Suor Angelica",
        roles: "Suor Genovieffa",
      },
    ],
  },
  {
    composer: "Johann Strauss II",
    works: [{ opera: "Die Fledermaus", roles: "Adele" }],
  },
  {
    composer: "Benjamin Britten",
    works: [{ opera: "Peter Grimes", roles: "First Niece" }],
  },
];

export function About() {
  return (
    <>
      <section id="about" className="about section-pad">
        <div className="about-visual">
          <img src={Rania4} alt="Live music atmosphere" loading="lazy" />

          <span className="visual-stamp">
            BEYOND
            <br />
            BORDERS ✳
          </span>
        </div>

        <div className="about-copy">
          <div className="section-kicker">01 / THE ARTIST</div>

          <h2>
            Two traditions.
            <br />
            <em>One voice.</em>
          </h2>

          <p className="about-lead">
            Rania Ateek is a Palestinian soprano from Nazareth whose artistry
            brings together the expressive world of opera and the richness of
            Arabic music.
          </p>

          <p className="about-description">
            With a Master's degree from the Jerusalem Academy of Music and
            Dance, she has developed her craft through opera workshops,
            international singing competitions, and a diverse operatic
            repertoire.
          </p>

          <div className="about-highlights">
            <div>
              <span>ROOTS</span>
              <strong>Nazareth, Palestine</strong>
            </div>

            <div>
              <span>ARTISTRY</span>
              <strong>Opera & Arabic Music</strong>
            </div>

            <div>
              <span>EDUCATION</span>
              <strong>Master's in Music</strong>
            </div>
          </div>

          <a className="outline-link" href="#music">
            EXPERIENCE HER MUSIC
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      <section
        id="repertoire"
        style={{
          "--repertoire-image": `url("${Rania7}")`,
        }}
        className="artistic-journey section-pad"
      >
        <div className="journey-heading">
          <div>
            <div className="section-kicker">02 / THE REPERTOIRE</div>

            <h2>
              Stories brought
              <br />
              <em>to life.</em>
            </h2>
          </div>

          {/* <p>
            From Mozart to Britten, Rania's repertoire explores characters,
            emotions, and stories across the operatic tradition.
          </p> */}
        </div>

        <div className="repertoire-list">
          {repertoire.map((item) => (
            <div className="repertoire-item" key={item.composer}>
              <h3>{item.composer}</h3>

              <div className="repertoire-works">
                {item.works.map((work) => (
                  <div key={work.opera}>
                    <strong>{work.opera}</strong>
                    <span>{work.roles}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="nard" className="nard-section section-pad">
        <div className="nard-content">
          <div className="section-kicker">03 / MUSICAL COLLABORATION</div>

          <h2>
            {/* Different roots.
            <br />
            <em>Shared harmony.</em> */}
            <em>Shared Harmony</em>
          </h2>

          <div className="nard-label">
            <Music2 size={20} />
            INTRODUCING NARD
          </div>

          <p>
            Nard is a newly formed ensemble bringing Arabic musical traditions
            and classical music into conversation.
          </p>

          <p>
            Together with singer Deema Azar, violinist Hassan Bakri, and pianist
            and composer Yousef Sakhnini, Rania explores a shared musical vision
            that bridges different traditions.
          </p>

          <div className="nard-members">
            <span>RANIA ATEEK</span>
            <span>DEEMA AZAR</span>
            <span>HASSAN BAKRI</span>
            <span>YOUSEF SAKHNINI</span>
          </div>
        </div>

        <div className="nard-decoration">
          <div className="nard-image-wrapper">
            <img
              src={nardImage}
              alt="Nard musical ensemble"
              className="nard-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
