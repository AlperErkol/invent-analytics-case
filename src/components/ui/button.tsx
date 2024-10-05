import React, { MouseEvent } from "react";
import classNames from "classnames";

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "min-w-24 h-10 font-semibold flex text-sm gap-2 items-center justify-center bg-black rounded-md text-white",
        { "flex-row-reverse": iconPosition === "right", disabled: disabled }
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
