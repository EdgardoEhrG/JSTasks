const generateHashtag = (str: string): string | boolean => {
  if (str === "") return false;

  const hashTag: string = str
    .trim()
    .split(" ")
    .map((word) => {
      const letters = word.split("");
      letters[0] = letters[0].toUpperCase();
      return letters.join("");
    })
    .join("");

  return `#${hashTag}`;
};

// ----------------------------------------------------- CHECK

const res1 = generateHashtag("TypeScript is awesome language");
const res2 = generateHashtag("");

console.log(res1, res2);
