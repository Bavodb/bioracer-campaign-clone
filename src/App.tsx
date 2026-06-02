import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import RideCard from "./components/rideCard/RideCard";
import CampaignCollage from "./components/campaignCollage/CampaignCollage";
import ScrollGallery from "./components/scrollGallery/ScrollGallery";
import Footer from "./components/footer/Footer";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const rideCards = [
  {
    title: "Voor de ochtendrit",
    text: "Start je dag met comfort, focus en fietskledij die mee beweegt tijdens elke verplaatsing.",
    image: "/images/rideCards-images/ride-card-1.png",
    alt: "Pendelaar die 's ochtends met de fiets vertrekt",
  },
  {
    title: "Voor weer en wind",
    text: "Onderweg door regen, wind of kou? Bioracer ondersteunt je rit in verschillende omstandigheden.",
    image: "/images/rideCards-images/ride-card-2.png",
    alt: "Fietser onderweg in wisselende weersomstandigheden",
  },
  {
    title: "Voor elke dag",
    text: "Niet alleen voor profs of wedstrijden, maar ook voor dagelijkse fietsers die kwaliteit willen voelen.",
    image: "/images/rideCards-images/ride-card-3.png",
    alt: "Fietser die aankomt op het werk",
  },
];

function App() {
  const cardsSectionRef = useRef<HTMLElement | null>(null);
  const benefitsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cardsSection = cardsSectionRef.current;
    const benefitsSection = benefitsSectionRef.current;

    const context = gsap.context(() => {
      if (cardsSection) {
        const cards = cardsSection.querySelectorAll(".ride-card");

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
              trigger: cardsSection,
              start: "top 58%",
              once: true,
            },
          },
        );
      }

      if (benefitsSection) {
        const heading = benefitsSection.querySelector(".benefits-heading");
        const benefitItems = benefitsSection.querySelectorAll(".benefit-item");

        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: benefitsSection,
              start: "top 65%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          benefitItems,
          {
            opacity: 0,
            x: 70,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.16,
            scrollTrigger: {
              trigger: benefitsSection,
              start: "top 58%",
              once: true,
            },
          },
        );
      }
    });

    return () => {
      context.revert();
    };
  }, []);

  return (
    <main className="page-shell">
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <section
        className="every-ride-section"
        id="every-ride"
        ref={cardsSectionRef}
      >
        <div className="every-ride-inner">
          <div className="every-ride-heading">
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
              Een dagelijkse pendelrit voelt misschien gewoon, maar met de
              juiste kledij wordt elke rit comfortabeler, sterker en
              waardevoller.
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

      <section
        className="benefits-section"
        id="benefits"
        ref={benefitsSectionRef}
      >
        <div className="benefits-inner">
          <div className="benefits-heading">
            <h2>Comfort in elke situatie.</h2>

            <p>
              Elke rit vraagt iets anders. Daarom combineert Bioracer comfort,
              bescherming en kwaliteit voor fietsers die dagelijks onderweg zijn.
            </p>
          </div>

          <div className="benefits-list">
            <article className="benefit-item">
              <span className="benefit-number">01</span>

              <div>
                <h3>Comfort</h3>
                <p>Kledij die goed zit en meebeweegt tijdens elke rit.</p>
              </div>
            </article>

            <article className="benefit-item">
              <span className="benefit-number">02</span>

              <div>
                <h3>Bescherming</h3>
                <p>Ondersteuning bij wind, regen en wisselende omstandigheden.</p>
              </div>
            </article>

            <article className="benefit-item">
              <span className="benefit-number">03</span>

              <div>
                <h3>Kwaliteit</h3>
                <p>
                  Ontwikkeld vanuit wielerervaring, gemaakt voor dagelijks
                  gebruik.
                </p>
              </div>
            </article>

            <article className="benefit-item">
              <span className="benefit-number">04</span>

              <div>
                <h3>Focus</h3>
                <p>Minder afleiding onderweg, meer aandacht voor je rit.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CampaignCollage />

      <ScrollGallery />

      <Footer />
    </main>
  );
}

export default App;