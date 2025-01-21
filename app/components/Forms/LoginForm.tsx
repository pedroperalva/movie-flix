import useLogin from "@/app/hooks/loginHook";
import { Input, Button, FormLabel, Spinner } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export function LoginForm({
  formType,
  setFormType,
  onClose,
}: {
  formType: string;
  setFormType: Dispatch<SetStateAction<"login" | "register" | "forgotPass">>;
  onClose: () => void;
}) {
  const { login, loading, error } = useLogin();

  const submitLogin = (e: any) => {
    e.preventDefault();
    login(e.target[0].value, e.target[1].value)
      .then(() => {
        console.log("oi");
        onClose();
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <form
      className={`${formType === "login" ? "fadeInForm" : "hidden"}`}
      onSubmit={(e: any) => submitLogin(e)}
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
      <Button
        className="w-full mt-6"
        bgColor={"red.600"}
        textColor={"white"}
        type="submit"
      >
        {loading ? <Spinner /> : "Fazer Login"}
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
    </form>
  );
}
