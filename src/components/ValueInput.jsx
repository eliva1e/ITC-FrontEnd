import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../stores/counter';

function ValueInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(set({ value }))
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Set value</button>
    </form>
  );
}

export default ValueInput;
