import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to={"/"} className="logo__link">
        <img src="/logo.svg" alt="logo" />
        <p className="logo__name">GameShelf</p>
      </Link>
    </div>
  );
}

export default Logo;
