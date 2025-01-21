import { context } from "@/app/context";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
} from "@chakra-ui/react";
import { useContext } from "react";

export function DrawerProfile({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { user } = useContext(context);
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Perfil</DrawerHeader>
        <DrawerBody className="flex flex-col items-center justify-between gap-3">
          <div>
            <Avatar size={"2xl"} />
            <p className="text-black self-start">Nome: {user?.name}</p>
            <p className="text-black self-start">Email: {user?.email}</p>
          </div>
          <button className="bg-red-600 text-white p-2 rounded-md self-end">
            Logout
          </button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
