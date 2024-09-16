const createFibonacci = (seq: number): number => {
  if (seq < 2) {
    return seq;
  }

  return createFibonacci(seq - 1) + createFibonacci(seq - 2);
};

// ----------------------------------------------------- CHECK

const res1 = createFibonacci(10);
console.log(res1);

// -----------------------

export const createFactorial = (seq: number): number => {
  if (seq < 2) {
    return seq;
  }

  return seq * createFactorial(seq - 1);
};

// ----------------------------------------------------- CHECK

const res2 = createFactorial(5);
console.log(res2);
