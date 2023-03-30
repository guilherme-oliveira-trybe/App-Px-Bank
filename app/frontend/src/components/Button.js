import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ children, type, onClick, disabled = false }) {
  return (
    <button
      type={ type }
      onClick={ onClick }
      disabled={ disabled }
    >
      {children}
    </button>
  );
}

export default Button;
