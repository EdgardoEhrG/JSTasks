/**
 * Returns true if the str is a palindrome
 * @param {string} - str
 * @returns {boolean} - is palindrome or not
 */

const isPalindrome = (str) => {
  // SO_SO
  const reversedStr = str
    .split(" ")
    .map((word) => {
      return [...word].reverse().join("");
    })
    .reverse()
    .join(" ");

  return reversedStr.toLowerCase() === str.toLowerCase();

  // THE BEST
  const reversedString = str.split("").reverse().join();
  return str === reversedString;
};

const res1 = isPalindrome("One Two Three Four");
const res2 = isPalindrome("otto");

console.log(res1, res2);
