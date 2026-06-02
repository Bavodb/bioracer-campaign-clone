import { useEffect, useState } from "react";
import "./ScrollGallery.css";

const gallerySlides = [
  {
    title: "Niet alleen voor profs.",
    text: "Bioracer brengt professionele fietskledij naar het dagelijkse leven van elke fietser.",
    image: "/images/scrollGallery-images/scrollGallery-image1.png",
  },
  {
    title: "Van straat tot spoor.",
    text: "Of je nu fietst, pendelt of onderweg even stopt: comfort blijft de rode draad.",
    image: "/images/scrollGallery-images/scrollGallery-image2.png",
  },
  {
    title: "Elke rit telt.",
    text: "Groot of klein, sportief of alledaags: elke verplaatsing verdient kwaliteit.",
    image: "/images/scrollGallery-images/scrollGallery-image3.png",
  },
];

function ScrollGallery() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) =>
        currentSlide === gallerySlides.length - 1 ? 0 : currentSlide + 1,
      );
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
        </div>
      </div>
    </section>
  );
}

export default ScrollGallery;