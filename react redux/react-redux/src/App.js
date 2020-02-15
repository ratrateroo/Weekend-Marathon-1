import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(30);
  const ageUpHandler = () => {
    setAge(age + 1);
  }

  const ageDownHandler = () => {
    setAge(age - 1);
  }
  return (
    <div className="App">
      <div>Age: <span>{age}</span></div>
      <button onClick={ ageUpHandler }>Age Up</button>
      <button onClick={ ageDownHandler }>Age Down</button>
    </div>
  );
}

export default App;
