import { Dispatch, ReactNode, Reducer, createContext, useReducer } from "react";
import { Stay } from "../data/Stay";

type ActionType = { type: "OPEN"; payload: Stay } | { type: "CLOSE" };

type InitialState = {
  open: boolean;
  data: Stay | null;
};

const initialState: InitialState = {
  open: false,
  data: null,
};

type ContextType = {
  state: InitialState;
  dispatch: Dispatch<ActionType>;
};

export const StayContext = createContext({} as ContextType);

const stayReducer: Reducer<InitialState, ActionType> = (state, action): InitialState => {
  switch (action.type) {
    case "OPEN":
      window.document.body.classList.add("overflow-y-hidden");
      return { ...state, open: true, data: action.payload };
    case "CLOSE":
      window.document.body.classList.remove("overflow-y-hidden");
      return { ...state, open: false, data: null };
    default:
      return state;
  }
};

type StayProviderProps = {
  children: ReactNode;
};

const StayProvider = ({ children }: StayProviderProps) => {
  const [state, dispatch] = useReducer(stayReducer, initialState);

  return <StayContext.Provider value={{ state, dispatch }}>{children}</StayContext.Provider>;
};

export default StayProvider;
