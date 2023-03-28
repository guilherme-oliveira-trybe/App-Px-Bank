module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Departments', [
      {
        department: 'TI',
      },
      {
        department: 'Administrativo',
      },
      {
        department: 'Vendas',
      },
      {
        department: 'Departamento Pessoal',
      },
      {
        department: 'Marketing',
      },
      {
        department: 'Financeiro',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Departments', null, {});
  },
};