import type { FunctionComponent } from 'react';

interface ButtonProps {
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => (
  <button
    className="bg-blue-500 m-2 p-2 hover:bg-blue-400 text-lg"
    onClick={onClick}
  >
    {children}
  </button>
);
