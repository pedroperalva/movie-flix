import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export function RegisterForm({
  formType,
  setFormType,
}: {
  formType: string;
  setFormType: Dispatch<SetStateAction<"login" | "register" | "forgotPass">>;
}) {
  return (
    <FormControl
      className={`${formType === "register" ? "fadeInForm" : "hidden"}`}
    >
      <FormLabel>Nome</FormLabel>
      <Input type="text" />
      <FormLabel className="mt-2">Email</FormLabel>
      <Input type="email" />
      <FormLabel className="mt-2">Senha</FormLabel>
      <Input type="password" />
      <FormLabel className="mt-2">Confirmar Senha</FormLabel>
      <Input type="password" />
      <Button className="w-full mt-6" bgColor={"red.600"} textColor={"white"}>
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
    </FormControl>
  );
}
