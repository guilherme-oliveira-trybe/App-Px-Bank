// url https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript

export function isValidDate(dateString) {
  const MIN_YEAR = 1000;
  const MAX_YEAR = 3000;
  const MIN_MONTH = 1;
  const MAX_MONTH = 12;
  const THIRTY_ONE = 31;
  const THIRTY = 30;
  const TWENTY_EIGHT = 28;
  const FOUR_HUNDRED = 400;
  const FOUR = 4;

  // First check for the pattern
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;

  if (!regexDate.test(dateString)) {
    return false;
  }

  // Parse the date parts to integers
  const parts = dateString.split('-');
  const day = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[0], 10);

  // Check the ranges of month and year
  if (year < MIN_YEAR || year > MAX_YEAR || month < MIN_MONTH || month > MAX_MONTH) {
    return false;
  }

  const monthLength = [
    THIRTY_ONE,
    TWENTY_EIGHT,
    THIRTY_ONE,
    THIRTY,
    THIRTY_ONE,
    THIRTY,
    THIRTY_ONE,
    THIRTY_ONE,
    THIRTY,
    THIRTY_ONE,
    THIRTY,
    THIRTY_ONE,
  ];

  // Adjust for leap years
  if (year % FOUR_HUNDRED === 0 || (year % 100 !== 0 && year % FOUR === 0)) {
    monthLength[1] = 29;
  }

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}
