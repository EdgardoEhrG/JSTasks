/**
 * Returns a max number from array of numbers
 * @param {number[]} - array of numbers
 * @returns {number} - max number
 */

export const getMaxNumber = (numbers) => {
  // ----------------------------------------------------- BAD

  // let maxNumber;
  // let currentNumber;

  // for (const number of numbers) {
  //   currentNumber = number;

  //   for (let i = 0; i < numbers.length; i++) {
  //     if (currentNumber < numbers[i]) {
  //       maxNumber = numbers[i];
  //     }
  //   }
  // }

  // return maxNumber;

  // ----------------------------------------------------- SO-SO

  // let max = numbers[0];

  // for (let i = 0; i < numbers.length; j++) {
  //   if (numbers[i] > max) {
  //     max = numbers[i];
  //   }
  // }

  // return max;

  // ----------------------------------------------------- THE BEST

  let max = numbers[0];

  for (const number of numbers) {
    const res = Math.max(max, number);
    max = res;
  }

  return max;
};
