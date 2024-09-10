import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
  Link,
  Show,
} from "@chakra-ui/react";
import { useState } from "react";
import { LoginForm } from "../Forms";
import { RegisterForm } from "../Forms/RegisterForm";

export function DrawerMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formType, setFormType] = useState<"login" | "register" | "forgotPass">(
    "login"
  );
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {formType === "login"
            ? "Login"
            : formType === "register"
            ? "Registrar"
            : "Recuperar Senha"}
        </DrawerHeader>
        <DrawerBody>
          <LoginForm formType={formType} setFormType={setFormType} />
          <RegisterForm formType={formType} setFormType={setFormType} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
