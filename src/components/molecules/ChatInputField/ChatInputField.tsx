import React from 'react';
import FormError from '@/components/atoms/FormError/FormError';
import Input from '@/components/atoms/Input/Input';
import Label from '@/components/atoms/Label/Label';
import { UseFormRegisterReturn } from 'react-hook-form';

type ChatInputFieldProps = {
  label: string;
  errorMessage: string;
  register?: UseFormRegisterReturn
};


const ChatInputField: React.FC<ChatInputFieldProps> = ({ label, errorMessage, register }) => {
  return (
    <div>
      <Label label={label} />
      <Input register={register} />
      {errorMessage &&
        <FormError message={errorMessage} icon='AlertTriangle' />
      }
    </div>
  );
};

export default ChatInputField;
