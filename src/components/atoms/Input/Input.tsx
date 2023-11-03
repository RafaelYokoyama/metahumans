import { UseFormRegisterReturn } from 'react-hook-form';
import FormError from '../FormError/FormError';

type IInputProps = {
  children?: React.ReactNode
  type?: string
  register?: UseFormRegisterReturn
};

function Input({ children, type, register }: IInputProps) {
  return (
    <label className="flex flex-col group h-16">
      {children}
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

      <FormError message={'teste'} icon='AlertTriangle' />
    </label>
  );
}

export default Input;
