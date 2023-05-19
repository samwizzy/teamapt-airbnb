import { Dispatch, ReactNode, Reducer, createContext, useReducer } from "react";

type ActionType =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "TOGGLE" }
  | { type: "OPEN_DETAIL"; payload?: Record<string, string> }
  | { type: "CLOSE_DETAIL"; payload?: null };

type InitialState = {
  open: boolean;
  data: string[];
};

const initialState: InitialState = {
  open: false,
  data: [],
};

type ContextType = {
  state: InitialState;
  dispatch: Dispatch<ActionType>;
};

export const FilterContext = createContext({} as ContextType);

const filterReducer: Reducer<InitialState, ActionType> = (state, action): InitialState => {
  switch (action.type) {
    case "OPEN":
      window.document.body.classList.add("overflow-y-hidden");
      return { ...state, open: true };
    case "CLOSE":
      window.document.body.classList.remove("overflow-y-hidden");
      return { ...state, open: false };
    case "TOGGLE":
      if (state.open) {
        window.document.body.classList.remove("overflow-y-hidden");
      } else {
        window.document.body.classList.add("overflow-y-hidden");
      }

      return { ...state, open: !state.open };
    default:
      return state;
  }
};

type FilterProviderProps = {
  children: ReactNode;
};

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
