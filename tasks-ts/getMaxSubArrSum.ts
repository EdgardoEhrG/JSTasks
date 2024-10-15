const getMaxSubArrSum = (arr: number[], subArrLength: number): number => {
  let maxSum: number = 0;

  const numArrs: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    numArrs.push(arr.splice(i, subArrLength));
  }

  for (const numArr of numArrs.filter((arr) => arr.length === subArrLength)) {
    const sumOfSubArrNums = numArr.reduce((curr, prev) => {
      curr = curr + prev;
      return curr;
    }, 0);

    maxSum = Math.max(maxSum, sumOfSubArrNums);
  }

  return maxSum;
};

// ----------------------------------------------------- CHECK

console.log(getMaxSubArrSum([2, 5, 3, 1, 11, 7, 6, 4], 3));
