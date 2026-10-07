import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";
import placeholderImage from "../../../assets/image/null-image.webp";

function CardGame({ game }) {
  const { id, name, background_image, rating, genres } = game;

  return (
    <Link className="game-card-link" to={`/game/${id}`}>
      <article className="game-card">
        <img
          src={background_image || placeholderImage}
          alt={name}
          loading="lazy"
          className="game-card__image"
          onError={(e) => (e.target.src = placeholderImage)}
        />
        <div className="game-card__content">
          <h4 className="game-card__title">{name}</h4>
          <div className="game-card__rating">
            <Icon name="star" />
            <p className="game-card__rating-text">{rating}</p>
          </div>
          <div className="game-card__tags">
            {genres?.slice(0, 3).map((genre) => (
              <span
                key={genre.id}
                className="game-card__tag caption"
                title={genre.name}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CardGame;

//id, name, background_image, rating, genres.name
