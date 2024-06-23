import styles from "./button.module.css";
import Icon from "../icon/icon";

export default function Button({
  buttonIcon,
  label,
  buttonType = "button",
  variant = "primary",
  ariaLabel,
  action,
}) {
  const variants = {
    variant: {
      transparent: styles.transparent,
      primary: styles.primary,
    },
  };

  return (
    <button
      aria-label={ariaLabel}
      type={buttonType}
      className={`${styles.button} ${variants.variant[variant]}`}
      onClick={action}
    >
      {label && <span>{label}</span>}
      {buttonIcon && <Icon icon={buttonIcon} />}
    </button>
  );
}
