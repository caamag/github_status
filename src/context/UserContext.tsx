import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { UserProps } from "../@types/user";

interface UserContextProps {
  gitUser: UserProps | undefined;
  saveUser: (user: UserProps) => void;
  resetUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [gitUser, setGitUser] = useState<UserProps | undefined>();

  const saveUser = (user: UserProps) => {
    setGitUser(user);
  };

  const resetUser = () => {
    setGitUser(undefined);
  };

  return (
    <UserContext.Provider value={{ gitUser, saveUser, resetUser }}>
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
