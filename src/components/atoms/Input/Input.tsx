import React, { useState } from 'react';
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
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      {icon && (
        <div className="absolute rounded-l-lg left-0 top-0 h-full w-10 flex items-center justify-center bg-black">
          <Icon name='SearchIcon' color='#fff' />
        </div>
      )}

      <div className="relative">
        <input
          {...register}
          type={showPassword ? 'text' : type}
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
        {type === 'password' && (
          <div
            className="absolute right-0 top-0 h-full w-10 flex items-center justify-center cursor-pointer"
            onClick={toggleShowPassword}
          >
            <Icon name={showPassword ? 'EyeOffIcon' : 'EyeIcon'} color='#fff' />
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
