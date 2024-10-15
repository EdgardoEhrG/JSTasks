const bubbleSort = (arr: number[]): number[] => {
  for (let i: number = 0; i < arr.length; i++) {
    let isSorted: boolean = true;

    for (let j: number = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSorted = false;
      }
    }

    if (isSorted) break;
  }

  return arr;
};

// ----------------------------------------------------- CHECK

console.time("Bubble sorting");
console.log(bubbleSort([5, 7, 88, 23, 55, 11, 5, 3, 6, 1]));
console.timeEnd("Bubble sorting");
