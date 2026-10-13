import { useLoaderData } from "react-router-dom";

import CardsSection from "../components/features/CardsSection/CardsSection";
import CardGame from "../components/ui/CardGame/CardGame";
import FilterGames from "../components/features/FilterGames/FilterGames";

function Catalog() {
  const { games } = useLoaderData();
  return (
    <>
      <FilterGames />
      <CardsSection>
        {games.map((game) => (
          <CardGame key={game.id} game={game} />
        ))}
      </CardsSection>
    </>
  );
}

export default Catalog;
