// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  numbers.sort((a, b) => b - a).slice(0, 2);
  let max1 = numbers[0];
  let max2;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== max1) {
      max2 = numbers[i];
      break;
    }
  }

  return console.log([max1, max2]);
};

getTop2MaxNumbers([10, 40, 20, 2, 9, 19]);
getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]);
getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]);
