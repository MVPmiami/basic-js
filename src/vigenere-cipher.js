const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(str, key) {
    let numSymbols = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    }
    let strLowerCase = str.toLowerCase();
    let keyLowerCase = key.toLowerCase();
    let numStrArr = [];
    let numKeyArr = [];
    let resultArr = [];
    let sum ;
    let difference;
    let resultCipher = [];
    let result = '';
    // присваиваем числа каждой букве строки
    for(let i = 0; i < strLowerCase.length; i++){
      for(key in numSymbols){
        if(key === strLowerCase[i]){
          numStrArr.push(numSymbols[key]);
        }
      }
    }
    // присваиваем числа каждой букве ключа
    for(let i = 0; i < keyLowerCase.length; i++){
      for(key in numSymbols){
        if(key === keyLowerCase[i]){
          numKeyArr.push(numSymbols[key]);
        }
      }
    }
    // сравниваем длину ключа со строкой
    if(numStrArr.length >= numKeyArr.length){
      difference = numStrArr.length - numKeyArr.length;
      for(let i = 0; i < difference; i++){
        numKeyArr.push(numKeyArr[i]);
      }
    }else{
      difference = numKeyArr.length - numStrArr.length;
      for(let i = 0; i < difference; i++){
        numKeyArr.pop()
      }
    }
    
    // складываем числа массивов строки и ключа
    for(let i = 0; i < numStrArr.length; i++){
      sum = numStrArr[i] + numKeyArr[i];
      if(sum >= 26){
        sum = sum - 26;
      }
      resultArr.push(sum);
    }
    // получаем шифрованную строку
    for(let i = 0; i < resultArr.length; i++){
      for(key in numSymbols){
        if(numSymbols[key] === resultArr[i]){
          resultCipher.push(key);
        }
      }
    }
    resultCipher.forEach(function(item){
      result += item;
    });

    console.log(result.toUpperCase());
    return result.toUpperCase();
  }    
  decrypt(str, key) {
    let numSymbols = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25,
    }
    let strLowerCase = str.toLowerCase();
    let keyLowerCase = key.toLowerCase();
    let numStrArr = [];
    let numKeyArr = [];
    let resultArr = [];
    let sum ;
    let difference;
    let resultCipher = [];
    let result = '';
    // присваиваем числа каждой букве строки
    for(let i = 0; i < strLowerCase.length; i++){
      for(key in numSymbols){
        if(key === strLowerCase[i]){
          numStrArr.push(numSymbols[key]);
        }
      }
    }
    // присваиваем числа каждой букве ключа
    for(let i = 0; i < keyLowerCase.length; i++){
      for(key in numSymbols){
        if(key === keyLowerCase[i]){
          numKeyArr.push(numSymbols[key]);
        }
      }
    }
    // сравниваем длину ключа со строкой
    if(numStrArr.length >= numKeyArr.length){
      difference = numStrArr.length - numKeyArr.length;
      for(let i = 0; i < difference; i++){
        numKeyArr.push(numKeyArr[i]);
      }
    }else{
      difference = numKeyArr.length - numStrArr.length;
      for(let i = 0; i < difference; i++){
        numKeyArr.pop()
      }
    }
    
    // складываем числа массивов строки и ключа
    for(let i = 0; i < numStrArr.length; i++){
      sum = numStrArr[i] - numKeyArr[i];
      if(sum < 0){
        sum = 26 + sum;
      }
      resultArr.push(sum);
    }
    // получаем шифрованную строку
    for(let i = 0; i < resultArr.length; i++){
      for(key in numSymbols){
        if(numSymbols[key] === resultArr[i]){
          resultCipher.push(key);
        }
      }
    }
    resultCipher.forEach(function(item){
      result += item;
    });

    console.log(result.toUpperCase());
    return result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
