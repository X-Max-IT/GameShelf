import { getGames } from "../api/fetchGamesData";

const USE_MOCK = true;
export async function homeLoader() {
  if (USE_MOCK) {
    return {
      popularGames: Array(5).fill({
        id: 1,
        name: "Mock Game",
        background_image: null,
        rating: 0,
        genres: [
          {
            name: "RPG",
          },
        ],
      }),
      games_2024: Array(5).fill({
        id: 2,
        name: "Mock 2024",
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
  try {
    const [popularGames, games_2024] = await Promise.all([
      getGames({ ordering: "-added", page_size: 5 }),
      getGames({
        dates: "2024-01-01,2024-12-31",
        ordering: "-added",
        page_size: 5,
      }),
    ]);
    return { popularGames, games_2024 };
  } catch (error) {
    console.error(`Ошибка в home loader: ${error.message}`);
    return { popularGames: [], games_2024: [] };
  }
}
