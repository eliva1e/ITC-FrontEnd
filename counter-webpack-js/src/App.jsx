import React from 'react';
import { useDispatch } from 'react-redux';
import { decremented, incremented } from './stores/counter';
import { ValueInput } from './components/ValueInput';
import { Button } from './components/Button';
import { CounterValue } from './components/CounterValue';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <CounterValue />
      <Button onClick={() => dispatch(incremented())}>Increment</Button>
      <Button onClick={() => dispatch(decremented())}>Decrement</Button>

      <ValueInput />
    </div>
  );
}

export default App;
