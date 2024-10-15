const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const pivot: number = arr[arr.length - 1];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// ----------------------------------------------------- CHECK

console.time("Quick sorting");
console.log(quickSort([5, 7, 88, 23, 55, 11, 5, 3, 6, 1]));
console.timeEnd("Quick sorting");
