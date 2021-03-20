const Sequelize = require('sequelize');

// User : 모델 이름 (테이블)
// 클래스 안 static init 만들기 
// returnsuper.init  기본꼴 
// init 에 컬럼들 정의 해 놓음. 
module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // 시퀄라이즈는 여러개 db를 동시에 지원하기 때문에 db 마다 표현하는 방법이 달라서
            // 모두 지원할 수 있도록 mysql 과 자료형이 약간 다름 
            // 시퀄라이즈는 id 를 자동으로 넣어주기 때문에 아래 생략 가능 
            // id : {
            //     type : Sequelize.INTEGER, // integer => 
            //     primaryKey : true,
            //     autoIncrement :true, 
            // },
            name : {
                type : Sequelize.STRING(20), // varchar => string 
                allowNull : false,
                unique:true,
            },
            age :{
                type :Sequelize.INTEGER.UNSIGNED,
                allowNull : false,
            },
            married :{
                type : Sequelize.BOOLEAN, // 1/0 =>true false  
                allowNull : false,
            },
            comment :{
                type :Sequelize.TEXT,
                allowNull: true
            },
            created_at :{ 
                type : Sequelize.DATE,// datetime => date   date => DateOnly 
                allowNull : false,
                defaultValue : Sequelize.NOW, // now() => Sequelize.NOW 
            }, 
            // timestamps 가 true 면 createdAt, updatedAt 두개를 같이 넣어주는 것
            // 생성 할 때 createdAt 이 현재 시간이 되고 업데이트 할 때마다 updatedAt 이 수정한 시간으로 자동으로 바뀐다. 
        },{ // 첫 번쨰 인수가 컬럼 정의 두 번째 인수는 모델에 대한 설정
            // 다음 예제부터 timestemp true 로 해서 기능 활용
            //위는 created at 을 직접 만든것 
            sequelize, // 모델과 mysql 과의 연결 
            timestamps : false,
            underscored : false,
            paranoid : false, 
            modelName :'User',
            tableName :'users',
            charset : 'utf8',
            collate : 'utf8_general_ci'
        });
    };
    static associations(db) {
        // Comment 라는 테이블에서 commenter (Comment 테이블의 컬럼) 가 현재 테이블(user) 의 id 를 참조하고 있다. 
        db.User.hasMany(db.Comment,{ forignKey : 'commenter',sourceKey : 'id'});
    };
}