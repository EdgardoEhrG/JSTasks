/**
 * Returns a fizzBuzz arr
 * @param {number} - length of arr
 * @returns {(string|number)[]} - array with results
 */

const getFizzBuzzArr = (arrLength) => {
  const numbersArr = [];

  for (let i = 1; i <= arrLength; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbersArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      numbersArr.push("Fizz");
    } else if (i % 5 === 0) {
      numbersArr.push("Buzz");
    } else {
      numbersArr.push(i);
    }
  }

  return numbersArr;
};

const res = getFizzBuzzArr(100);

console.log(res);
