import { createContext, useContext } from "react";

export const UserContext = createContext<any>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used inside a UserProvider");
  }
  return context;
};
