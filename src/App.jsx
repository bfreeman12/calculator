import "./assets/calculator.css";
import { useState } from "react";

function App() {
  const [clickedData, setClickedData] = useState("");

  const parseData = (data) => {
    const breakPoint = /[+\/*-]/g;
    const splitData = data.split(breakPoint).filter((val) => val !== "");

    if (splitData.length === 0) {
      return "Invalid data format";
    }

    let num1 = parseFloat(splitData[0]);
    let num2 = parseFloat(splitData[1]);

    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid data format";
    }

    if (data.startsWith("-") && splitData.length === 1) {
      return -num1;
    }

    const splitOperator = data.match(breakPoint);
    if (splitOperator && splitOperator.length > 0) {
      switch (splitOperator[0]) {
        case "+":
          return num1 + num2;

        case "-":
          return num1 - num2;

        case "*":
          return num1 * num2;

        case "/":
          return num1 / num2;

        default:
          return "Invalid operator";
      }
    } else {
      return num1;
    }
  };

  const handleClick = (value) => {
    setClickedData((prevData) => prevData + value);
  };

  const calculateAnswer = () => {
    const parsedData = parseData(clickedData);
    setClickedData(parsedData.toString());
  };

  const clearAll = () => {
    setClickedData("");
  };

  const clearLast = () => {
    setClickedData((prevData) => prevData.slice(0, -1));
  };

  const deleteUpToOperator = () => {
    const lastOperatorIndex = clickedData.search(/[+\/*-]/g);
    if (lastOperatorIndex !== -1) {
      setClickedData((prevData) => prevData.slice(0, lastOperatorIndex + 1));
    } else {
      setClickedData("");
    }
  };

  const makeNegative = () => {
    if (clickedData.startsWith("-")) {
      setClickedData((prevData) => prevData.replace("-", ""));
    } else if (clickedData !== "0" && clickedData !== "") {
      setClickedData((prevData) => "-" + prevData);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-screen" id="calculator-screen">
        {clickedData || "0"}
      </div>

      <div className="calculator-body">
        <div className="calculator-top-row">
          <button className="btn" onClick={deleteUpToOperator}>
            CE
          </button>
          <button className="btn" onClick={clearAll}>
            C
          </button>
          <button className="btn" onClick={clearLast}>
            DEL
          </button>
          <button className="btn" onClick={() => handleClick("/")}>
            /
          </button>
        </div>

        <div className="calculator-numbers">
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn" onClick={() => handleClick("*")}>
            *
          </button>
          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="btn" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn" onClick={() => handleClick("+")}>
            +
          </button>
          <button className="btn" onClick={makeNegative}>
            +/-
          </button>
          <button className="btn" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn" onClick={calculateAnswer}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
