import React from 'react';
import { connect } from 'react-redux';
import { ageUp, ageDown } from "../redux/actions";

const Buttons = (ageUp, ageDown) => {   

    const addAgeHandler = () => {
        ageUp.ageUp();
    };

    const subtractAgeHandler = () => {
        ageDown.ageDown();
    };

    return (
        <div>
        <button onClick={addAgeHandler}>Age Up</button>
        <button onClick={subtractAgeHandler}>Age Down</button>
        </div>
    );
  };
  export default connect(ageUp, ageDown)(Buttons);