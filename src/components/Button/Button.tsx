import React, { ReactNode } from "react";

interface ButtonProps {
  fontSize?: number;
  children?: ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ fontSize, onClick, children }) => {
  return (
    <div
      style={{
        fontSize: `${fontSize}rem`,
      }}
      onClick={() => onClick()}
      className="button"
    >
      {children}
    </div>
  );
};

export default Button;
