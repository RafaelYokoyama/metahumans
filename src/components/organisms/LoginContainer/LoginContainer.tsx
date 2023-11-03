"use client"
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import ChatInputField from '@/components/molecules/ChatInputField/ChatInputField';
import Button from '@/components/atoms/Button/Button';

type IInputs = {
  login: string;
  password: string;
};

function LoginContainer() {
  const { register, handleSubmit, formState: { errors } } = useForm<IInputs>();
  const { setUser } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<IInputs> = (data: IInputs) => {
    setUser({ username: data.login, password: data.password });
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  p-4 gap-6 text-gray-400">
      <ChatInputField
        register={register('login', { required: true })}
        label='Nome de Usuario'
        errorMessage={errors.login && 'Usuário é obrigatório' || ''}
      />
      <ChatInputField
        register={register('password', { required: true })}
        label='Senha'
        errorMessage={errors.password && 'Senha é obrigatório' || ''}
      />
      <Button type="submit">Entrar</Button>
    </form>
  );
};

export default LoginContainer;
