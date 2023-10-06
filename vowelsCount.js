/**
 * Returns a count of vowels in str
 * @param {string} - str
 * @returns {number} - vowels count
 */

const getVowelsCountByStr = (str) => {
  const vowels = ["a", "e", "u", "i", "o"];
  const vowelsCount = [];

  for (const vowel of vowels) {
    const letters = [...str.toLowerCase()];
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === vowel) {
        vowelsCount.push(letters[i]);
      }
    }
  }

  return vowelsCount.length;
};

const res = getVowelsCountByStr("One Two Three Four");

console.log(res);
