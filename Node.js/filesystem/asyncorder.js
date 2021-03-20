/*
자바스크립트에서 동기이면 블로킹이고
비동기이면 논블로킹이라고 보면 된다.

1,2,3,4 순서대로 반드시 찍히는게 아님. 비동기 콜백이기 때문에 2,4,3,1 등 찍히는 순서 다를 수 있다. 
콜백들을 백그라운드로 넘김. => 동시에 실행 되고  테스크큐로 먼저 끝난것들을 넘김 

순서에 맞게 실행하려면 
1. 비동기 유지한채로 (백그라운드로 보내고 보내고..) 작업들 순서대로 하거나 
2 . 동기식으로 실행하거나  (호출한 순간에 다른 작업 못하고 대기)
두가지 방법이 있음 
*/
 
const fs = require('fs').promises;
/* async 로동시성도 살리고 순서도 지킴 */ 
async function main(){
    let data = await fs.readFile('./readme.txt') 
    console.log('1번',data.toString());
    data = await fs.readFile('./readme.txt') 
    console.log('2번',data.toString());
    data = await fs.readFile('./readme.txt') 
    console.log('3번',data.toString());
    data = await fs.readFile('./readme.txt') 
    console.log('4번',data.toString());
}
main();

fs.readFile('./readme.txt')
.then((data)=> {
    console.log('1번',data.toString());
    return fs.readFile('./readme.txt');
})
.catch((err)=>{
    throw err;
})
   