import { createFactorial } from "../tasks-ts/math";

const getPermutations = (str: string): Set<string> => {
  const permutations: string[] = [];

  const letters: string[] = str.split("");

  const countOfVariations = createFactorial(letters.length);

  for (let i = 0; i < countOfVariations; i++) {
    const variation: string[] = [];

    const tempArr: string[] = [...letters];

    for (let j = 0; j < tempArr.length; j++) {
      const letterIndex = getRandomElement(tempArr);
      const element = tempArr[letterIndex];

      if (element) {
        variation.push(element);
        delete tempArr[letterIndex];
      }
    }

    if (variation.length === letters.length) {
      permutations.push(variation.join(""));
    }

    console.log(variation.length);
    console.log(letters.length);
  }

  return new Set(permutations);
};

const getRandomElement = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length);
};

const checkCountOfLetter = (
  originArr: string[],
  currentArr: string[]
): boolean => {
  for (const letter of originArr) {
    let countOfLetterInOriginArr = originArr.join("").split(letter).length - 1;
    let countOfLetterInCurrentArr =
      currentArr.join("").split(letter).length - 1;

    if (countOfLetterInCurrentArr !== countOfLetterInOriginArr) {
      return false;
    } else {
      return true;
    }
  }

  return true;
};

// ----------------------------------------------------- CHECK

const res = getPermutations("lul");
console.log(res);
