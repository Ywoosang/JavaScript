const list = [10,20];
console.log(list[Symbol.iterator]);
//[] 로 생성한 list 에 Symbol.iterator 가 있으므로 ,Array 는 이터러블 오브젝트

const obj = {one : 10, two: 20};
console.log(obj[Symbol.iterator]); //{} 리터럴로 생성한 obj 에 Symbol.iterator 가 없으므로, Object 는 이터러블 오브젝트가 아님.

/*
for 문의 반복과 이터레이션이 차이가 있듯이 
for-in 의 열거와 이터레이션은 차이가 있다.
위 객체는 열거할 수 있지만, 이터레이션이 불가하다.
*/


const list2 = [30,40]; // 리스트 오브젝트를 만듬 
const obj2 = list2[Symbol.iterator](); // () 로 이터레이터를 호출하면 , 이터레이터 오부젝트를 생성하여 반환.  
console.log(obj2.next()); //이터레이터 메소드의 next()
console.log(obj2.next());
console.log(obj2.next());

// {value: 30, done: false} done = 이터레이터 상태 true 면 종료 
// next 로 하나씩 돌리는것 step-by-step 호출할 떄 마다
// value : undefined 더이상 처리할 값이 없다. 

/*
spread : 이터러블 오브젝트를 하나씩 전개 
{key:value} 의 Object 가 이터러블 오브젝트는 아니지만 전개 가능
*/

const list3 = [21,22];
console.log([11,...list3,12]);

const obj3 = {key:50};
console.log({...obj3});

/*
Array spread

spread 대상 배열을 
작성한 위치에 엘리먼트 단위로 분리(전개)
같이 값이 있더라도, 대체되지 않고 전개
*/
const one = [ 11,12];
const result = [11,12,...one];
console.log(result);
console.log(result.length);


/*
String spread

spread 대상 문자열을 
작성한 위치에 문자 단위로 전개 
String spread 작성 형태
*/
const target = "ABC";
console.log([...target]); //["A", "B", "C"] 이와 같이 전개가 된다. 


/*
Object spread
key 같으면 대체함.
*/

const target2 = {stay:20,move:20}; 
const shoot = {stay:10,...target2}; //saty 가 20 으로 대체됨. 
console.log(shoot);

/*
push(...spread)
배열이면, 엘리먼트로 분리하여 첨부하고, 문자열이면 문자 단위로 분리하여 첨부
*/
let result2 = [21,22];
const five = [51,52];
result2.push(...five);
console.log(result2);
result2.push(..."abc");
console.log(result2);

/*
function spread
호출하는 함수의 파라미터에 
spread 대상 작성

처리 순서 및 방법
- 함수가 호출되면 우선, 파라미터의 배열을 엘리먼트 단위로 전개 
- 전개한 순서대로 파라미터 값으로 넘겨 줌 
- 호출받는 함수의 파라미터 순서대로 매핑됨. 10 ->one , 20-> two.. 
*/
function add(one,two,three){
    console.log(one,two,three);
};
const values = [10,20,30];
add(...values); 

/*
rest 파라미터
Syntax : function(param,paramN,...name)
분리하여 받은 파라미터를 배열로 결합
- spread: 분리, rest: 결합

작성 방법 
- 호출받는 함수의 파라미터에 
...에 이어서 파라미터 이름 작성
호출한 함수에서 보낸 순서로 매핑

파라미터와 Rest 파라미터 혼합 사용
*/
function point(ten,...rest){  //rest 에 보내진 것들을 결합한다. 
    console.log(ten); 
    console.log(rest);
};
const values1 = [10,20,30]; //10이 ten 에 들어가고 나머지는 rest 에 들어감
point(...values1); 

/*
Array-like
Object 타입이지만 
- 배열처럼 이터러블 가능한 오브젝트 
- for() 문으로 전개할 수  있음

작성방법 
- 프로퍼티 key 값을 0 부터 1 씩 증가하면서 프로퍼티 값을 작성 => 작성 조건 맞추지 않으면 일반적인 오브젝트가 됨. 
- length 에 전체 프로터피 수 작성

이때 , length 프로퍼티는 전개되지 않음

for ~ in 문으로 전개하면 length 프로퍼티도 전개됨.
*/

const values2 ={0:"가",1:"나",2:"다",length:3};
for(let k=0; k<values2.length; k++){
    console.log(values2[k]);
};


/*
rest 와 arguments 차이 

arguments 오브젝트 
- 파라미터 작성에 관계없이 전체를 설정
- Array-like 형태 
- Array 메소드를 사용할 수 없음 
- __proto__ 가 Object

rest 파라미터 
- 매핑되지 않은 나머지 파라미터만 설정 
- Array 오브젝트 형태 
- Array 메소드를 사용할 수 있음
- ...rest 의 __proto__ 가 Array
*/ 

