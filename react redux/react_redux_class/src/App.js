import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <h2>History</h2>
        <div>
          <ul>
            {
              this.props.history.map(el => (
                <li 
                  onClick={() => {
                    this.props.onDeleteItem(el.id)
                  }} 
                  className="historyItem" 
                  key={el.id}>
                  {el.age} 
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDeleteItem: (id) => dispatch({type: "DEL_ITEM", key: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
