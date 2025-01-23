"use client";

import {
  Input,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "./validators";
import { api2 } from "@/app/utils/api";

export function RegisterForm({
  formType,
  setFormType,
}: {
  formType: string;
  setFormType: Dispatch<SetStateAction<"login" | "register" | "forgotPass">>;
}) {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      await api2.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      toast({
        description: "Usuário registrado com sucesso!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error: any) {
      toast({
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <form
      className={`${formType === "register" ? "fadeInForm" : "hidden"}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={!!errors.name} mb={4}>
        <FormLabel>Nome</FormLabel>
        <Input type="text" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email} mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...register("email")} />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password} mb={4}>
        <FormLabel>Senha</FormLabel>
        <Input type="password" {...register("password")} />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.confirmPassword} mb={4}>
        <FormLabel>Confirmar Senha</FormLabel>
        <Input type="password" {...register("confirmPassword")} />
        <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        className="w-full mt-6"
        bgColor={"primary"}
        textColor={"white"}
      >
        Registrar
      </Button>

      <p className="mt-10 text-center">
        Já tem uma conta?{" "}
        <a
          className="cursor-pointer text-blue-500 font-semibold"
          onClick={() => setFormType("login")}
        >
          Fazer Login
        </a>
      </p>
    </form>
  );
}
