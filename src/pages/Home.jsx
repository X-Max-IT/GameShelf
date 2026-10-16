import { useLoaderData, useRevalidator } from "react-router-dom";

import HeroBlock from "../components/features/HeroBlock/HeroBlock";
import CardsSection from "../components/features/CardsSection/CardsSection";
import CardGame from "../components/ui/CardGame/CardGame";
import CardGenre from "../components/ui/CardGenre/CardGenre";

import { HOME_GENRES } from "../data/arrayGenres";
import Banner from "../components/features/Banner/Banner";
import StateMessage from "../components/ui/StateMessage/StateMessage";
import Button from "../components/ui/Button/Button";

function Home() {
  const { popularGames, games_2024, error } = useLoaderData();
  const { revalidate } = useRevalidator();

  const fallback = (
    <StateMessage message="Не удалось загрузить игры :(">
      <Button size="small" onClick={revalidate}>
        Повторить
      </Button>
    </StateMessage>
  );
  return (
    <div>
      <HeroBlock />
      <CardsSection
        title="Популярные игры"
        icon="fire"
        caption="Выбор сообщества"
        horizontal
      >
        {error
          ? fallback
          : popularGames.map((game) => <CardGame key={game.id} game={game} />)}
      </CardsSection>
      <CardsSection
        title="Новинки сезона"
        icon="calendar"
        caption="Свежие релизы"
        horizontal
      >
        {error
          ? fallback
          : games_2024.map((game) => <CardGame key={game.id} game={game} />)}
      </CardsSection>
      <CardsSection title="По жанрам" icon="jostik" caption="На любой вкус">
        {HOME_GENRES.map((genre) => (
          <CardGenre key={genre.name} genre={genre} />
        ))}
      </CardsSection>
      <Banner />
    </div>
  );
}

export default Home;
