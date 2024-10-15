const isBalance = (str: string): boolean => {
  // 1. by Length

  if ([...str].length % 2 !== 0) return false;

  // 2. by First & last symbol

  if ([...str][0] === ")" || [...str][str.length - 1] === "(") return false;

  // 3. by Pair

  if (str.split("(").length !== str.split(")").length) return false;

  return true;
};

// ----------------------------------------------------- CHECK

console.log(isBalance("(()))"));
console.log(isBalance("(())"));
console.log(isBalance("()))"));
console.log(isBalance("()()"));
