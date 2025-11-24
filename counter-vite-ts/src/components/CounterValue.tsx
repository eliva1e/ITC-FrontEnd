import { useCounterSelector } from '../stores/counter';

export function CounterValue() {
  const value = useCounterSelector((state) => state.value);

  return <h1 className="counter">{value}</h1>;
}
