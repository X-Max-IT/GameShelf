import { getGames } from "../api/fetchGamesData";

export async function homeLoader() {
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
