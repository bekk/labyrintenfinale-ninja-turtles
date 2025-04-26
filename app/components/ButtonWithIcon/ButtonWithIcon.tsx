type Props = {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPlacement?: "left" | "right";
  className?: string;
};

export function ButtonWithIcon({
  text,
  onClick,
  icon,
  iconPlacement = "left",
  className,
}: Props) {
  return (
    <button
      className={`font-bold py-2 px-3 rounded inline-flex items-center cursor-pointer gap-2 ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      {iconPlacement === "left" && icon}
      <span>{text}</span>
      {iconPlacement === "right" && icon}
    </button>
  );
}
