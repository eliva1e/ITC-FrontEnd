import React from 'react';

// eslint-disable-next-line react/prop-types
export function Input({ onChange, value }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
    />
  );
}
