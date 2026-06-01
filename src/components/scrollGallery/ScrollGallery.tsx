import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollGallery.css";

gsap.registerPlugin(ScrollTrigger);

const gallerySlides = [
  {
    title: "De ochtendrit.",
    text: "Een frisse start van de dag, met comfort dat je onderweg ondersteunt.",
    image: "/images/scroll-image1.jpg",
  },
  {
    title: "Door weer en wind.",
    text: "Niet elke rit is perfect, maar goede fietskledij maakt wel het verschil.",
    image: "/images/scroll-image2.jpg",
  },
  {
    title: "Aankomen met focus.",
    text: "Elke dagelijkse rit wordt een klein moment van prestatie en voldoening.",
    image: "/images/scroll-image3.jpg",
  },
];

function ScrollGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const images = imageRefs.current.filter(Boolean);
    const texts = textRefs.current.filter(Boolean);

    const context = gsap.context(() => {
      gsap.set(images, { opacity: 0, scale: 1.04 });
      gsap.set(texts, { opacity: 0, y: 30 });

      gsap.set(images[0], { opacity: 1, scale: 1 });
      gsap.set(texts[0], { opacity: 1, y: 0 });

      gallerySlides.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: `${index * 33}% center`,
          end: `${(index + 1) * 33}% center`,
          onEnter: () => showSlide(index),
          onEnterBack: () => showSlide(index),
        });
      });

      function showSlide(activeIndex: number) {
        images.forEach((image, index) => {
          gsap.to(image, {
            opacity: index === activeIndex ? 1 : 0,
            scale: index === activeIndex ? 1 : 1.04,
            duration: 0.7,
            ease: "power2.out",
          });
        });

        texts.forEach((text, index) => {
          gsap.to(text, {
            opacity: index === activeIndex ? 1 : 0,
            y: index === activeIndex ? 0 : 24,
            duration: 0.55,
            ease: "power2.out",
          });
        });
      }
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section className="scroll-gallery-section" id="gallery" ref={sectionRef}>
      <div className="scroll-gallery-sticky">
        <div className="scroll-gallery-images">
          {gallerySlides.map((slide, index) => (
            <img
              key={slide.title}
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              src={slide.image}
              alt={slide.title}
              className="scroll-gallery-image"
            />
          ))}
        </div>

        <div className="scroll-gallery-content">
          <p className="scroll-gallery-eyebrow">Elke rit telt</p>

          <div className="scroll-gallery-text-wrapper">
            {gallerySlides.map((slide, index) => (
              <div
                key={slide.title}
                ref={(element) => {
                  textRefs.current[index] = element;
                }}
                className="scroll-gallery-text"
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