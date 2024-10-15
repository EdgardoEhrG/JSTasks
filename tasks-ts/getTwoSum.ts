const getTwoSum = (arr: number[], target: number): number[][] | string => {
  const nums: number[][] = [];

  let iterSum = 0;

  for (const num of arr) {
    for (const subNum of arr) {
      let subIterSum = num + subNum;

      if (subIterSum === target) {
        iterSum = subIterSum;
        nums.push([num, subNum]);
      }
    }
  }

  return !nums.length ? `Not found` : nums;
};

// ----------------------------------------------------- CHECK

console.log(getTwoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
