import Icon, { IconName } from "../Icon/Icon";
import React, { ButtonHTMLAttributes } from "react";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: IconName;
  iconSize?: number;
  className?: string;
};

function Button({ children, icon, iconSize, className, ...rest }: IButtonProps) {
  return (
    <button
      data-testid='form-button'
      className={`
        min-w-28
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
        ${className || ''}`}
      {...rest}
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
