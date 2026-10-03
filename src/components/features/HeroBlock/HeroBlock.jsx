import SearchGame from "../../ui/SearchGame/SearchGame";

function HeroBlock() {
  return (
    <section className="section hero">
      <div className="container hero__container">
        <div className="hero__text">
          <h1 className="hero__title">
            Discover
            <br />
            <span className="hero__title-span">New worlds</span>
          </h1>
          <p className="hero__description">
            Thousands of games, dozens of genres, and incredible adventures
            await you at GameShelf
          </p>
        </div>
        <SearchGame />
      </div>
    </section>
  );
}

export default HeroBlock;
