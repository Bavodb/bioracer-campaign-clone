import { useEffect, useState } from "react";
import "./ScrollGallery.css";

const gallerySlides = [
  {
    title: "De ochtendrit.",
    text: "Een frisse start van de dag, met comfort dat je onderweg ondersteunt.",
    image: "/images/hero-image1.jpg",
  },
  {
    title: "Door weer en wind.",
    text: "Niet elke rit is perfect, maar goede fietskledij maakt wel het verschil.",
    image: "/images/hero-image2.jpg",
  },
  {
    title: "Aankomen met focus.",
    text: "Elke dagelijkse rit wordt een klein moment van prestatie en voldoening.",
    image: "/images/hero-image3.jpg",
  },
];

function ScrollGallery() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === gallerySlides.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? gallerySlides.length - 1 : currentSlide - 1,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="scroll-gallery-section" id="gallery">
      <div className="scroll-gallery-inner">
        <div className="scroll-gallery-images">
          {gallerySlides.map((slide, index) => (
            <img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              className={`scroll-gallery-image ${
                index === activeSlide ? "is-active" : ""
              }`}
            />
          ))}

          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-arrow"
              aria-label="Vorige slide"
              onClick={goToPreviousSlide}
            >
              ←
            </button>

            <button
              type="button"
              className="gallery-arrow"
              aria-label="Volgende slide"
              onClick={goToNextSlide}
            >
              →
            </button>
          </div>
        </div>

        <div className="scroll-gallery-content">
          <p className="scroll-gallery-eyebrow">Elke rit telt</p>

          <div className="scroll-gallery-text-wrapper">
            {gallerySlides.map((slide, index) => (
              <div
                key={slide.title}
                className={`scroll-gallery-text ${
                  index === activeSlide ? "is-active" : ""
                }`}
              >
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            ))}
          </div>

          <div className="gallery-dots" aria-label="Slideshow navigatie">
            {gallerySlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`gallery-dot ${
                  index === activeSlide ? "is-active" : ""
                }`}
                aria-label={`Toon slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollGallery;