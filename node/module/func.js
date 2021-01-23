// 다른 파일에 있는것 같져오려면 require 을 한다. 
const value = require("./var")

// { odd: '홀수', even: '짝수' }  오브젝트 형식으로 담겨있다. 

// 구조분해 할당이 가능하다 {odd:odd,even:even}
const {odd,even} = require("./var")
// 자바스크립트 모듈시스템에서는 import {odd,even} from './var'  에 해당 

function checkOddorEven(number){
    if(number % 2){
        return odd 
    }else {
        return even
    }
}

console.log(checkOddorEven(7))


// 가져온 것도 다시 export 가능하다.
module.exports = {
    checkOddorEven,
    even,
    odd
}
// 자바스크립트에서는 export default { checkOddorEven, even,odd}

