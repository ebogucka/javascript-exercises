const reverseString = function (string) {
  let characters = string.split('');
  characters.reverse();
  return characters.join('');
};

// Do not edit below this line
module.exports = reverseString;
