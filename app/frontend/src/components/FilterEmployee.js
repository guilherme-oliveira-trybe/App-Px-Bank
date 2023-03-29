import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import Button from './Button';

function FilterEmployee() {
  const { allDepartment } = useContext(Context);
  const [name, setName] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  return (
    <form>
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
          <option value="" disabled selected>Selecione o Departamento</option>
          {allDepartment.map(({ department, id }) => (
            <option key={ id }>{department}</option>
          ))}
        </select>
      </label>
      <Button type="submit">
        Pesquisa
      </Button>
    </form>
  );
}

export default FilterEmployee;
