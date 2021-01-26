const express = require('express');
const path  = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

// require 로 불러와서 sequelize 에 sync 해줌 
const { sequelize } = require('./models');

const app = express();

app.set('port',process.env.PORT || 3001);
app.set('view engine','html');
// db 연결 부분 
nunjucks.configure('views',{
    express : app,
    watch: true, 
}); 
// 데이터 베이스 연결 sequelize.sync 노드에서 시퀄라이즈 통해 mysql 연결 
// sync 반드시 호출해 주어야만 연결이 됨. 
sequelize.sync({ force : false})
.then(()=> {
    console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
    console.error(err); 
})
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended : true})); 

app.listen(app.get('port'),()=>{
    console.log('express start');
})