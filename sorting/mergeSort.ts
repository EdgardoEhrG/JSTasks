const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const mid: number = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  const merged: number[] = [];

  let leftIdx: number = 0;
  let rightIdx: number = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return merged.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

// ----------------------------------------------------- CHECK

console.time("Merge sorting");
console.log(mergeSort([5, 7, 88, 23, 55, 11, 5, 3, 6, 1]));
console.timeEnd("Merge sorting");
