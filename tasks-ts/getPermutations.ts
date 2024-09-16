const getPermutations = (str: string): string[] => {
  const permutations: string[] = [];

  if (str.length === 0) {
    permutations.push("");
    return permutations;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfStr = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = getPermutations(restOfStr);

    for (let j = 0; j < subPermutations.length; j++) {
      permutations.push(firstChar + subPermutations[j]);
    }
  }

  return permutations;
};

// ----------------------------------------------------- CHECK

const res = getPermutations("abcdf");
console.log(res);
