import "./CampaignCollage.css";

const collageItems = [
  {
    title: "Flyer",
    label: "Print asset",
    image: "/images/collage-flyer.jpg",
    alt: "Flyer van de Bioracer campagne Elke rit telt",
    className: "collage-item-large",
  },
  {
    title: "Folder",
    label: "Campagne-informatie",
    image: "/images/collage-folder.jpg",
    alt: "Folder van de Bioracer campagne",
    className: "collage-item-tall",
  },
  {
    title: "Stickers",
    label: "Offline herkenning",
    image: "/images/collage-stickers.jpg",
    alt: "Stickers met de slogan Elke rit telt",
    className: "collage-item-small",
  },
];

function CampaignCollage() {
  return (
    <section className="collage-section" id="campaign-assets">
      <div className="collage-inner">
        <div className="collage-heading">

          <h2>Van scherm tot straat.</h2>

          <p>
            De campagne leeft niet alleen online. Flyers, folders en stickers
            zorgen ervoor dat “Elke rit telt.” ook zichtbaar wordt op plekken
            waar pendelaars echt passeren.
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
              Alle printmaterialen verwijzen via QR-code naar dezelfde
              campagnewebsite. Zo wordt het offline bereik ook meetbaar.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default CampaignCollage;