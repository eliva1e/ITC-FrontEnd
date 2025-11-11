import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from './stores/counter';
import ValueInput from './components/ValueInput';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  return (
    <div>
      <h1 className="counter">{value}</h1>
      <button className="big" onClick={() => dispatch(incremented())}>
        Increment
      </button>
      <button className="big" onClick={() => dispatch(decremented())}>
        Decrement
      </button>

      <ValueInput />
    </div>
  );
}

export default App;
