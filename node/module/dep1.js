// dep1 에서 dep2 를 참조하고 dep2 에서 dep1을 참조하는 순환 참조 상황(무한 사이클) 을 막기 위해 
// 순환 참조가 발생하면 빈 객체로 바꿔버린다. 
require('./dep2')

const age = 22; 

module.exports = {
    name :'Ywoosang',
    age 
}; 

console.log(require('./dep2'))