import { UseFormRegisterReturn } from 'react-hook-form';
import FormError from '../FormError/FormError';

type IInputProps = {
  children?: React.ReactNode
  type?: string
  register?: UseFormRegisterReturn
};

function Input({ type, register }: IInputProps) {
  return (

    <input
      {...register}
      type={type}
      className="
        h-10
        bg-zinc-800
        rounded-lg
        p-2
        focus:border-2
        outline-none
        appearance-none
        "
    />


  );
}

export default Input;
