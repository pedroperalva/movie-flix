"use client";

import Link from "next/link";
import { MainLogo } from "../Logos";
import { Button, useDisclosure } from "@chakra-ui/react";
import { DrawerMenu } from "./DrawerMenu";

export function DesktopNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className="h-14 w-full bg-black flex items-center px-3 justify-between">
      <Link href={"/"}>
        <MainLogo textSize="text-xl" />
      </Link>
      <Button
        className="cursor-pointer"
        bgColor={"red.600"}
        textColor={"white"}
        onClick={() => onOpen()}
      >
        Login
      </Button>
      <DrawerMenu onClose={onClose} isOpen={isOpen} />
    </nav>
  );
}
