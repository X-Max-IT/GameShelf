import ToggleTheme from "../../ui/ToggleTheme/ToggleTheme";
import UserProfile from "../../ui/UserProfile/UserProfile";

function Header() {
  return (
    <header>
      Header
      <ToggleTheme />
      <UserProfile />
      <hr />
    </header>
  );
}

export default Header;
