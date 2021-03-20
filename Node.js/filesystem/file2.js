const fs = require('fs').promises;

fs.readFile('./readme.txt') // 콜백 함수 형식, 콜백 너무 늘어날것 같아 promise 만드려면 .promise 붙이면 알아서 promise 로 변환 .then 붙여서 읽어오기.
 .then((data)=> {
     console.log("원본 데이터 :",data);
     console.log("String 변환 :",data.toString());
     
 })
 .catch((err) => console.log(err))