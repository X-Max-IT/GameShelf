import search from "../../../assets/icons/search.svg?react";
import calendar from "../../../assets/icons/calendar.svg?react";
import catalog from "../../../assets/icons/catalog.svg?react";
import dark from "../../../assets/icons/dark_theme.svg?react";
import fire from "../../../assets/icons/fire.svg?react";
import home from "../../../assets/icons/home-header.svg?react";
import jostik from "../../../assets/icons/joystick.svg?react";
import library from "../../../assets/icons/library.svg?react";
import sun from "../../../assets/icons/sun_theme.svg?react";
import user from "../../../assets/icons/user.svg?react";
import arrow_profile from "../../../assets/icons/arrow-profile.svg?react";

const icons = {
  search,
  calendar,
  catalog,
  dark,
  fire,
  home,
  jostik,
  library,
  sun,
  user,
  arrow_profile,
};

export default function Icon({ name, className = "" }) {
  const SvgComponent = icons[name];
  if (!SvgComponent) {
    console.warn(`Иконка ${name} не найдена`);
    return null;
  }
  return <SvgComponent className={`icon ${className}`} />;
}
