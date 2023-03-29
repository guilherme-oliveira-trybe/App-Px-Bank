import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ children, type, onClick }) {
  return (
    <button
      type={ type }
      onClick={ onClick }
    >
      {children}
    </button>
  );
}

export default Button;
