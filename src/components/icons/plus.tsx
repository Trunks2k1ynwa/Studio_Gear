import React from 'react';

type PlusProps = {
  onClick?: () => void;
};

export const Plus = ({ onClick }: PlusProps) => {
  return (
    <svg onClick={onClick} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.375 3.33301C8.375 3.1259 8.20711 2.95801 8 2.95801C7.79289 2.95801 7.625 3.1259 7.625 3.33301V7.62469H3.33325C3.12615 7.62469 2.95825 7.79259 2.95825 7.99969C2.95825 8.2068 3.12615 8.37469 3.33325 8.37469H7.625V12.6663C7.625 12.8734 7.79289 13.0413 8 13.0413C8.20711 13.0413 8.375 12.8734 8.375 12.6663V8.37469H12.6666C12.8737 8.37469 13.0416 8.2068 13.0416 7.99969C13.0416 7.79259 12.8737 7.62469 12.6666 7.62469H8.375V3.33301Z'
        fill='currentColor'
      />
    </svg>
  );
};
