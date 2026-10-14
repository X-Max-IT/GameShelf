import { useLoaderData, useSearchParams } from "react-router-dom";

import CardsSection from "../components/features/CardsSection/CardsSection";
import CardGame from "../components/ui/CardGame/CardGame";
import FilterGames from "../components/features/FilterGames/FilterGames";
import StateMessage from "../components/ui/StateMessage/StateMessage";
import Button from "../components/ui/Button/Button";
import { useEffect, useRef } from "react";

function Catalog() {
  const { games } = useLoaderData();
  const [searchParam, setSearchParam] = useSearchParams();
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("Пора зрагрузить страничку!");
      }
    });
    const sentiref = sentinelRef.current;
    if (sentiref) {
      observer.observe(sentiref);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <FilterGames />
      {games.length === 0 ? (
        <StateMessage
          title="Ничего не нашли 👀"
          message="Попробуйте изменить запрос"
        >
          <Button size="small" onClick={() => setSearchParam({})}>
            Сброс
          </Button>
        </StateMessage>
      ) : (
        <CardsSection>
          {games.map((game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </CardsSection>
      )}
      <div ref={sentinelRef}>Маячок</div>
    </>
  );
}

export default Catalog;
