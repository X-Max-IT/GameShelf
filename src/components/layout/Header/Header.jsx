import { NavLink } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import ToggleTheme from "../../ui/ToggleTheme/ToggleTheme";
import UserProfile from "../../ui/UserProfile/UserProfile";
import Icon from "../../ui/Icon/Icon";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <nav className="header__menu hidden-tablet">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <NavLink to={"/"} className="header__menu-link">
                <Icon name="home" />
                Home
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={"/catalog"} className="header__menu-link">
                <Icon name="catalog" />
                Catalog
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={"/library"} className="header__menu-link">
                <Icon name="library" />
                Library
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__profile-toggle">
          <div className="hidden-mobile">
            <ToggleTheme />
          </div>
          <UserProfile />
        </div>
      </div>
    </header>
  );
}

export default Header;
