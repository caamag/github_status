import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

interface UserContextProps {
  userName: string;
  saveUserName: (value: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");

  const saveUserName = (name: string) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, saveUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
