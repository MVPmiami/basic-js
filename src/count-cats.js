const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let arrAllSymbol = arr;
  let count = 0;

  for(let i = 0; i < arrAllSymbol.length; i++){
    for(let n = 0; n < arrAllSymbol[i].length; n++){
      if(arrAllSymbol[i][n] === '^^'){
        count++;
      }
    }
  }

  return count;
};
