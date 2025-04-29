import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult("Cannot divide by zero");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: "5px" }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: "5px" }}
      />
      <div style={{ margin: "10px" }}>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
  );
}

export default Calculator;
