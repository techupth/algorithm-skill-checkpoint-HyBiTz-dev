// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

const getMaxCharacters = (str) => {
  const charMap = {};
  let maxChar = "";
  let maxCount = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;

    if (charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return console.log(maxChar);
};

getMaxCharacters("abcccccccd");
getMaxCharacters("apple 1231111");
