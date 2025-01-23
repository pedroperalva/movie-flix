import { context } from "@/app/context";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { useContext } from "react";
import { logout } from "@/app/utils/logout";

export function DrawerProfile({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { user, setUser, setUserToken } = useContext(context);

  const logoutUser = () => {
    logout();
    setUser(null);
    setUserToken(null);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={"#000"} textColor={"#fff"}>
        <DrawerCloseButton />
        <DrawerHeader>Perfil</DrawerHeader>
        <DrawerBody className="flex flex-col items-center justify-between text-white">
          <div className="w-full flex flex-col items-center gap-3">
            <Avatar size={"2xl"} />
            <div className="w-full">
              <FormLabel>Email</FormLabel>
              <Input value={user?.email} isDisabled mb={"15px"} />
              <FormLabel>Nome</FormLabel>
              <Input value={user?.name} isDisabled mb={"15px"} />
              <Link href="/favorites">
                <Button>Meus Favoritos</Button>
              </Link>
            </div>
          </div>
          <Button
            className="self-end"
            bgColor={"primary"}
            textColor={"white"}
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
