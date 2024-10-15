const getElementByIndexFromArr = (arr: number[], idx: number) => {
  return arr[idx];
};

const arr: number[] = [1, 3, 8, 64, 58, 99, 308, 1254];

const arr2: number[] = Array.from({ length: 1000 }, (_, idx) => {
  return idx + 1;
});

// ----------------------------------------------------- CHECK

console.time("Access element #5");
console.log(getElementByIndexFromArr(arr, 5));
console.timeEnd("Access element #5");

console.time("Access element #115");
console.log(getElementByIndexFromArr(arr2, 115));
console.timeEnd("Access element #115");
