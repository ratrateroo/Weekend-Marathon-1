import React, { useState } from 'react';
import { connect } from 'react-redux';


const Age = () => {
    const [age, setAge] = useState(30);
    const ageUpHandler = () => {
      setAge(age + 1);
    }
  
    const ageDownHandler = () => {
      setAge(age - 1);
    }

  return (
    <div>
      <h1>React with Redux</h1>
      <CurrentAge />
      <Buttons />
    </div>
  );
  
};

export default Age;

  const [age, setAge] = useState(30);
  const ageUpHandler = () => {
    setAge(age + 1);
  }

  const ageDownHandler = () => {
    setAge(age - 1);
  }



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

