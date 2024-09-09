const createFibonacci = (seq: number): number => {
  if (seq < 2) {
    return seq;
  }

  return createFibonacci(seq - 1) + createFibonacci(seq - 2);
};

const res1 = createFibonacci(10);
console.log(res1);

// -----------------------

const createFactorial = (seq: number): number => {
  if (seq < 2) {
    return seq;
  }

  return seq * createFactorial(seq - 1);
};

const res2 = createFactorial(5);
console.log(res2);
