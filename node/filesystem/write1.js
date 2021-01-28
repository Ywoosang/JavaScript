/* 
파일 생성할 수 있음 
*/ 
const fs = require('fs').promises;

// writeFile 사용 이미 있는 파일이면 새로 생성 안하고 덮어씀.
fs.writeFile('./writeme.txt','글이 입력됩니다.')
    .then(()=>{
        return fs.readFile('./writeme.txt'); 

    })
    .then((data)=> {
        console.log(data.toString());
    })
    .catch((err)=> {
        throw err; 
    })
