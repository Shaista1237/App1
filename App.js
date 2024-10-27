import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
    } else if (num % 2 === 0) {
      setResult(`${num} is even`);
    } else {
      setResult(`${num} is odd`);
    }
  };

  return (
    <div className="App">
      <h1>Even or Odd Checker</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
