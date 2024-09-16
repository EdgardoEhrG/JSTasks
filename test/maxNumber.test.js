import { describe, it, expect } from "vitest";

import { getMaxNumber } from "../tasks/maxNumber";

describe("maxNumber", () => {
  it("Positive numbers | func should return max value from array of numbers", () => {
    const res = getMaxNumber([10, 8, 32]);
    const maxValue = 32;
    expect(res).toBe(maxValue);
  });

  it("Negative numbers | func should return max value from array of numbers", () => {
    const res = getMaxNumber([-10, -8, -32]);
    const maxValue = -8;
    expect(res).toBe(maxValue);
  });

  it("Mixed numbers | func should return max value from array of numbers", () => {
    const res = getMaxNumber([-10, 8, -32, 10]);
    const maxValue = 10;
    expect(res).toBe(maxValue);
  });
});
