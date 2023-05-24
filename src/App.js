import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setdata] = useState("");

  const handleClick = (value) => {
    setdata(data + value);
  };

  const calculate = () => {
    try {
      setdata(eval(data).toString());
    } catch (error) {
      setdata("Error");
    }
  };

  const clear = () => {
    setdata("");
  };

  return (
    <div className="calculator">
      <div className="buttons">
        <input type="text" value={data} readOnly />
        <div className="row">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="numeric" onClick={() => handleClick("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="numeric" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="numeric" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={calculate}>
            =
          </button>
          <button className="numeric" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button className="clear" onClick={clear}>
            AC
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
