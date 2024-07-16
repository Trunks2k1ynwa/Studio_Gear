import React from 'react';

type CloseIconProps = {
  className?: string;
  onClick?: () => void;
};

const CloseIcon: React.FC<CloseIconProps> = props => {
  return (
    <span className={props.className} onClick={props.onClick}>
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.4419 5.44194C15.686 5.19786 15.686 4.80214 15.4419 4.55806C15.1979 4.31398 14.8021 4.31398 14.5581 4.55806L10 9.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L9.11612 10L4.55806 14.5581C4.31398 14.8021 4.31398 15.1979 4.55806 15.4419C4.80214 15.686 5.19786 15.686 5.44194 15.4419L10 10.8839L14.5581 15.4419C14.8021 15.686 15.1979 15.686 15.4419 15.4419C15.686 15.1979 15.686 14.8021 15.4419 14.5581L10.8839 10L15.4419 5.44194Z'
          fill='currentColor'
        />
      </svg>
    </span>
  );
};

export default CloseIcon;
