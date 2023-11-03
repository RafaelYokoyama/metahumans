import Icon, { IconName } from "../Icon/Icon";

type IButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  icon?: IconName;
  iconSize?: number;
};

function Button({ children, type, icon, iconSize }: IButtonProps) {
  return (
    <button
      type={type}
      className="
      w-28
      text-white
      font-bold
      h-10
      rounded-xl
      hover:opacity-80
      active:opacity-100
      my-2
      bg-[#3a3caf]
      flex
      items-center
      justify-center
      gap-2
      "
    >
      {icon && (
        <span>
          <Icon name={icon} size={iconSize} />
        </span>
      )}
      <p>{children}</p>
    </button>
  );
}

export default Button;
