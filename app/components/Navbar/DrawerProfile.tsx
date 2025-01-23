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
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Perfil</DrawerHeader>
        <DrawerBody className="flex flex-col items-center justify-between">
          <div className="w-full flex flex-col items-center gap-3">
            <Avatar size={"2xl"} />
            <div className="w-full">
              <FormLabel>Email</FormLabel>
              <Input value={user?.email} isDisabled />
              <FormLabel>Nome</FormLabel>
              <Input value={user?.name} isDisabled />
              <Link href="/favorites">
                <Button>Favorites</Button>
              </Link>
            </div>
          </div>
          <Button
            className="self-end"
            bgColor={"red.600"}
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
