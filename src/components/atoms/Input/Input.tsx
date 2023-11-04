import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Icon from '../Icon/Icon';

type IInputProps = {
  children?: React.ReactNode;
  type?: string;
  register?: UseFormRegisterReturn;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: boolean;
  [key: string]: any;
};

function Input({ type, register, onChange, className, icon, ...rest }: IInputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute rounded-l-lg left-0 top-0 h-full w-10 flex items-center justify-center bg-black">
          <Icon name='SearchIcon' color='#fff' />
        </div>
      )}

      <input
        {...register}
        type={type}
        className={`
          h-10
          bg-zinc-800
          rounded-lg
          p-2
          ${icon ? 'pl-10 ml-2' : ''}
          focus:border-2
          outline-none
          appearance-none
          text-b
          ${className || ''}
        `}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
