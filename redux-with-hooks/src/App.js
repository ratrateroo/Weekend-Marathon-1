import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store = { store }>
      <div className = "main">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
