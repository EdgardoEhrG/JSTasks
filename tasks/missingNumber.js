/**
 * Returns a missin' number
 * @param {number[]} - arr of numbers
 * @returns {number} - missing number
 */

const getMissingNumber = (nums) => {
  const numsCount = nums.length;

  for (let i = 1; i <= numsCount; i++) {
    if (!new Set(nums).has(i)) {
      return i;
    }
  }
};

const res1 = getMissingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10]);
const res2 = getMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10].reverse());

console.log(res1);
console.log(res2);
