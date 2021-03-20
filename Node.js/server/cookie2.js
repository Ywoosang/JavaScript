const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>{
    // map 으로 item
    cookie.split(';').map(item => item.split('=')).reduce((acc,[k,v])=> {
        acc[k.trim()] = docodeURIComponent(v);
        return acc; 
    },{});
}

http.createServer(async(req,res)=> {
    const cookies = parseCookies(req.headers.cookie); // {mycookie:'test'}
    // 주소가 /login 으로 시작하는 경우 
    if (req.url.startsWith('/login')){
        const { query } = url.parse(query.url); 
        const { name } = qs.parse(query);
        const expires = new Date();
        // 쿠키 유효시간 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302,{
            Locatin :'/',
            'Set-Cookie' :`name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`, // encodeURIComponent 한글일 경우 
        });
        res.end();
        //name 이라는 쿠키가 있는 경우 
    } else if (cookies.name) {
        res.writeHead(200, {'Contnet-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    }else {
        try{
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch(err) {
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message); 
        }
    }
}).listen(8080,()=> {
    console.log('8080 포트에서 서버 켜짐');
})