import React, { ReactNode } from 'react';
import { inter } from '@lib/fonts';
import { cn } from '@lib/utils';
import styles from './count-icon.module.scss';

type CountIconProps = {
  iconElement: ReactNode;
  count: number;
  className?: string;
};

const CountIcon: React.FC<CountIconProps> = ({ iconElement, count, className }) => {
  return (
    <div className={cn(styles.countIconWrapper, className)}>
      {iconElement}
      <span className={cn('index_ellipse iu-d-flexcenter dark:!bg-neutral_00 dark:!text-neutral_07', inter.className)}>
        {count}
      </span>
    </div>
  );
};

export default CountIcon;
