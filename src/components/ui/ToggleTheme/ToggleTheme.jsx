import Icon from "../Icon/Icon";
import { useTheme } from "../../../hooks/useTheme";

function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="toggle"
      aria-label={`Переключить на ${theme === "light" ? "тёмную" : "светлую"} тему`}
      onClick={toggleTheme}
    >
      <Icon name="sun" className="toggle__icon toggle__icon--sun" />
      <Icon name="dark" className="toggle__icon toggle__icon--dark" />
      <span className="toggle__ellipse"></span>
    </button>
  );
}

export default ToggleTheme;
