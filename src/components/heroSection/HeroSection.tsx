import { useEffect, useState } from "react";
import "./HeroSection.css";

const heroImages = [
  "/images/hero-image1.jpg",
  "/images/hero-image2.jpg",
  "/images/hero-image3.jpg",
];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1,
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`hero-image ${
              index === currentImageIndex ? "is-active" : ""
            }`}
          />
        ))}
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
       

        <h1 className="hero-title">Elke rit telt.</h1>

        <p className="hero-text">
          Professionele fietskledij voor elke dag. Niet alleen voor profs, maar
          voor iedereen die comfortabel onderweg wil zijn.
        </p>

        <div className="hero-actions">
          <a href="#video" className="hero-button">
            Bekijk de video
          </a>

          <a href="#collection" className="hero-button hero-button-secondary">
            Ontdek de collectie
          </a>
        </div>
      </div>

      <div className="hero-dots" aria-label="Hero afbeeldingen">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${
              index === currentImageIndex ? "is-active" : ""
            }`}
            aria-label={`Toon afbeelding ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;