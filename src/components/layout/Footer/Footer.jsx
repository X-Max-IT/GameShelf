import { NavLink } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Logo />
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <NavLink className="footer__menu-link">Главная</NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink className="footer__menu-link">Каталог</NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink className="footer__menu-link">О нас</NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__rights">
          <p className="footer__rights-text">© 2026 GameShelf</p>
          <p className="footer__rights-text">Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
