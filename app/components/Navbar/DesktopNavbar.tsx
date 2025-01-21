"use client";

import Link from "next/link";
import { MainLogo } from "../Logos";
import { Avatar, Button, useDisclosure } from "@chakra-ui/react";
import { DrawerMenu } from "./DrawerMenu";
import { useContext } from "react";
import { context } from "@/app/context";
import { DrawerProfile } from "./DrawerProfile";

export function DesktopNavbar() {
  const formDisclosure = useDisclosure();
  const profileDisclosure = useDisclosure();
  const { userToken } = useContext(context);

  return (
    <nav className="h-16 w-full bg-black flex items-center px-3 justify-between">
      <Link href={"/"}>
        <MainLogo textSize="text-xl" />
      </Link>
      {userToken ? (
        <Avatar size={"md"} onClick={() => profileDisclosure.onOpen()} />
      ) : (
        <Button
          className="cursor-pointer"
          bgColor={"red.600"}
          textColor={"white"}
          onClick={() => formDisclosure.onOpen()}
        >
          Entrar
        </Button>
      )}
      <DrawerMenu
        onClose={formDisclosure.onClose}
        isOpen={formDisclosure.isOpen}
      />
      <DrawerProfile
        onClose={profileDisclosure.onClose}
        isOpen={profileDisclosure.isOpen}
      />
    </nav>
  );
}
