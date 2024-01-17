// Button.js
import React from 'react';

interface ButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  color : 'primary' | 'secondary' ;
}

const Button = ({ text, size = 'medium' ,color='primary'}: ButtonProps) => {
  // Define sizes based on Tailwind CSS classes
  const sizes = {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };
  const colors = {
    primary: 'bg-bg-primary',
    secondary: 'bg-bg-secondary'
  }

  return (
    <button className={`${colors[color]} text-white rounded ${sizes[size]} cursor-pointer w-full`}>
      {text}
    </button>
  );
};

export default Button;
