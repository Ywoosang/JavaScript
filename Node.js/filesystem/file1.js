/*
파일 시스템에 접근하는 모듈
파일/ 폴더 생성, 삭제, 읽기, 쓰기 가능
웹 브라우저에서는 제한적이었으나 노드는 권한을 가지고 있음
파일 경로 잘 설정하면 아무데나 다 읽기 가능 
*/

const fs = require('fs');

fs.readFile('./readme.txt',(err,data)=> { // 콜백 함수 형식, 콜백 너무 늘어날것 같아 promise 만드려면 .promise 붙이면 알아서 promise 로 변환 .then 붙여서 읽어오기.
    if(err) {
        throw err;
    }
    console.log('원본 데이터 :',data) 
    console.log('string 으로 변환:',data.toString());
})