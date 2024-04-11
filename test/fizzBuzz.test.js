import { describe, it, expect } from "vitest";

import { getFizzBuzzArr } from "../tasks/fizzBuzzArr";

describe("fizzBuzz", () => {
  it("1 element | func should return an array with one fizz element", () => {
    const res = getFizzBuzzArr(3);
    expect(res).to.deep.equal([1, 2, "Fizz"]);
  });

  it("2 elements | func should return an array with two fizz elements", () => {
    const res = getFizzBuzzArr(5);
    expect(res).to.deep.equal([1, 2, "Fizz", 4, "Buzz"]);
  });
});
