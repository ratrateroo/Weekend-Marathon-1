import React, { useState } from 'react';
import { connect } from 'react-redux';
import CurrentAge from './components/CurrentAge';
import Buttons from './components/Buttons';


const Age = ({value}) => {
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
      <CurrentAge value={value}/>
      <Buttons />
    </div>
  );
  
};

const mapStateToProps = state => {
    const {value} = state;

    return {value};
}

export default connect(mapStateToProps)(Age);



  