/**
 * Returns the intersection of 2 arrs
 * @param {number[]} - first arr with nums
 * @param {number[]} - second arr with nums
 * @returns {number[]} - array with intersections
 */

const getIntersectionsByArrs = (firstArr, secondArr) => {
  // SO-SO

  const intersections = [];

  for (const numF of firstArr) {
    for (const numS of secondArr) {
      if (numS === numF) {
        intersections.push(numF);
      }
    }
  }

  return [...new Set(intersections)];

  // THE BEST

  const numCollection = new Set(firstArr);
  const intersectionArr = [];

  for (const num of secondArr) {
    if (numCollection.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
};

const res1 = getIntersectionsByArrs([1, 2, 3, 5, 7, 8], [1, 3, 5, 7, 9]);
const res2 = getIntersectionsByArrs([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]);
const res3 = getIntersectionsByArrs([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);

console.log(res1);
console.log(res2);
console.log(res3);
