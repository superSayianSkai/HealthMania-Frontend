import { createContext, useContext, useReducer } from "react";

//create a context to hold the state
export const ModelTypeContext = createContext({});

//create an inital state
const initialState = {
  modelType: "",
};

//i have to define the reducer function that will handle state transition
const reducer = (state, action) => {
  switch (action.type) {
    case "sleep AI":
    case "stress AI":
    case "calorieLevel":
    case "healthStatus":
    case "Diabetes AI":
      return { modelType: action.payload };
    default:
      throw new Error();
  }
};

// i have to create a component that provides the context
export const ModelTypeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ModelTypeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModelTypeContext.Provider>
  );
};

export const useModelTypeContext = () => {
  return useContext(ModelTypeContext);
};
