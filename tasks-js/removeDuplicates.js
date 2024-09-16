/**
 * Returns data without duplicates
 * @param {any[]} - data with duplicates
 * @returns {any[]} - data without duplicates
 */

const getDataWithoutDuplicates = (data) => {
  return [...new Set(data)];
};

// ----------------------------------------------------- CHECK

const res1 = getDataWithoutDuplicates([
  "Item1",
  "Item2",
  "Item3",
  "Item1",
  "Item5",
  "Item2",
]);
const res2 = getDataWithoutDuplicates([
  1, 3, 6, 7, 3, 8, 1, 5, 3, 7, 8, 9, 2, 1,
]);

console.log(res1, res2);
