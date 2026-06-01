import "./RideCard.css";

type RideCardProps = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

function RideCard({ title, text, image, alt }: RideCardProps) {
  return (
    <article className="ride-card">
      <div className="ride-card-image-wrapper">
        <img src={image} alt={alt} className="ride-card-image" />
      </div>

      <div className="ride-card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default RideCard;