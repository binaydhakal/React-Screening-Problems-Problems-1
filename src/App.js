import { useState, useEffect, useReducer, createContext } from "react";
import "./App.css";
import ButtomProblem from "./ButtomProblem";
import reducer, { initialState } from "./reducer";

export const StateContext = createContext();

// export const initialState = {
//   colorList: [],
// };

// export const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "ADD__COLOR":
//       return {
//         ...state,
//         colorList: [...state.colorList, action.colour],
//       };
//     default:
//       return state;
//   }
// };

function App() {
  // const [colors, setColors] = useState("");

  // // const [{ colorList }, dispatch] = useStateValue();

  const [{ colorList }, dispatch] = useReducer(reducer, initialState);

  // const handleClick = () => {
  //   document.getElementById("btn").style.color = "white";
  //   const color = ["red", "green", "blue", "black", "orange"];
  //   const min = 0;
  //   const max = 4;
  //   const rand = min + Math.random() * (max - min);
  //   if (colors === "blue") {
  //     console.log("yeha ta aaye haiii");
  //     document.getElementById("btn").style.backgroundColor = `${color[1]}`;
  //     setColors(color[1]);
  //   } else {
  //     document.getElementById("btn").style.backgroundColor = `${
  //       color[rand.toFixed()]
  //     }`;
  //     setColors(color[rand.toFixed()]);
  //   }
  //   console.log(colors);
  //   dispatch({
  //     type: "ADD__COLOR",
  //     colour: colors,
  //   });
  // };

  return (
    <StateContext.Provider value={{ colorList, dispatch }}>
      {/* <div className="App">
        <div className="button__problems">
          <button id="btn" onClick={handleClick}>
            Click Me
          </button>
          <div>
            {colorList.map((item) => (
              <div style={{ color: `${item}`, display: "inline-block" }}>
                {item},
              </div>
            ))}
          </div>
          {colors}
        </div>
      </div> */}

      <ButtomProblem />
    </StateContext.Provider>
  );
}

export default App;
