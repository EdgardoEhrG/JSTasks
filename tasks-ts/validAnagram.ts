const validAnagram = (str1: string, str2: string): boolean => {
  const lettersofFirstStr: string[] = [...str1].map((letter) =>
    letter.toLowerCase()
  );
  const lettersOfSecondStr: string[] = [...str2].map((letter) =>
    letter.toLowerCase()
  );

  if (lettersofFirstStr.length != lettersOfSecondStr.length) {
    return false;
  }

  for (const letter of lettersofFirstStr) {
    if (lettersOfSecondStr.includes(letter)) {
      return true;
    }
  }

  return false;
};

// ----------------------------------------------------- CHECK

const result1: boolean = validAnagram("Star", "Satr");
const result2: boolean = validAnagram("World", "Satr");

console.log(result1, result2);
