/**
 * Returns a max number from array of numbers
 * @param {number[]} - array of numbers
 * @returns {number} - max number
 */

const getMaxNumber = (numbers) => {
  // ------ BAD

  let maxNumber;
  let currentNumber;

  for (const number of numbers) {
    currentNumber = number;

    for (let i = 0; i < numbers.length; i++) {
      if (currentNumber < numbers[i]) {
        maxNumber = numbers[i];
      }
    }
  }

  return maxNumber;

  // ------ SO-SO

  let max = numbers[0];

  for (let i = 0; i < numbers.length; j++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;

  // ------ THE BEST

  return Math.max(numbers);
};

const res = getMaxNumber([
  1, 4, 677, 50, 33, 136, 544, 122, 2220, 18, 19, 13560, 23,
]);

console.log(res);
