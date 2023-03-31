import React from 'react';
import PropTypes from 'prop-types';

function Select({ id = '', value, onChange, name = '', children }) {
  return (
    <select
      value={ value }
      onChange={ onChange }
      // className={ styles.select }
      id={ id }
      name={ name }
    >
      { children }
    </select>

  );
}

Select.propTypes = {
  id: PropTypes.string,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Select;
