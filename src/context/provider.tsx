import { ReactNode } from "react";
import FilterProvider from "./filterContext";
import StayProvider from "./stayContext";

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StayProvider>
      <FilterProvider>{children}</FilterProvider>
    </StayProvider>
  );
};

export default AppProvider;
