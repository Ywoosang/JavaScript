
let sports = "축구"; 
sports = "농구";
console.log(sports);
// let sports = "탁구" // 에러 
{
    let sports = "배구";
    console.log(sports); 
}; 


var node = document.getElementsByClassName('show1')[0];
for(var a=0; a< node.children.length; a++){
    node.children[a].onclick = function(event){
        event.target.style.backgroundColor = "yellow"; //event.target 을 이용하여 이벤트 구현 가능
        console.log(a)
    };
}
/*
1.어떤 것을 클릭하더라도 , 항상 for 문이 끝났을 때의 값인 3 을 출력합니다. 
2.var k =0 ; 에서 k 변수의 스코프는 함수입니다.
*/

var node = document.getElementsByClassName('show2')[0];
for(let a=0; a< node.children.length; a++){
    node.children[a].onclick = function(event){
        event.target.style.backgroundColor = "yellow";
        console.log(a)
    };
}
/* 
for 문은 돌아가면서 아래의 코드를 실행할 수 있는 상태로 만드는것.!!!! 

1. var k=0; 을 let k=0; 으로 바꿈 
2. 이벤트를 설정할 때의 k 값을 출력 
 

for 문 안이 개당 1개  블록이라고 생각하고 
아래처럼 풀어써보면, 블록별로 다르게 설정이 된다는 것을 쉽게 이해 가능. 
{

    let k = 0;

    node.children[k].onclick = function(event) {

      event.target.style.backgroundColor = "yellow";

      console.log(k);

    }

  }

  {

    let k = 1;

    node.children[k].onclick = function(event) {

      event.target.style.backgroundColor = "yellow";

      console.log(k);

    }

  }

  {

    let k = 2;

    node.children[k].onclick = function(event) {

      event.target.style.backgroundColor = "yellow";

      console.log(k);

    }

 }

 */
 
var globalvar = "글로벌" ;
let globallet = "블록";
console.log(this.globalvar,this.globallet);
/*
let 으로 선언한 변수는 Global 이 아니라 Script 에 가 있다. 

Script
 globallet: "블록" 
Global 
 globalvar: "글로벌"
*/

const name = "우상";
try{
    name = "우상2";
}catch(e){
    console.log("const 할당 불가")
}


const obj = {
    name : "우상",
    age : "21",
    school :"KHU"
};
obj['age'] = 22; 
console.log(obj);

try{
    obj = {val : "전체바꿈"};
}catch(e){
    console.log(e);
    console.log("전체 바꿀 수 없음");
};

// const point = function(param){
//     return {book:param} 
// };
const point = param => ({book:param}) ;
const result = point("책");

for (const key in result){
    console.log(key+":"+result[key]);
};

/*함수안 this 의 범위는 function 을 지우고, 해당 this 가 있는곳이라고 생각.*/
 
var newpoint = 300; //let 이나 const 쓰면 this로 읽어올 수 없다. => 블록 레벨 스코프를 가지고 Script 에저장됨. 글로벌에 안감.  
const newobj = { 
    getPoint :function(){
        console.log(this.newpoint) //this 는 newobj 안이므로, new point 가 없음
    },  //undefinde 반환
    arrowgetPoint : ()=> console.log(this.newpoint) //화살표 함수로는 this로 global 참조 가능 
};
newobj.getPoint();
newobj.arrowgetPoint(); 
 
 
const newfunc = function(){ 
const getPoint = function(){
    console.log(newpoint);
};
    const arrowgetPoint = () => console.log(this.newpoint);
getPoint();
arrowgetPoint();
};
newfunc()