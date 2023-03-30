export const formatSalary = (value) => {
  const formattedSalary = Intl.NumberFormat(
    'pt-br',
    { style: 'currency', currency: 'BRL' },
  ).format(value);

  return formattedSalary;
};
