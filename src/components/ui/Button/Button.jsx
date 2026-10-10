import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

function Button({
  children,
  disabled = false,
  className = "",
  size = "medium", //* small, medium, large
  icon,
  onClick,
  type = "button",
  to,
}) {
  const baseClass = "button";
  const sizeClass = size !== "medium" ? `${baseClass}--${size}` : "";
  const disabledClass = disabled ? `${baseClass}--disabled` : "";
  const iconClass = icon && !children ? `${baseClass}--icon` : "";

  const classes = [baseClass, sizeClass, disabledClass, iconClass, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className={`${baseClass}__icon`} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}

export default Button;
