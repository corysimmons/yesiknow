import React from 'react';
import { StateInspector, useReducer } from "reinspect"

import './App.css';

const appReducer = (state, { type, payload = null }) => {
  switch (type) {
    case 'increment':
      return {
        ...state,
        count: payload ? state.count + payload : state.count + 1
      }
    case 'decrement':
      return {
        ...state,
        count: payload ? state.count - payload : state.count - 1
      }
    default:
      return state
  }
}

const initialState = {
  count: 0
}

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState, state => state, 'src\\App')
  return (
    <div className="App">
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>INC by 5</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>DEC</button>
    </div>
  );
}

function WrappedInInspector() {
  return (
    <StateInspector name="App">
      <App />
    </StateInspector>
  )
}

export default WrappedInInspector;
