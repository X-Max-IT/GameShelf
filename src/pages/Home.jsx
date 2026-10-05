import { useLoaderData } from "react-router-dom";
import HeroBlock from "../components/features/HeroBlock/HeroBlock";
import CardGame from "../components/ui/CardGame/CardGame";
import SearchGame from "../components/ui/SearchGame/SearchGame";

function Home() {
  const { popularGames, games_2024 } = useLoaderData();
  return (
    <div>
      <HeroBlock />
    </div>
  );
}

export default Home;
