import "./assets/calculator.css";
function App() {
  return (
    <div className="calculator-container">
      <div className="calculator-screen">Screen goes here</div>

      <div className="calculator-body">
        <div className="calculator-top-row">
          <button>CE</button>
          <button>C</button>
          <button>DEL</button>
          <button>/</button>
        </div>
        <div className="calculator-numbers">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>+/-</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
