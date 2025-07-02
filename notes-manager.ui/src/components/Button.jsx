import React from 'react';

const Button = ({ children, onClick, color = 'green', className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-md transition';
  const colorStyles = {
    green: 'bg-green-500 text-white hover:bg-green-600',
    blue: 'bg-blue-500 text-white hover:bg-blue-600',
    red: 'bg-red-500 text-white hover:bg-red-600',
    white: 'bg-white text-green-600 hover:bg-green-100',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${colorStyles[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;