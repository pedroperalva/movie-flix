import { createContext, useEffect, useState } from "react";

export const context = createContext<any>({});
export function UserContext({ children }: { children: React.ReactNode }) {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const existingToken = localStorage.getItem("token");
    const existingUser = localStorage.getItem("userData");
    setUserToken(existingToken || null);
    setUser(existingUser ? JSON.parse(existingUser) : null);
  }, []);

  return (
    <context.Provider value={{ user, setUser, userToken, setUserToken }}>
      {children}
    </context.Provider>
  );
}

export interface User {
  id: string;
  name: string;
  email: string;
}
