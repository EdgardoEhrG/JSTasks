const getWorkFrequencyCounter = (str: string): Map<string, number> => {
  const info: Map<string, number> = new Map();

  for (const word of str.toLowerCase().split(" ")) {
    if ([...word].length === 1) {
      info.set(`${word}`, str.toLowerCase().split(` ${word} `).length - 1);
    } else {
      info.set(`${word}`, str.toLowerCase().split(word).length - 1);
    }
  }

  return info;
};

// ----------------------------------------------------- CHECK

console.log(
  getWorkFrequencyCounter(
    "That is partly because it is a transient region inside a transient state is a place where people move in and out with rapid speed adding a new crop of voters with every election cycle"
  )
);
