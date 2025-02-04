import { createContext, useState } from "react";

export const AppContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [profileToggle, setProfileToggle] = useState(false);
  const setTheProfileToggle = () => {
    setProfileToggle((prev) => !prev);
  };
  return (
    <AppContext.Provider value={{ profileToggle, setTheProfileToggle }}>
      {children}
    </AppContext.Provider>
  );
};
