'use client';
import * as React from 'react';
import EyeIcon from '@components/icons/eye';
import { cn } from '@lib/utils';
import { EyeClosedIcon } from '@radix-ui/react-icons';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  stateIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [typeInput, setTypeInput] = React.useState(type);
  if (type !== 'password')
    return (
      <input
        type={typeInput}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  return (
    <div className='relative'>
      <input
        type={typeInput}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {type === 'password' && typeInput === 'text' && (
        <EyeIcon onClick={() => setTypeInput('password')} className='absolute right-0 top-0 cursor-pointer' />
      )}
      {type === 'password' && typeInput === 'password' && (
        <EyeClosedIcon
          onClick={() => setTypeInput('text')}
          className='absolute right-0 top-0 cursor-pointer'
          height={24}
          width={24}
        />
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
