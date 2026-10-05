import CardGame from "../../ui/CardGame/CardGame";
import Icon from "../../ui/Icon/Icon";

function GamesSection({ title, caption, icon, games }) {
  return (
    <section className="section">
      <div className="container games__container">
        {title && caption && icon && (
          <div className="games__header">
            <Icon name={icon} />
            <div className="games__header-text">
              <h2 className="games__header-title">{title}</h2>
              <p className="games__header-caption">{caption}</p>
            </div>
          </div>
        )}

        <div className="games-grid">
          {games.map((game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesSection;
