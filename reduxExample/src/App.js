import React, { useRef } from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, decrementByAmount, incrementByAmount, incrementAsync } from './counterSlice';

function App() {
  const amountRef = useRef();

  const count = useSelector(state => state.counter.value); // Agarro valor del estado
  const dispatch = useDispatch(); // Me permite alterar el estado

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <input ref={amountRef} />
      <button onClick={() => dispatch(decrementByAmount(amountRef.current.value))}>Decrement by amount</button>
      <button onClick={() => dispatch(incrementByAmount(amountRef.current.value))}>Increment by amount</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
    </>
  )
}

export default App;
