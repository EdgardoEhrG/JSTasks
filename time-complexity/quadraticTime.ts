const doubleSumArray = (arr: number[]): number => {
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[i];
    }
  }

  return sum + sum2;
};

const arr: number[] = [1, 3, 8, 64, 58, 99, 308, 1254];

const arr2: number[] = Array.from({ length: 10000 }, (_, idx) => {
  return idx + 1;
});

// ----------------------------------------------------- CHECK

console.time("Double sum arr elements #1");
console.log(doubleSumArray(arr));
console.timeEnd("Double sum arr elements #1");

console.time("Double sum arr elements #2");
console.log(doubleSumArray(arr2));
console.timeEnd("Double sum arr elements #2");
