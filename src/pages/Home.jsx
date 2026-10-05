import { useLoaderData } from "react-router-dom";
import HeroBlock from "../components/features/HeroBlock/HeroBlock";
import CardGame from "../components/ui/CardGame/CardGame";
import SearchGame from "../components/ui/SearchGame/SearchGame";
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
      />
      <GamesSection
        title="Новые игры"
        icon="calendar"
        caption="Свежие релизы"
        games={games_2024}
      />
    </div>
  );
}

export default Home;
