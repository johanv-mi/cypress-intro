import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
}) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
