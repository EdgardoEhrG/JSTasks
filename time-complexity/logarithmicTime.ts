const findPower = (base: number, exponent: number): number => {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
};

// ----------------------------------------------------- CHECK

console.time("Find power #1");
findPower(2, 10);
console.timeEnd("Find power #1");

console.time("Find power #2");
findPower(4, 100000);
console.timeEnd("Find power #2");
