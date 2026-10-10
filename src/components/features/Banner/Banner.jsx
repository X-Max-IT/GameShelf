import Button from "../../ui/Button/Button";

function Banner() {
  return (
    <section className="section">
      <div className="container banner__container">
        <div className="banner__content">
          <img src="/logo.svg" alt="logo" className="banner__content-logo" />
          <div className="banner__content-text">
            <h3 className="banner__content-title">
              Не знаешь, во что поиграть?
            </h3>
            <p className="banner__content-description">
              Переходи в каталог и найди игру по душе
            </p>
          </div>
        </div>
        <Button to="/catalog" icon="arrow">
          Перейти в каталог
        </Button>
      </div>
    </section>
  );
}

export default Banner;
