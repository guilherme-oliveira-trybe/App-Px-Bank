import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, children }) {
  return (
    <form
      // className={ styles.form }
      onSubmit={ onSubmit }
    >
      {children}

    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
}.isRequired;

export default Form;
