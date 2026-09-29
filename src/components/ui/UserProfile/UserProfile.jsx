import { useEffect, useRef, useState } from "react";

import useUserName from "../../../hooks/useUserName";
import Icon from "../Icon/Icon";
import { Link, useNavigate } from "react-router-dom";

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { userName, updateUserName, removeUserName } = useUserName();
  const navigate = useNavigate();

  useEffect(() => {
    function handleOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="user-profile">
      <button
        className="user-profile__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name="user" className="user-profile__icon" />
        <p className="user-profile__name">{userName}</p>
        <Icon
          name="arrow_profile"
          className={`user-profile__arrow ${isOpen && "user-profile__arrow--rotate"}`}
        />
      </button>

      {isOpen && (
        <div className="user-profile__menu">
          <ul className="user-profile__list">
            <li className="user-profile__item">
              <Link
                to={"openModalName"} //todo добавить компонент модалки смены имени
                className="user-profile__link user-profile__link--disabled"
              >
                Сменить имя
              </Link>
            </li>
            <li className="user-profile__item visible-mobile">
              <Link to={"/"} className="user-profile__link">
                Главная
              </Link>
            </li>
            <li className="user-profile__item visible-mobile">
              <Link to={"/catalog"} className="user-profile__link">
                Каталог
              </Link>
            </li>
            <li className="user-profile__item">
              <Link to={"/library"} className="user-profile__link">
                Моя библиотека
              </Link>
            </li>
            <hr />
            <li className="user-profile__item">
              <button
                className="user-profile__link user-profile__action"
                onClick={() => {
                  removeUserName();
                  navigate("/registration");
                }}
              >
                Выход
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
