import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './stores/counter';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(incremented())}>Increment by 1</button>
      <button onClick={() => dispatch(decremented())}>Decrement by 1</button>
    </div>
  );
}

export default App;
