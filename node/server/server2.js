// html 렌더링 방법 
const http = require('http');
const fs = require('fs').promises; // async 로 하면 promises 꼭 붙여주기 

const server = http.createServer(async (req,res) => { // async 함수로 바꿔줌 
    try{
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}); // html 로 인식 가능하도록 text/hltm, utf-8 인코딩 한글 안깨지도록
        const data = await fs.readFile('./server2.html'); // html 파일을 읽어서 전송  
        console.log(data);// Bufer 형식 -> html 을 stream 방식으로 보내기 때문에 
        res.end(data); 
    } catch(err){
        console.error(err);
        res.writeHead(200,{'Content-Type': 'text/plane; charset=utf-8'}); // 일반 문자열 text/plane
        res.end(err.message); // 에러가 난 경우에 에러 메시지를 확인할 수 있도록 
    }
})
    .listen(8080,()=> {
    console.log('8080번 포트에서 서버 대기중')
});   
server.on('error',(error)=>{
    console.error(error)
})
