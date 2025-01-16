import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleAdd = () => setCount(Number(num1) + Number(num2));
  const handleSub = () => setCount(Number(num1) - Number(num2));
  const handleMul = () => setCount(Number(num1) * Number(num2));
  const handleDiv = () => {
    if (Number(num2) !== 0) {
      setCount(Number(num1) / Number(num2));
    } else {
      alert("Cannot divide by zero");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The result is: ${count}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="num1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="num2"
        />
        <button type="button" onClick={handleAdd}>
          +
        </button>
        <button type="button" onClick={handleSub}>
          -
        </button>
        <button type="button" onClick={handleMul}>
          *
        </button>
        <button type="button" onClick={handleDiv}>
          /
        </button>
        <button type="submit">Submit</button>
      </form>
      <div>Result: {count}</div>
    </>
  );
}

export default App;
