const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: '',
  isInt : true,
  chain: [] ,

  getLength() {
    //console.log(this.chain.length);
    return this.chain.length;
  },
  addLink(value) {
    if(this.chain.length === 0){
      this.result = '';
    }
    if(arguments.length === 0){
      this.chain.push(' ');
    }else{
      this.chain.push(`( ${value} )~~`);
      //console.log(this.chain);
      return this;
    }
  },
  removeLink(position) {
    isInteger(position)
    if(position <= 0 || position > this.chain.length || typeof position !== 'number' || this.isInt === false){
      this.chain = [];
      this.result = '';
      throw Error('THROWN');
    }else{
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    for(let i = 0; i < this.chain.length; i++){
        this.result += this.chain[i];
    }
    this.result = this.result.substring(0,this.result.length - 2);
    //console.log(this.result);
    this.chain = [];
    return this.result;
  }
};

function isInteger(position) {
  //console.log(chainMaker.isInt = (position ^ 0) === position)
  return chainMaker.isInt = (position ^ 0) === position;
};

module.exports = chainMaker;
