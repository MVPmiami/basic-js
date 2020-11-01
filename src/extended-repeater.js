const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let repeatStr = str;
  if(repeatStr == null){
    repeatStr = 'null'
  }else{
    repeatStr = repeatStr.toString();  
  }
  let repeatTimes = 0; //устанавливает число повторений
  let separator = '+';//это строка, разделяющая повторения
  let addition ;//это дополнительная строка, которая будет добавлена после каждого повторения
  let additionRepeatTimes = 0; // устанавливает число повторений addition
  let additionSeparator = '|'; // это строка, разделяющая повторения addition
  
  let arrString = [];
  let result = '';
  // получаем все опции
  if(options.repeatTimes == undefined){
    repeatTimes = 0;
  }else{
    repeatTimes = options.repeatTimes
  }
  
  if(options.separator == undefined){
    separator = '+';
  }else{
    separator = options.separator;
  }
  
  if(options.addition === undefined){
    addition = '';
  }else if(options.addition == null){
    addition = 'null';
  }else{
      addition = options.addition.toString();
  }
  
  if(options.additionRepeatTimes == undefined){
    additionRepeatTimes = 0;
  }else{
    additionRepeatTimes = options.additionRepeatTimes;
  }
  
  if(options.additionSeparator == undefined){
    additionSeparator = '|';
  }else{
    additionSeparator = options.additionSeparator;
  }
  
  if(options.repeatTimes == undefined && options.additionRepeatTimes == undefined){
    arrString.push(repeatStr);
    arrString.push(addition);
  }else{
    for(let i = 0; i < repeatTimes; i ++){
      arrString.push(repeatStr);
      for(let n = 0; n < additionRepeatTimes; n++){
        if( n === additionRepeatTimes - 1){
          arrString.push(addition);
          continue;
        }else{
          arrString.push(addition);
          arrString.push(additionSeparator);  
        }
      }
      if(i === repeatTimes - 1){
        continue;
      }else{
        arrString.push(separator);
      }
    }
  }
  
  arrString.forEach( function(item) {
    result += item;
  });
  
  //console.log(result);
  return result;
};
  
