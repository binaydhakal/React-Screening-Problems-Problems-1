import { useState, useEffect, useContext } from "react";
import { StateContext } from "./App";
import "./App.css";

const ButtomProblem = () => {
  const [check, setCheck] = useState(0); // for checking if same color is generated more than once sequentially.
  const [colors, setColors] = useState("");
  const { colorList, dispatch } = useContext(StateContext);

  useEffect(() => {
    dispatch({
      type: "ADD__COLOR",
      colour: colors,
    });
  }, [check]); // running useEffect whenever the check changes means whenever the button is pressed.
  //if we run useEffect for change in colors then when same color is generated in a sequence for more than once then
  //only once the color will be recorded.

  const handleClick = () => {
    setCheck(check + 1); //increases whenever the button is pressed and useeffect runs.
    document.getElementById("btn").style.color = "white";
    const color = ["red", "green", "blue", "black", "orange"];
    const min = 0;
    const max = 4;
    const rand = min + Math.random() * (max - min);
    if (colors === "blue") {
      document.getElementById("btn").style.backgroundColor = `${color[1]}`;
      setColors(color[1]);
    } else {
      document.getElementById("btn").style.backgroundColor = `${
        color[rand.toFixed()]
      }`;
      setColors(color[rand.toFixed()]);
    }
  };

  return (
    <div className="ButtomProblem" style={{ margin: "50px" }}>
      <div
        className="button__problems"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
};

export default ButtomProblem;
