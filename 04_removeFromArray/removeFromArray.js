const removeFromArray = function (array, ...itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    const index = array.indexOf(itemsToRemove[i]);
    if (index > -1) array.splice(index, 1);
  }
  return array;
};

// const removeFromArray = function () {
//   const array = arguments[0];
//   var args = Array.prototype.slice.call(arguments);
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (!args.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };
// Do not edit below this line
module.exports = removeFromArray;
