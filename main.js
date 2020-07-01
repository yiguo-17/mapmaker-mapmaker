/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function(arr){
  const results = [];
  for (let i=0; i<arr.length;i++){
    results.push(arr[i]*2);
  }
  return results;
}
const yelledGreetings = function(arr){
  const results = [];
  for(let i=0; i<arr.length;i++){
    results.push(arr[i]+'!')
  }
  return results
}

const absoluteValues= function(arr){
  const results =[];
  for(let i=0; i< arr.length;i++){
    results.push(Math.abs(arr[i]))
  }
  return results
}

const upperCaseFirstLetters = function(arr){
  const results =[]
  for(let i=0;i<arr.length;i++){
    results.push(arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase())
  }
  return results
}

const changeToInitials=function(arr){
  const results=[]
  for(let i=0;i<arr.length;i++){
    const ini = arr[i][0]+arr[i][arr[i].indexOf(' ')+1];
    results.push(ini)
  }
  return results
}

const doubleOdd = function(arr){
  const results =[];
  for (let i=0; i< arr.length; i++){
    if(Math.abs(arr[i])%2===1){results.push(arr[i]*2)}
    else{results.push(arr[i])}
  }
  return results;
}

const add1ToLeft = function(arr){
  const digits=[];
  const result= [];
  for (let i=0; i< arr.length; i++){
    digits.push(String(Math.abs(arr[i])).length)
  }
  for (let i=0; i< arr.length; i++){
    if(arr[i]>0){result.push(arr[i]+10**digits[i])}
    else {result.push(arr[i]-10**digits[i])}
  }
  return result;
}

/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
//let d= changeToInitials(['Cdd Gcc','Ajj Hjj'])
//console.log(d)