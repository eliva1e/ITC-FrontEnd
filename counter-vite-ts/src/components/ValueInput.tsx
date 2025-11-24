import { useState, type FormEvent } from 'react';
import { set, useCounterDispatch } from '../stores/counter';

export function ValueInput() {
  const dispatch = useCounterDispatch();
  const [value, setValue] = useState(0);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(set({ value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button type="submit">Set value</button>
    </form>
  );
}
