const removeFromArray = function (array, ...itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    const index = array.indexOf(itemsToRemove[i]);
    if (index > -1) array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
