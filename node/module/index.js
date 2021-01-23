// 가져오는 것이기 떄문에 기존 파일에 console.log() 가 있었다면 실행되어 값이 같이 찍힘. 

const checkNumber = require('./func')['checkOddorEven']; 
console.log(checkNumber)
const {odd,even} = require('./var');
console.log(odd,even);