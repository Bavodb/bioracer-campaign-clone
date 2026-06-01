import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import RideCard from "./components/rideCard/RideCard";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const rideCards = [
  {
    title: "Voor de ochtendrit",
    text: "Start je dag met comfort, focus en fietskledij die mee beweegt tijdens elke verplaatsing.",
    image: "/images/ride-card-1.jpg",
    alt: "Pendelaar die 's ochtends met de fiets vertrekt",
  },
  {
    title: "Voor weer en wind",
    text: "Onderweg door regen, wind of kou? Bioracer ondersteunt je rit in verschillende omstandigheden.",
    image: "/images/ride-card-2.jpg",
    alt: "Fietser onderweg in wisselende weersomstandigheden",
  },
  {
    title: "Voor elke dag",
    text: "Niet alleen voor profs of wedstrijden, maar ook voor dagelijkse fietsers die kwaliteit willen voelen.",
    image: "/images/ride-card-3.jpg",
    alt: "Fietser die aankomt op het werk",
  },
];

function App() {
  const cardsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = cardsSectionRef.current;

    if (!section) return;

    const cards = section.querySelectorAll(".ride-card");

    const context = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.22,
          scrollTrigger: {
            trigger: section,
            start: "top 58%",
            once: true,
          },
        },
      );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <main className="page-shell">
      <Navbar />

      <HeroSection />

      <section
        className="every-ride-section"
        id="every-ride"
        ref={cardsSectionRef}
      >
        <div className="every-ride-inner">
          <div className="every-ride-heading">
            <p className="section-eyebrow">Niet alleen voor profs</p>

            <h2>Voor elke rit.</h2>

            <p className="section-intro">
              Professionele fietskledij, niet alleen voor wedstrijden. Bioracer
              brengt comfort, bescherming en kwaliteit naar elke dagelijkse rit.
            </p>
          </div>

          <div className="ride-card-grid">
            {rideCards.map((card) => (
              <RideCard
                key={card.title}
                title={card.title}
                text={card.text}
                image={card.image}
                alt={card.alt}
              />
            ))}
          </div>
        </div>
      </section>

     <section className="video-section" id="video">
  <div className="video-inner">
    <div className="video-frame video-placeholder">
      <div className="video-placeholder-content">
        <span className="play-icon" aria-hidden="true">
          ▶
        </span>
      </div>
    </div>

    <div className="video-content">

      <h2>Bekijk de rit.</h2>

      <p>
        Een dagelijkse pendelrit voelt misschien gewoon, maar met de juiste
        kledij wordt elke rit comfortabeler, sterker en waardevoller.
      </p>

      <a href="#video" className="video-button">
        Video bekijken
      </a>

      <p className="video-caption">
        Van ochtendrit tot aankomst op het werk: elke rit telt.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}

export default App;