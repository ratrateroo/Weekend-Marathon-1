import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(30);
  return (
    <div className="App">
      <div>Age: <span>{age}</span></div>
      <button onClick={() => setAge(age + 1)}>Age Up</button>
      <button onClick={() => setAge(age - 1)}>Age Down</button>
    </div>
  );
}

export default App;
