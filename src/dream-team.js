const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let membersArr ;
  let nameTeam = [];
  let result = '';
  
  if(! arguments.length || 
      typeof members === 'number' ||
      members === false ||
      members === null ||
      members === undefined){
  
    return false;
  }
  
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      membersArr =members[i].split(' ').join('')
      nameTeam.push(membersArr[0].toUpperCase())
    }else{
      continue;
    }
  }
  
  nameTeam = nameTeam.sort();
  result =  nameTeam.join('')
  if(result === ''){
    return false;
  }else{
    return result.toUpperCase();
  }
};
