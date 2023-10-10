const layout = require("./data.js");
function getRowNumber(letter) {
  // leter -> "A"
  /* letter = letter.toUpperCase();
  const position = letter.charCodeAt() - 65;
  return position; */

  return letter.toUpperCase().charCodeAt() - 65;
}
function checkSeatStatus(rowLetter, indexColumn) {
  if (typeof rowLetter !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof indexColumn !== "number")
    throw new TypeError("Second parameter is not a number");
  const indexRow = getRowNumber(rowLetter);
  const row = layout[indexRow];
  const seat = row[indexColumn];
  const isBooked = seat.booked;
  // isBooked es true si el asiento esta ocupado
  const isAvailable = !isBooked;
  // isAvailable sera false -> no esta disponible
  return isAvailable;
}
function book(rowLetter, indexColumn) {
  if (typeof rowLetter !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof indexColumn !== "number")
    throw new TypeError("Second parameter is not a number");
  const indexRow = getRowNumber(rowLetter);
  const row = layout[indexRow];
  const seat = row[indexColumn];
  const isBooked = seat.booked;
  if (isBooked) return `Seat in ${rowLetter}${indexColumn} is already booked`;
  seat.booked = true;
  return `Seat in ${rowLetter}${indexColumn} successfully booked`;
}

module.exports = { checkSeatStatus, getRowNumber, book };
// charCodeAt
/* 65 -> A -> 0
66 -> B -> 1
67 -> C -> 2 */
