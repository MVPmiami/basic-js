const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(! arguments.length || typeof arr !== 'object'){
    throw Error('Error');
  }
  let newArr = arr;
  let result = [];
  
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === '--discard-next'){
      if(newArr[i + 2] === '--discard-prev'){
        i = i + 2;
        continue;
      }else if(i === newArr.length - 1){
        continue;
      }else{
        i++;
        continue;
      }
    }else if(newArr[i] === '--discard-prev'){
      if(newArr[i - 2] === '--discard-prev'){
        result.splice(i - 3, 1);
        continue;
      }else{
        result.splice(i - 1,1);
        continue;
      }
    }else if(newArr[i] === '--double-next'){
      if(i === newArr.length - 1){
        continue;
      }else{
        result.push(newArr[i + 1]);
        continue;
      }
    }else if(newArr[i] === '--double-prev'){
      if(newArr[0] === '--double-prev'){
        continue;
      }else if(newArr[i - 2] === '--discard-next'){
        continue;
      }else{
        result.push(newArr[i - 1]);
        continue;
      }
    }
    result.push(newArr[i]);
  }
  return result;
};
