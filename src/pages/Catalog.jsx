import { useLoaderData, useSearchParams } from "react-router-dom";

import CardsSection from "../components/features/CardsSection/CardsSection";
import CardGame from "../components/ui/CardGame/CardGame";
import FilterGames from "../components/features/FilterGames/FilterGames";
import StateMessage from "../components/ui/StateMessage/StateMessage";
import Button from "../components/ui/Button/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { getGames } from "../api/fetchGamesData";

function Catalog() {
  const { games: initialGames, hasMore: initialHasMore } = useLoaderData();
  const [searchParam, setSearchParam] = useSearchParams();

  const [games, setGames] = useState(initialGames);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef(null);

  const searchParamsString = searchParam.toString();

  useEffect(() => {
    setGames(initialGames);
    setPage(1);
    setHasMore(initialHasMore);
  }, [searchParamsString, initialGames, initialHasMore]);

  const loadNextPage = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      const params = Object.fromEntries(
        [...searchParam.entries()].filter(([, value]) => value !== ""),
      );
      const nextPage = page + 1;
      console.log("Параметры запроса:", {
        ...params,
        page: nextPage,
      });

      const data = await getGames({ ...params, page: nextPage });
      const newGames = data.results.filter(
        (game) => game.playtime > 1 && game.ratings_count > 0,
      );

      setGames((prev) => [...prev, ...newGames]);
      setPage(nextPage);
      setHasMore(Boolean(data.next));
    } catch (error) {
      console.error("Не удалось загрузить игры:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, searchParam, page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadNextPage();
      }
    });

    const sentiref = sentinelRef.current;

    if (sentiref) {
      observer.observe(sentiref);
    }

    return () => {
      observer.disconnect();
    };
  }, [loadNextPage]);

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
      <div ref={sentinelRef}>
        {isLoading ? "Загружаем игры..." : hasMore ? "" : "Больше игр нет"}
      </div>
    </>
  );
}

export default Catalog;
