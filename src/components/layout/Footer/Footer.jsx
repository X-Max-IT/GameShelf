import { NavLink } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <Logo />
          <span className="footer__logo-text">
            Your games. Your collection.
          </span>
        </div>

        <nav className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <NavLink to={"/"} className="footer__menu-link">
                Home
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink to={"/catalog"} className="footer__menu-link">
                Catalog
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink to={"/library"} className="footer__menu-link">
                Library
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__rights">
          <p className="footer__rights-text">© 2026 GameShelf</p>
          <p className="footer__rights-text">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
