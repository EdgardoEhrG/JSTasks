const insertionSort = (arr: number[]): number[] => {
  let j: number;

  for (let i: number = 1; i < arr.length; i++) {
    let swap: number = arr[i];

    for (j = i; j > 0 && swap < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = swap;
  }

  return arr;
};

// ----------------------------------------------------- CHECK

console.time("Insertion sorting");
console.log(insertionSort([5, 7, 88, 23, 55, 11, 5, 3, 6, 1]));
console.timeEnd("Insertion sorting");
