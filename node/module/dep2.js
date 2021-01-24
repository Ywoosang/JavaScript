require('./dep1')

const dep2 = 'dep2'; 

module.exports = {
    dep2: dep2
}

console.log('dep1 :',require('./dep1')); //{}  순환 참조라서 빈 객체로 바꿔버림 pro
