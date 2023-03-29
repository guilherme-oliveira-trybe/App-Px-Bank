import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ children, type }) {
  return (
    <button type={ type }>
      {children}
    </button>
  );
}

export default Button;
