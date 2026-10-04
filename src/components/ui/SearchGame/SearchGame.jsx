import { useState } from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function SearchGame() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    const params = new URLSearchParams({ search: query });
    const url = `/catalog?${params.toString()}`;
    navigate(url, { replace: true });
  }

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <div className="search-bar__input-wrapper">
        <Icon name="search" className="search-bar__icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Найти игру..."
          className="search-bar__input"
        />
      </div>
      <Button icon="arrow" type="submit" disabled={!query.trim()}></Button>
    </form>
  );
}

export default SearchGame;
