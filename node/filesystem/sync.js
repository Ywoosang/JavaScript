const fs = require('fs');
/*
동기적 실행 방식
비효율적이므로 딱 한번 실행하거나 서버초기화 작업 할때나 쓰지 서버 실행된 이후에는 동기 코드를 쓰면 
사용자가 많을 수록 점점 오래 기다리므로 쓸때 주의를 해야한다.  
*/
let data = fs.readFile('./readme.txt');
console.log("1번",data.toString());
data = fs.readFile('./readme.txt');
console.log("2번",data.toString());
data = fs.readFile('./readme.txt');
console.log("3번",data.toString());
data = fs.readFile('./readme.txt');
console.log("4번",data.toString());