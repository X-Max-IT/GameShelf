import Icon from "../../ui/Icon/Icon";

function CardsSection({ title, caption, icon, children, horizontal }) {
  return (
    <section className="section">
      <div className="container games__container">
        {(title || caption || icon) && (
          <header className="games__header">
            {icon && <Icon name={icon} className="hidden-mobile" />}
            <div className="games__header-text">
              {title && <h2 className="games__header-title">{title}</h2>}
              {caption && <p className="games__header-caption">{caption}</p>}
            </div>
          </header>
        )}
        <div
          className={`cards-grid ${horizontal ? "cards-grid--horizontal" : ""}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
