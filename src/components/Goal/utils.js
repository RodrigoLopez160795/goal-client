const Months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export function dateFormat(date) {
  let [newDate] = date.split('T');
  newDate = new Date(newDate);
  return `${Months[newDate.getMonth()]} ${
    newDate.getDate() + 1
  }, ${newDate.getFullYear()}`;
}

export function finishDate(date) {
  date = date.split('/');
  return `Finish in ${Months[date[1] - 1]} ${date[0]}, ${date[2]}`;
}
