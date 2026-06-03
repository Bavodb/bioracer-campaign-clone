import "./CampaignCollage.css";

const collageItems = [
  {
    title: "Bioracer flyer",
    label: "Hoofdposter",
    image: "/images/flyer/flyer-bioracer.png",
    alt: "Bioracer flyer met de campagne Elke rit telt",
    className: "collage-item-featured",
  },
  {
    title: "QR flyer",
    label: "Campagneposter",
    image: "/images/flyer/flyer-qr-green.png",
    alt: "Flyer met de slogan Elke rit telt en een groene QR-sectie",
    className: "collage-item-qr",
  },
  {
    title: "Scan poster",
    label: "Directe actie",
    image: "/images/flyer/flyer-qr-green2.png",
    alt: "Poster met een grote QR-code voor de Bioracer campagne",
    className: "collage-item-scan",
  },
  {
    title: "Sticker",
    label: "Street signal",
    image: "/images/flyer/sticker-blue.png",
    alt: "Blauwe Bioracer-sticker",
    className: "collage-item-sticker",
  },
];

function CampaignCollage() {
  return (
    <section className="collage-section" id="campaign-assets">
      <div className="collage-inner">
        <div className="collage-heading">
          <span className="collage-eyebrow">Printcampagne</span>
          <h2>Van scherm tot straat.</h2>

          <p>
            De campagne leeft niet alleen online. Flyers en stickers zorgen
            ervoor dat “Elke rit telt.” ook zichtbaar wordt op plekken waar
            pendelaars echt passeren.
          </p>
        </div>

        <div className="collage-layout">
          {collageItems.map((item) => (
            <article
              className={`collage-item ${item.className}`}
              key={item.title}
            >
              <img src={item.image} alt={item.alt} />

              <div className="collage-item-overlay">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}

          <div className="collage-text-card">
            <span>#ElkeRitTelt</span>
            <p>
              De flyer, de QR-varianten en de sticker delen hetzelfde neon
              accent, zodat de campagne herkenbaar blijft en toch krachtig
              afsteekt tegen de donkere pagina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampaignCollage;
