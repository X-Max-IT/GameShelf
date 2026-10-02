import Icon from "../Icon/Icon";

function Button({
  children,
  disabled = false,
  className = "",
  size = "medium",
  icon,
  onClick,
  type = "button",
}) {
  const baseClass = "button";
  const sizeClass = size !== "medium" ? `${baseClass}--${size}` : "";
  const disabledClass = disabled ? `${baseClass}--disabled` : "";

  const classes = [baseClass, sizeClass, disabledClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      type={type}
    >
      {children}
      {icon && <Icon name={icon} className={`${baseClass}__icon`} />}
    </button>
  );
}

export default Button;
