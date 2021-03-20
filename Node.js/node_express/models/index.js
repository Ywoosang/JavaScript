const Sequelize = require('sequelize');
// user 테이블과 comment 테이블 다 만들었으므로 불러오고 
const User = require('./user');
const Comment = require('./comment'); 

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
 
const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
// db.Sequelize = Sequelize; 대문자는 시퀄라이즈 생성자 

// 테이블 생성 
db.User = User;
db.Comment = Comment; 

User.init(sequelize); // init 하면서 sequelize 넣어줌 연결 객체에 연결. user.js 보면 init 있고 아래 sequelize 있음.  
Comment.init(sequelize); 


module.exports = db;
