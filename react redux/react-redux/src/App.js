import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';

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

const mapStateToProps = (age) => {
  return {
    age: age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
