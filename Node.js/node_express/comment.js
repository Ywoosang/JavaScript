const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            /*
            commenter 컬럼 시퀄라이즈에서 작성 안했음.
            알아서 작성해주기 때문 
            테이블 들 간 관계  

            */
            // commenter :{
            //     type : Sequelize.INTEGER,
            //     allowNull :false
            // },
            comment :{ 
                type :Sequelize.STRING(100),
                allowNull : false 
            },
            created_at :{
                type : Sequelize.Date,
                allowNull :true,
                defaultValue :Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps : false,
            modelName : 'Comment',
            tableName : 'comments',
            paranoid : false,
            charset : 'utfmb4',
            collate : 'utfmb4_general_ci',

        }); 
    }; 
    static associate(db){
        // belongsTo 일 때는 sourcekey 가 아니라 targetkey 임
        // target(남)   targerkey 는 남의 키 즉 user 의 key 임 
        // forignkey 는 이름이 똑같음 user 입장에서도 forignKey 가 commenter,
        // commet 입장에서도 forignkey 가 commenter 
        // 다만 forignKey 가 어디로 가는지는 belongsTo 컬럼이 있는 얘한테 forignKey 가 추가 즉 user 에 commenter 칼럼이 추가 
        db.Comment.belongsTo(db.User,{forignKey: 'commenter',targetKey:'id'}); 
    } 
   
}