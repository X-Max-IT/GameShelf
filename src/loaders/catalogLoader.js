import { getGames } from "../api/fetchGamesData";

const USE_MOCK = true;

async function catalogLoader({ request }) {
  const url = new URL(request.url);

  if (USE_MOCK) {
    return {
      games: Array(20).fill({
        id: 1,
        name: "Mock",
        background_image: null,
        rating: 0,
        genres: [
          {
            name: "RPG",
          },
        ],
      }),
    };
  }

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

  return { games };
}

export default catalogLoader;
