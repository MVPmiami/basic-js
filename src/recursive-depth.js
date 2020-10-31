const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countArr = 1;
    let level = 1;
      for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) ){
          countArr = 1 + this.calculateDepth(arr[i]);
        }else{
          continue;
        }
        this.calculateDepth(arr[i]);
      }
      if(countArr > level){
        level = countArr;
      }
      countArr = 1;
      return level;
    }
};