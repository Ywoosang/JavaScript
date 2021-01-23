require('./dep1')
console.log(require('./dep1')); //{}  순환 참조라서 빈 객체로 바꿔버림 pro
