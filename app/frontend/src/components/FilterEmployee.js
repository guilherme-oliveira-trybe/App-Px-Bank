import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Button from './Button';

function FilterEmployee() {
  const { allDepartment, filters } = useContext(Context);
  const [name, setName] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Nome:
        <input
          type="text"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label>
        Departamento:
        <select
          value={ filterDepartment }
          onChange={ ({ target }) => setFilterDepartment(target.value) }
        >
          <option value="">Selecione o Departamento</option>
          {allDepartment.map(({ department, id }) => (
            <option key={ id }>{department}</option>
          ))}
        </select>
      </label>
      <Button type="submit" onClick={ () => filters(name, filterDepartment) }>
        Pesquisa
      </Button>
    </form>
  );
}

export default FilterEmployee;
