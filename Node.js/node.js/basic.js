const obj = {name:'Ywoosang',age:22};
obj.name = 'ws';
obj.age = 21; 

console.log(obj); 

var won = 100;
var result = '이 쿠키는' +won + '원입니다.'; // 이 쿠키는1000원 입니다. 

//이 쿠키는 1000원 입니다.  처럼 띄어쓰기를 원한 다면

// ${} 이용

const newResult = `이 쿠키는 ${won}원 입니다.`;
console.log(newResult); 

// ES5 객체 표현 방법 
var es5Node = function(){
    console.log('ES5 Node'); 
}
var es = 'ES';
var oldObject = {
    es5Js: function(){
        console.log('ES5 JS');
    },
    es5Node : es5Node
}
oldObject[es+5] = 'Old ES5'; // 'ES'+5 = 'ES5' 
oldObject.es5Js(); // ES5 JS
oldObject.es5Node(); // ES5 Node 
console.log(oldObject.ES5);

// ES6 
/*
훨씬 간결한 문법으로 객체 리터럴 표현 가능
객체의 메서드에 function 을 붙이지 않아도 됌
var es5Node = function(){
{ funcJs : funcJS } 와 같은 것을 { funcJS } 로 축약 가능
[ 변수+값] 등으로 동적 속성명을 객체 속성 명으로 사용 가능
*/

var es6Node = function(){
    console.log('ES5 Node'); 
}
var es = 'ES';
var newObject = {
    es6Js(){
        console.log('ES6 JS');
    },
    es6Node,
    [es+6] : 'New ES6+'
}
newObject.es6Js(); // ES5 JS
newObject.es6Node(); // ES5 Node 
console.log(newObject.ES6);

function add1(x,y){
    return x+y;
}

//화살표 함수 이용하면서 함수 이름 붙이고 싶을 때 
// 변수명으로 이용 
const add2 = (x,y) => {
    return x+y; 
}; 
// 중괄호 다음에  return 나오면 중괄호와 return 생략 가능 
const add3= (x,y) => x+y;
const add4= (x,y) => (x+y);

// 객체를 리턴하는 경우는 소괄호가 필수입니다.
const obj1 = (x,y) => {
    return {x:x,y:y}; 
}
const obj2 = (x,y)=> {
    return {x,y} // 같을 경우 생략한 형태 
}

// const obj2 = (x,y) => {x,y}; 엔진이 함수블럭(body) 을 의미하는 건지 객체 리터럴을 의미하는 건지 알 수 없음
const obj3 = (x,y) => ({x,y}); // 이렇게 ()로 감싸줘야 인식 가능

console.log(obj3(1,2));

// function 

//화살표 함수에서 this

const relationship1 = {
    name :'ywoosang',
    skills : ['Js','Ts','Python'],
    logSkills : function(){
        var that = this;// relationship1 을 가리키는 this 를 that 에 저장
        this.skills.forEach(function(skill){
            // 원래대로라면 this 는 logSkills 스코프. 
            console.log(`${that.name} : ${skill}`);
        });
    }
}

const relationship2 = {
    name :'ywoosang',
    skills : ['Js','Ts','Python'],
    logSkills(){
        // 화살표 함수는 this 가 한단계상위 스코프. 
        // 따라서 별도로 가리키는 this 필요 없음.
        this.skills.forEach((skill)=> {
            console.log(`${this.name} : ${skill}`);
        });
    }
}
// function 이 자기만의 this 를 가질때 화살표 함수로 구현하지 못하므로 function 과 화살표함수 섞어서 사용
// button.addEventListener('click',function(){ console.log(this.textContent)}; 버튼에 적혀있는 단어 
// 만약 화살표 함수라면 this 는 작동을 안함. 
// this 를 쓴다면 함수로
// this 를 쓰지 않는다면 화살표 함수로 
relationship1.logSkills();
relationship2.logSkills();


// 구조분해 할당
// this 가 있는 경우에는 구조분해 할당 쓰지 말기. 인식이 안됌 

// 객체에서 하나씩 꺼내서 값 할당할 바에 한번에 처리하기 
// object 는 키이름과 일치해야 값에 할당 가능 
const example = {a:123,b:{c:135,d:146}};
// const a = example.a; // 123
// const d = example.b.d; // 146
// console.log(a);
// console.log(d); 
 
const {a,b:{d,c:e}} = example; // d:d 생략한 것 
console.log(a); // 123
// console.log(b);  b is not defined 
console.log(d); // 146
console.log(e); // 135 


// 배열에서 하나씩 꺼내서 값 할당하지 않고 한번에 처리 
const arr = [1,2,3,4,5];
// const x= arr[0] 
// const y = arr[1]
// 배열은 자리가 똑같아야 건너뛰면서 할당 가능 
const [x,y,,,z] = arr; 

// 클래스
// 프로토타입 문법을 깔끔하게 작성할 수 있는 Class 문법 도입
// 