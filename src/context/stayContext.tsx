import { Dispatch, ReactNode, Reducer, createContext, useReducer } from "react";

type ActionType = { type: "OPEN"; payload: Record<string, string> } | { type: "CLOSE" };

type InitialState = {
  open: boolean;
  data: Record<string, string> | null;
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
