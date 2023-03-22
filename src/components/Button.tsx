import React, { FC, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
