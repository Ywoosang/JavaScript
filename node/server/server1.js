// 노드가 http 서버 쉽게 만들도록 제공 
const http = require('http');

const server= http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'}); // html 로 인식 가능하도록 , utf-8 인코딩 한글 안깨지도록
    res.write('<h1>Hello Node</h1>'); // 스트림형식임. response 보내줌.  
    res.end('<p>End</p>')
}).listen(8080,()=> {
    console.log('8080번 포트에서 서버 대기중')
});  // 노드가 실행하는 순간 프로세스로 올림. 프로세스로 올릴때는 포트를 하나 씀 
// 서버를 실행하는 경우 (listen 을 하는 경우) 터미널 하나 씀. 
server.on('error',(error)=>{
    console.error(error)
})
