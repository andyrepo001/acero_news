export default function Icon({ icon, iconSize = 16 }) {
  if (!icon) return;

  const CurrentIcon = icon;
  return <CurrentIcon size={iconSize} />;
}
