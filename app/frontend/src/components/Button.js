import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
