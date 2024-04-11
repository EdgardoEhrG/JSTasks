/**
 * Returns a str with phone number from array of number
 * @param {number[]} - nums
 * @returns {str} - formatted phone number
 */

const formatPhoneNumber = (numbers) => {
  if (!Array.isArray(numbers)) return "The data is not array of numbers";

  const cutArray = (start, end) => {
    return numbers.slice(start, end).join("");
  };

  const areaCode = `${numbers[0]}${cutArray(1, 4)}`;

  if (Array.isArray(numbers) && numbers.length === 11) {
    return `+${areaCode}-${cutArray(4, 7)}-${cutArray(7, 9)}-${cutArray(
      9,
      numbers.length
    )}`;
  } else if (Array.isArray(numbers) && numbers.length > 11) {
    return "Count of phone number is more then 11";
  } else {
    return "Count of phone number is less then 11";
  }
};

const res1 = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 12]);
const res2 = formatPhoneNumber([7, 9, 1, 2, 5, 6, 7, 8, 9, 0, 1]);
const res3 = formatPhoneNumber([1, 2, 4]);

console.log(res1);
console.log(res2);
console.log(res3);
