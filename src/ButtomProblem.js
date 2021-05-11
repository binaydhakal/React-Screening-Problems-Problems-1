import {
  useState,
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import { StateContext } from "./App";
import "./App.css";
import reducer, { initialState } from "./reducer";

function ButtomProblem() {
  const [check, setCheck] = useState(0);
  const [colors, setColors] = useState("");
  const { colorList, dispatch } = useContext(StateContext);

  useEffect(() => {
    dispatch({
      type: "ADD__COLOR",
      colour: colors,
    });
  }, [check]);

  const handleClick = () => {
    setCheck(check + 1);
    document.getElementById("btn").style.color = "white";
    const color = ["red", "green", "blue", "black", "orange"];
    const min = 0;
    const max = 4;
    const rand = min + Math.random() * (max - min);
    if (colors === "blue") {
      console.log("yeha ta aaye haiii");
      document.getElementById("btn").style.backgroundColor = `${color[1]}`;
      setColors(color[1]);
    } else {
      console.log("aayena");
      document.getElementById("btn").style.backgroundColor = `${
        color[rand.toFixed()]
      }`;
      setColors(color[rand.toFixed()]);
    }
    console.log(colors);
    console.log(colorList);
  };

  return (
    <div className="ButtomProblem">
      <div className="button__problems">
        <button id="btn" onClick={handleClick}>
          Click Me
        </button>
        <div>
          {colors &&
            colorList.map((item) => (
              <div style={{ color: `${item}`, display: "inline-block" }}>
                {item},
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ButtomProblem;
