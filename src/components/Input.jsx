import React from 'react';

// eslint-disable-next-line react/prop-types
function Input({ onChange, value }) {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
