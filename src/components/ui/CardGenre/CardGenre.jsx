import { Link } from "react-router-dom";

function CardGenre({ genre }) {
  const { name, slug, color } = genre;
  return (
    <Link to={`/catalog?genre=${slug}`}>
      <article className={`genre-card ${color ? `genre-card--${color}` : ""}`}>
        <div className="genre-card__content">
          <h4 className="genre-card__title">{name.toUpperCase()}</h4>
        </div>
      </article>
    </Link>
  );
}

export default CardGenre;
