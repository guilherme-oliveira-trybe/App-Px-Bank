import React from 'react';
import Button from './Button';

function FilterEmployee() {
  return (
    <form>
      <label>
        Nome:
        <input type="text" />
      </label>
      <label>
        Departamento:
        <select>
          <option>teste</option>
        </select>
      </label>
      <Button type="submit">
        Pesquisa
      </Button>
    </form>
  );
}

export default FilterEmployee;
