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
    <form
      key={location.search}
      onSubmit={hundleSubm}
      className="section filter"
    >
      <div className="container filter__container">
        <select
          id="genres"
          name="genres"
          defaultValue={searchParam.get("genres") || undefined}
          className="filter__select"
        >
          <option value="" className="filter__option">
            Все жанры
          </option>
          {CATALOG_GENRES.map((genre) => (
            <option key={genre.id} value={genre.id} className="filter__option">
              {genre.name}
            </option>
          ))}
        </select>
        <select
          id="rating"
          name="metacritic"
          defaultValue={searchParam.get("metacritic") || undefined}
          className="filter__select"
        >
          <option value="" className="filter__option">
            Любой рейтинг
          </option>
          <option value="80,100" className="filter__option">
            3.0+
          </option>
          <option value="90,100" className="filter__option">
            4.0+
          </option>
        </select>
        <select
          id="platforms"
          name="platforms"
          defaultValue={searchParam.get("platforms") || undefined}
          className="filter__select"
        >
          <option value="" className="filter__option">
            Все платформы
          </option>
          {PLATFORMS.map((platform) => (
            <option
              key={platform.id}
              value={platform.id}
              className="filter__option"
            >
              {platform.name}
            </option>
          ))}
        </select>
        <Button type="submit">Применить</Button>
      </div>
    </form>
  );
}

export default FilterGames;
