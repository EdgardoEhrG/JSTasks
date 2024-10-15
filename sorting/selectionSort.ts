const selectionSort = (arr: number[]): number[] => {
  for (let i: number = 0; i < arr.length; i++) {
    let pos: number = i;
    let min: number = arr[i];

    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        pos = j;
        min = arr[j];
      }
    }
    arr[pos] = arr[i];
    arr[i] = min;
  }

  return arr;
};

// ----------------------------------------------------- CHECK

console.time("Selection sorting");
console.log(selectionSort([5, 7, 88, 23, 55, 11, 5, 3, 6, 1]));
console.timeEnd("Selection sorting");
