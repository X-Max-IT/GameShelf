import { getGames } from "../api/fetchGamesData";

async function catalogLoader({ request }) {
  const url = new URL(request.url);

  const filters = {};

  const search = url.searchParams.get("search");
  const genres = url.searchParams.get("genres");
  const metacritic = url.searchParams.get("metacritic");

  if (search) {
    filters.search = search;
    filters.search_exact = true;
  }
  if (genres) filters.genres = genres;
  if (metacritic) filters.metacritic = metacritic;

  const results = await getGames(filters);

  const games = results.filter(
    (game) => game.playtime > 1 && game.ratings_count > 0,
  );
  console.log(games);

  return { games };
}

export default catalogLoader;
