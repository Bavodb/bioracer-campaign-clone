import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import RideCard from "./components/rideCard/RideCard";

import "./App.css";

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
  return (
    <main className="page-shell">
      <Navbar />

      <HeroSection />

      <section className="every-ride-section" id="every-ride">
        <div className="every-ride-inner">
          <div className="every-ride-heading">
            <p className="section-eyebrow">Niet alleen voor profs</p>

            <h2>Ook voor jouw dagelijkse rit.</h2>

            <p className="section-intro">
              Bioracer wordt vaak gelinkt aan topsport, maar dezelfde kwaliteit
              maakt ook het verschil tijdens dagelijkse ritten. Of je nu naar je
              werk fietst, door de regen rijdt of na een lange dag naar huis
              gaat: goede fietskledij zorgt voor meer comfort, bescherming en
              focus.
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
    </main>
  );
}

export default App;