const sumArray = (arr: number[]): number => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const arr: number[] = [1, 3, 8, 64, 58, 99, 308, 1254];

const arr2: number[] = Array.from({ length: 100000000 }, (_, idx) => {
  return idx + 1;
});

// ----------------------------------------------------- CHECK

console.time("Sum arr elements #1");
console.log(sumArray(arr));
console.timeEnd("Sum arr elements #1");

console.time("Sum arr elements #2");
console.log(sumArray(arr2));
console.timeEnd("Sum arr elements #2");
