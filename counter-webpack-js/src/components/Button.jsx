import React from 'react';

// eslint-disable-next-line react/prop-types
export function Button({ children, onClick }) {
  return (
    <button className="big-btn" onClick={onClick}>
      {children}
    </button>
  );
}
