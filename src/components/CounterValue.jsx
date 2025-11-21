import React from 'react';
import { useSelector } from 'react-redux';

function CounterValue() {
  const value = useSelector((state) => state.value);

  return <h1 className="counter">{value}</h1>;
}

export default CounterValue;
