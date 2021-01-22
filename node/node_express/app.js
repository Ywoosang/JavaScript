//노드는 기본적으로 코드를 위에서 아래로 실행 

// node modules 열어서 express 보면 http server 를 쓰고 있다.
// http server 를 쓰고있는 express 를 사용하는 것이기 때문에 내부적으로 http 를 쓰고 있는 것이다. 

// git ignore 하고 nodemodules 올린 다음, 나중에 소스코드 받아서 npm i 함. 용량이 크기 떄문 
const { error } = require('console');
const express = require('express'); 
const { STATUS_CODES } = require('http');
const path = require('path');

const app = express();

// set : 서버에 변수(속성) 를 심는다. port 라는 변수를 3000 으로 넣는다. port = 3000
// express 쓸때 app 전체에서 사용 가능. 전역변수 
// process.env 로 PORT 
app.set('port',process.env.PORT || 2000) 

// 미들웨어 사용
app.use((req,res,next)=> {
    console.log('모든 요청에 실행1');
    next();
},(req,res,next)=> {
    console.log('모든 요청에 실행2');
    next();
},(res,req,next)=> {
    try{
        console.log('에러임.')
        next();
    } catch(error){
        next(error);
    }
});

// get: request 의 메서드 , '/' :url
// 처음부터 리퀘스트 메소드 url 을 작성 가능.  기본적으로 에러처리도 ex 500 에러 띄워줌, url 에 따라 if 문으로 도배를 하지 않아도 되고 app 에 메서드를 붙여주는 방식으로 구별 가능 
 

app.get('/',(req,res,next)=> {
    // res.send('method is post! hello express')
    next('route');
},(req,res)=>{
    req.send('execute this middleware')
});

app.get('/about',(req,res)=>{
    res.send('this is about page')
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/category/go',(req,res)=>{
    res.send('golang');
});
app.get('/category/python',(req,res)=>{
    res.send('python');
}); 
// 와일드카드 사용 
// req,res 등 매개변수는 이름을 아무거나 지음. 
app.get('/category/:name',(req,res)=>{
    res.send(`name is : ${req.params.name}`);
});


// 미들웨어 
app.get('/error',(req,res)=>{
    throw new Error('error!!') ;
});

app.use((req,res,next)=>{
    res.status(200).send('404 not found')
})

// 에러처리 미들웨어 
// 앞에 err 가 들어있음. 
//반드시 next 까지 4개 파라미터를 다 써야함. 
app.use((err,req,res,next) => {
    // 서버에 에러 기록
    console.log(res.statusCode); 
    console.error('error 발생',err);  
    // 에러처리 페이지 만들던가 별도 메시지 전송 
    res.status(200).send('일시적인 오류가 발생했습니다.')
}); 

 

// app.listen(3000,()=>{
//     console.log('express start');
// });
app.listen(app.get('port'),()=>{ // port 변수 사용 가능  3000 이니까 3000 번포트가 되게됨 
    console.log('express server start');
})
// SET PORT = 80  (프로세스 env 설정 가능. but 이런식으로 하면 전체다 세팅되므로 X)
// 노드 프로젝트에서 하는방법 따로


// nodemon 이용해 app 실행
// 개발할 때는 nodemon 서버 많이 씀
// 장점: 파일이 바뀔 때 서버를 재시작해줌. 소스코드 바뀔 때 껐다 킬 필요 없음
// npm i nodemon
