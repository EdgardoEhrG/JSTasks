const getFlatternArr = (numArr: any): number[] => {
  const arr: number[] = [];

  const isNested = checkNestedArr(numArr);

  if (isNested) {
    for (const element of numArr) {
      if (Array.isArray(element)) {
        const newArr = getFlatternArr(element);

        for (const el of newArr) {
          arr.push(el);
        }
      } else {
        arr.push(element);
      }
    }
    return arr;
  } else {
    return numArr;
  }
};

const checkNestedArr = (arr: any[]): boolean => {
  for (const element of arr) {
    if (Array.isArray(element)) return true;
  }

  return false;
};

// ----------------------------------------------------- CHECK

const res = getFlatternArr([1, 2, [3, 5, [5, 6, [67, 125]]], 4]);
console.log(res);
