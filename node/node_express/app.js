const dotenv = require('dotenv'); 
dotenv.config();  
const { error } = require('console'); 
const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser'); 
const session = require('express-session'); 
const multer = require('multer');

const app = express(); 
const indexRouter = require('./routes');
const userRouter = require('./routes/user')
 
app.set('port',process.env.PORT || 2000); 
app.set('cookiename','ywoosang'); 

app.use('/',indexRouter);
app.use('/user',userRouter)
// 여기 미들웨어 들은 내부적으로 next() 실행 
app.use(morgan('dev'))
app.use(cookieParser('ywoosang'))
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
// app.use('/',express.static(path.join(__dirname,'public')));
app.use(session({
    resave : false,
    saveUninitialized: false,
    secret :'ywoosang',
    cookie :{
        httpOnly :true,
    },
    // name :'connect.sid',
}))

// 미들웨어들 간 데이터 전송
app.use((req,res,next)=>{
    req.data = 'ywoosang12';
    next(); 
})

app.get('/',(req,res,next)=> {
    console.log(req.data);
    res.send('data received')    
}); 

app.use('/',(req,res,next)=>{
    if(req.session.id) {
        express.static(__dirname,'public')(req,res,next)
    } else {
        next();
    }
});

app.get('/about',(req,res)=>{
    res.send('this is about page')
});

app.get('/setcookie',(req,res)=>{
    const name = 'ywoosang'; 
    console.log(req.cookies); 
    res.cookie('name',encodeURIComponent(name));  
    res.sendFile(path.join(__dirname,'index.html'))
});
app.get('/cookie/:opt',(req,res)=>{
    const option = req.params.opt;
    console.log(option);
    switch(option){
        case 'clear':
            res.clearCookie('name',encodeURIComponent(app.get('cookiename')),{
                httpOnly: true,
                path :'/',
            }) 
            break;
        case 'set':
            res.cookie('name',encodeURIComponent(app.get('cookiename')),{
                httpOnly: true,
                path :'/',
            });
            break;
        default:
            next('unexpected value'); 
    }
    res.sendFile(path.join(__dirname,'index.html'))
})


app.get('/category/go',(req,res)=>{
    res.send('golang');
});
app.get('/category/python',(req,res)=>{
    res.send('python');
}); 
app.get('/category/:name',(req,res)=>{
    res.send(`name is : ${req.params.name}`);
});


app.get('/error',(req,res)=>{
    throw new Error('error!!') ;
});

app.use((req,res,next)=>{
    res.status(200).send('404 not found')
})

app.use((err,req,res,next) => {
    console.error('error 발생',err.name);  
    res.status(200).send('일시적인 오류가 발생했습니다.')
}); 

app.listen(app.get('port'),()=>{ // port 변수 사용 가능  3000 이니까 3000 번포트가 되게됨 
    console.log('express server start');
})
 
 