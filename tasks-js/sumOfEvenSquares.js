/**
 * Returns sum of squares of even numbers
 * @param {number[]} - array of numbers
 * @returns {number} - sum of squares of even numbers
 */

const sumOfEvenSquares = (numbers) => {
  if (!Array.isArray(numbers)) return;

  if (!numbers.length) return 0;

  const evenNumbers = numbers
    .filter((num) => num % 2 == 0)
    .map((num) => Math.pow(num, 2))
    .reduce((prev, curr) => {
      curr = curr + prev;
      return curr;
    }, 0);

  return evenNumbers;
};

// ----------------------------------------------------- CHECK

const res = sumOfEvenSquares([1, 2, 3, 4, 5]);
console.log(res);
