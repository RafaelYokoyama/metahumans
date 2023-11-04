"use client";
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import ChatInputField from "@/components/molecules/ChatInputField/ChatInputField";
import Button from "@/components/atoms/Button/Button";

type IInputs = {
  login: string;
  password: string;
};

function LoginContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();
  const { setUser } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IInputs> = async (data: IInputs) => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUser({ username: data.login, password: data.password });
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col  p-4 text-gray-400">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-5 ">
        <ChatInputField
          register={register("login", { required: true })}
          label="Nome de Usuario"
          errorMessage={(errors.login && "Usuário é obrigatório") || ""}
        />
        <ChatInputField
          type='password'
          register={register("password", { required: true })}
          label="Senha"
          errorMessage={(errors.password && "Senha é obrigatório") || ""}
        />
        <Button type="submit">{isLoading ? "Entrando..." : "Entrar"}</Button>
      </form>

      <Button onClick={handleGuestLogin} className="bg-slate-700">
        Entrar como convidado
      </Button>
    </div>
  );
}

export default LoginContainer;
