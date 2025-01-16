
import React, { useState } from 'react';
import '../style/cal.css';

function Calculator() {
	const [num1, setNum1] = useState(0);
	const [num2, setNum2] = useState(0);
	const [result, setResult] = useState(0);

	const Addition = () => setResult(Number(num1) + Number(num2));
	const Subtraction = () => setResult(Number(num1) - Number(num2));
	const Multiplication = () => setResult(Number(num1) * Number(num2));

	return (
		<div className="calculator">
			<input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
			<input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
			<button onClick={Addition}>Add</button>
			<button onClick={Subtraction}>Subtract</button>
			<button onClick={Multiplication}>Multiply</button>
			<h2>Result: {result}</h2>
		</div>
	);
}

export default Calculator;

