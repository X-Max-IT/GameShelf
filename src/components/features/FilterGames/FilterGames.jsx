import { useLocation, useNavigate } from "react-router-dom";

import { CATALOG_GENRES } from "../../../data/arrayGenres";
import PLATFORMS from "../../../data/arrayPlatforms";

import Button from "../../ui/Button/Button";

function FilterGames() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParam = new URLSearchParams(location.search);

  const hundleSubm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const param = new URLSearchParams(formData);

    for (const [key, value] of param.entries()) {
      if (!value) param.delete(key);
    }
    navigate(`/catalog?${param.toString()}`);
  };

  return (
    <form key={location.search} onSubmit={hundleSubm} className="filter">
      <label htmlFor="genres">
        Жанры
        <select
          id="genres"
          name="genres"
          defaultValue={searchParam.get("genres") || undefined}
        >
          <option value="">Все жанры</option>
          {CATALOG_GENRES.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="rating">
        Рейтинг
        <select
          id="rating"
          name="metacritic"
          defaultValue={searchParam.get("metacritic") || undefined}
        >
          <option value="">Любой рейтинг</option>
          <option value="80,100">3.0+</option>
          <option value="90,100">4.0+</option>
        </select>
      </label>
      <label htmlFor="platforms">
        Платформа
        <select
          id="platforms"
          name="platforms"
          defaultValue={searchParam.get("platforms") || undefined}
        >
          <option value="">Любая</option>
          {PLATFORMS.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
        </select>
      </label>
      <Button type="submit">Применить</Button>
    </form>
  );
}

export default FilterGames;
