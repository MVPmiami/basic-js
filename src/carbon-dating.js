const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;

  if(sampleActivity > 15 || sampleActivity <= 0){
    return false;
  }

  if(arguments.length && typeof sampleActivity === 'string'){
    if(isNaN(sampleActivity)){
      return false;
    }else if(sampleActivity === '' || sampleActivity === ' ' || sampleActivity === ' \n\t\r'){
      return false;
    }else{
      return (MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    }
  }else{
    return false;
  }
};
