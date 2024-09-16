/**
 * Returns a count of occurrences of a character in a string
 * @param {string} - str
 * @param {string} - char
 * @returns {number} - count of occurrences
 */

const getCountOfOccurences = (str, char) => {
  // ----------------------------------------------------- BAD

  // const strArr = [...str];
  // const occurenceArr = [];

  // for (const letter of strArr) {
  //   if (letter === char) {
  //     occurenceArr.push(letter);
  //   }
  // }

  // return occurenceArr.length;

  // ----------------------------------------------------- SO-SO

  // let count = 0;

  // for (let i = 0; i <= str.length; i++) {
  //   if (str[i] === char) {
  //     count++;
  //   }
  // }

  // return count;

  // ----------------------------------------------------- THE BEST

  return str.split(char).length - 1;
};

// ----------------------------------------------------- CHECK

const res1 = getCountOfOccurences("Lalala lend", "l");
const res2 = getCountOfOccurences("Hey! I think about it", "a");

console.log(res1, res2);
