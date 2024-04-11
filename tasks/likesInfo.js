/**
 * Returns a str with likes info
 * @param {string[]} - acc names
 * @returns {str} - likes info
 */

const getLikesInfo = (accNames) => {
  const namesCount = accNames.length;

  if (namesCount > 3) {
    return `${accNames[0]}, ${accNames[1]} and ${
      namesCount - 2
    } others like this`;
  }

  switch (namesCount) {
    case 0:
      return `No one likes this`;
    case 1:
      return `${accNames[0]} likes this`;
    case 2:
      return `${accNames[0]} and ${accNames[1]} like this`;
    case 3:
      return `${accNames[0]}, ${accNames[1]} and ${accNames[2]} like this`;
  }
};

const res1 = getLikesInfo([]);
const res2 = getLikesInfo(["Tom"]);
const res3 = getLikesInfo(["Tom", "James"]);
const res4 = getLikesInfo(["Tom", "James", "Paolo"]);
const res5 = getLikesInfo(["Tom", "James", "Paolo", "Hank", "Thomas", "Jack"]);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
