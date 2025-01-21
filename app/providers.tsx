"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { UserContext } from "./context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserContext>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </UserContext>
  );
}
