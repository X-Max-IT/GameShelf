const API_KEY = "c8d790eb02694c2498f98cf29f492921";
const BASE_URL = "https://api.rawg.io/api/games";

export async function getGames(filters = {}) {
  const params = { key: API_KEY, page_size: 20, ...filters };
  const queryString = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}?${queryString}`);
  if (!res.ok) throw new Error("Ошибка HTTP-запроса");
  const data = await res.json();
  return data.results;
}
