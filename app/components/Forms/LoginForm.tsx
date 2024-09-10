import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export function LoginForm({
  formType,
  setFormType,
}: {
  formType: string;
  setFormType: Dispatch<SetStateAction<"login" | "register" | "forgotPass">>;
}) {
  return (
    <FormControl
      className={`${formType === "login" ? "fadeInForm" : "hidden"}`}
    >
      <FormLabel>Email</FormLabel>
      <Input type="email" />
      <FormLabel className="mt-2">Senha</FormLabel>
      <Input type="password" />
      <p
        className="cursor-pointer text-blue-500 text-end text-sm font-semibold"
        onClick={() => setFormType("forgotPass")}
      >
        Esqueceu a senha?
      </p>
      <Button className="w-full mt-6" bgColor={"red.600"} textColor={"white"}>
        Fazer Login
      </Button>
      <p className="mt-10 text-center">
        Não tem uma conta?{" "}
        <a
          className="cursor-pointer text-blue-500 font-semibold"
          onClick={() => setFormType("register")}
        >
          Registrar
        </a>
      </p>
    </FormControl>
  );
}
