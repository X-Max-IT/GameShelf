import { useLoaderData } from "react-router-dom";

import HeroBlock from "../components/features/HeroBlock/HeroBlock";
import CardsSection from "../components/features/CardsSection/CardsSection";
import CardGame from "../components/ui/CardGame/CardGame";
import CardGenre from "../components/ui/CardGenre/CardGenre";

import { HOME_GENRES } from "../data/arrayGenres";

function Home() {
  const { popularGames, games_2024 } = useLoaderData();
  return (
    <div>
      <HeroBlock />
      <CardsSection
        title="Популярные игры"
        icon="fire"
        caption="Выбор сообщества"
        horizontal
      >
        {popularGames.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </CardsSection>
      <CardsSection
        title="Новинки сезона"
        icon="calendar"
        caption="Свежие релизы"
        horizontal
      >
        {games_2024.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </CardsSection>
      <CardsSection title="По жанрам" icon="jostik" caption="На любой вкус">
        {HOME_GENRES.map((genre) => (
          <CardGenre key={genre.name} genre={genre} />
        ))}
      </CardsSection>
    </div>
  );
}

export default Home;
