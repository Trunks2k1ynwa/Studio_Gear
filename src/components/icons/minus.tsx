import React from 'react';

type MinusProps = {
  onClick?: () => void;
};

export const Minus = ({ onClick }: MinusProps) => {
  return (
    <svg onClick={onClick} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.22925 8H12.5626'
        stroke='#121212'
        stroke-width='0.75'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
