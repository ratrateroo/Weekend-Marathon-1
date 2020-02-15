import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  return (
    <div className="App">
      <div>Age:<span></span></div>
      <button>Age Up</button>
      <button>Age Down</button>
    </div>
  );
}

export default App;
