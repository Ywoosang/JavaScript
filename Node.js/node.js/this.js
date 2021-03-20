console.log(this); // node 전역 객체 global ?   => anonymous 의 this 는 global 이 아니다. 
// {} 출력 됌.

// function 마다 this 가 새로 생김. 
// 화살표 함수 쓰면 부모 this 물려받는것 똑같음
// 전역 스코프의 this 만 {} 임 
console.log(this === module.exports); // true 

function a() {
    console.log(this === global); // ture   function 안 this 만 전역 스코프를 가진다. 
}

a();

const b = ()=> console.log(this==global,this); //화살표함수 안 this 는 {}     -> global 이 아니다  
b(); 


