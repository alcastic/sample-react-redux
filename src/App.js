import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action'

function App() {
  let counter = useSelector(state => state.counterReducer);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Be Original!</h1>
      <p>Counter={counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
