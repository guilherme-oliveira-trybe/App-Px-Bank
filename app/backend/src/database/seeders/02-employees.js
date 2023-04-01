/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Employees', [
      {
        name: 'Guilherme Oliveira',
        cpf: '04869528002',
        salary: 4000,
        dateOfBirth: '1989-08-11',
        departmentId: 1
      },
      {
        name: 'Flávia Oliveira',
        cpf: '34085966030',
        salary: 5000,
        dateOfBirth: '1994-12-23',
        departmentId: 4
      },
      {
        name: 'Aurora Oliveira',
        cpf: '01589140079',
        salary: 3000,
        dateOfBirth: '2015-02-07',
        departmentId: 2
      },
      {
        name: 'Matheus Oliveira',
        cpf: '28080751030',
        salary: 2000,
        dateOfBirth: '2020-12-23',
        departmentId: 3
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Employees', null, {});
  },
};