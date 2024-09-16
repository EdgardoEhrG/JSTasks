/**
 * Returns a string with the first letter of each word capitalized
 * @param {string} - str
 * @returns {string} - changed string
 */

const getTitle = (str) => {
  // ----------------------------------------------------- SO-SO

  // let changedStr = [];

  // const wordsArr = str.split(" ");

  // for (const word of wordsArr) {
  //   const lettersArr = [...word].map((word) => word.toLowerCase());

  //   lettersArr[0] = lettersArr[0].toUpperCase();

  //   changedStr.push(lettersArr.join(""));
  // }

  // return changedStr.join(" ");

  // ----------------------------------------------------- THE BEST

  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
};

// ----------------------------------------------------- CHECK

const res = getTitle("You know Roy saw STAR WARS 317 times");
console.log(res);
