const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let today = date;
  const seasons = ['winter','spring','summer','fall'];
  if(! arguments.length){
    return 'Unable to determine the time of year!';
  }else if(typeof today !== 'object'){
  throw Error('Error');
  }else if(Object.prototype.toString.call(today) !== '[object Date]'){
    throw Error('THROWN');
  }else{
    if(today.getMonth() === 11 || today.getMonth() === 0 || today.getMonth() === 1){
      return seasons[0];
    }else if(today.getMonth() === 2 || today.getMonth() === 3 || today.getMonth() === 4){
      return seasons[1];
    }else if(today.getMonth() === 5 || today.getMonth() === 6 || today.getMonth() ===7){
      return seasons[2];
    }else{
      return seasons[3];
    }
  }
};
