import { decremented, incremented, useCounterDispatch } from './stores/counter';
import { ValueInput } from './components/ValueInput';
import { Button } from './components/Button';
import { CounterValue } from './components/CounterValue';

export const App: React.FC = () => {
  const dispatch = useCounterDispatch();

  return (
    <div>
      <CounterValue />
      <Button onClick={() => dispatch(incremented())}>Increment</Button>
      <Button onClick={() => dispatch(decremented())}>Decrement</Button>
      <ValueInput />
    </div>
  );
};
