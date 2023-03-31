import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type = 'text', required = false, id = '',
  value, onChange, name = '',
}) {
  return (
    <input
      type={ type }
      required={ required }
      // className={ styles.input }
      id={ id }
      value={ value }
      onChange={ onChange }
      name={ name }
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Input;
