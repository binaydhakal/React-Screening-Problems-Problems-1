import { useState, useEffect, useReducer, createContext } from "react";
import "./App.css";
import ButtomProblem from "./ButtomProblem";
import reducer, { initialState } from "./reducer";

export const StateContext = createContext();

const App = () => {
  const [{ colorList }, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ colorList, dispatch }}>
      <ButtomProblem />
    </StateContext.Provider>
  );
};

export default App;
