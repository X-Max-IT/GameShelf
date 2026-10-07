import { useLoaderData } from "react-router-dom";
import HeroBlock from "../components/features/HeroBlock/HeroBlock";
import GamesSection from "../components/features/GamesSection/GamesSection";

function Home() {
  const { popularGames, games_2024 } = useLoaderData();
  return (
    <div>
      <HeroBlock />
      <GamesSection
        title="Популярные игры"
        icon="fire"
        caption="Выбор сообщества"
        games={popularGames}
        horizontal
      />
      <GamesSection
        title="Новые игры"
        icon="calendar"
        caption="Свежие релизы"
        games={games_2024}
        horizontal
      />
    </div>
  );
}

export default Home;
