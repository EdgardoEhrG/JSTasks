/**
 * Returns a reversed str
 * @param {string} - str
 * @returns {string} - reversed str
 */

const getReversedStr = (str) => {
  // THE BEST
  return str
    .split(" ")
    .map((word) => {
      return [...word].reverse().join("");
    })
    .join(" ");

  // BAD
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

const res = getReversedStr("One Two Three Four");

console.log(res);
