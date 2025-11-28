import { useCounterSelector } from '../stores/counter';

export const CounterValue: React.FC = () => {
  const value = useCounterSelector((state) => state.value);

  return <h1 className="counter">{value}</h1>;
};
