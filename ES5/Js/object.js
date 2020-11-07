/*property 
{name:value} 의 형태. 
name 에 프로퍼티 이름/키를 작성
value 에 Js 에서 지원하는 타입 작성
{a:123,b="ABC",c:true,d:{},e:function(){코드}}*/

var book={ 
    title: "책",
    point:{
        ten: 10,
        bonus : 200,
        promotion : function(){
    }
}
};
//오브젝트에 프로퍼티 추가, 변경
var obj = {};
obj.abc = "ABC"; // 없으면 추가 있으면 변경 
obj['num']= 123;  // 문자열로 프로퍼티 이름을 작성하고 오름쪽에 값=> 추가
var varName = "title";
obj[varName] = "HTML책";
console.log(obj);

var book= {};
book.title="JS책" ;
console.log(book);

//object 프로퍼티 열거 
//프로퍼티 값 추출 
//오브젝트에 프로퍼티 이름이 있으면 프로퍼티 값 반환 없으면 undefined

/* for~in 문 
오브젝트에서 프로퍼티를 열거 
형태 :
for(변수 in 오브젝트) 문장;
for(표현식 in 오브젝트) 문장;
for(var item in sports){코드} 
프로퍼티 이름이 item 에 설정
sport[item] 으로 프로퍼티 값을 구함 
프로퍼티를 작성한 순서대로 읽혀짐 (ES5 부터)
*/

var sports = {
    soccer : "축구",
    baseball : "야구",
    basketball : "농구"
};
for(var item in sports){
    console.log(item); //item 에 프로퍼티 이름이 설정
    console.log(sports[item]); //프로퍼티 값을 설정
}

/*
자바스크립트 오브젝트

빌트인 오브젝트 
-사전에 만들어 놓은 오브젝트
ex)빌트인 Number, String 오브젝트... 

네이티브 오브젝트
- Js 스펙에서 정의한 오브젝트
-빌트인 오브젝트도포함. 여기에 Js 코드를 실행할때 만드는 오브젝터 
ex) Argument 오브젝트(함수가 호출되면 함수 안에서 만들고 함수를 빠져나오면 엔진이 자동적으로 지움)

호스트 오브젝트
- 빌트인,네이티브 오브젝트를 제외한 오브젝트
ex) window,DOM 오브젝트
Js는 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하며 이를 제어
DOM 오브젝트 => 마우스 클릭했을 때 클릭한 것을 인식 
querySelector() 는 DOM 함수 
DOM 에서 제공하는 오브젝트를 호스트(HOST) 오브젝트라고 부름.
*/
var node = document.querySelector("div");
console.log(node.nodeName); 

/*강좌에서 오브젝트
=> new 연산자를 사용하지 않고 
빌트인 오브젝트로 만든 오브젝트를 지칭
new 연산자를 사용하면 인스턴스라 함

var abc = {}; 와 (오브젝트 리터럴 표기)
var abc= Object() 는 같음
*/

var newObj = new Object("111");
console.log(newObj); //string
console.log((typeof newObj));
console.log(newObj+100); 
var newObj = new Object();
console.log(newObj); //값을 갖지 않는 Object 인스턴스 생성 


var obj = Object({name:"value"}); 
var obj2 ={name :"value"};
console.log(obj);
console.log(obj);
console.log(obj instanceof Object);

/*
빌트인 오브젝트 구조
-오브젝트.prototype
있으면 인스턴스 생성 가능
프로퍼티를 연결하는 오브젝트
-오브젝트.prototype.constructor
오브젝트의 생성자
-오브젝트.prototype.method
메소드 이름과 함수 작성

함수 
-오브젝트에 연결
-Object.create()

메소드
-오브젝트의 prototype에 연결
-Object.prototype.toString()

인스턴스를 사용하며 메소드를 호출할 때는 prototype을 작성하지 않는다.
prototype에 연결된 메소드로 인스턴스를 생성하기 때문

함수는 파라미터에 값을 작성하고, 메소드는 메소드 앞에 값을 작성
함수 앞에 작성한 데이터의 타입에 따라서 빌트인 오브젝트로 인스턴스를 만들고
거기에 있는 메소드를 호출 
*/
console.log(String.fromCharCode(49,65)); //자바스크립트 엔진이 인스턴스를 만들어서 호출

console.log(Object.create); //object에 create가 존재하므로 함수 출력
console.log(Object.prototype.create); //object.prototype 에 create 가 존재하지 않으므로 undefined
console.log(Object.prototype.toString); //object.prototype 에 toString이 존재하므로 함수 출력
console.log(obj.toString); // prototype 작성 X 



var obj = {value : undefined} 
var own = obj.hasOwnProperty("value")
console.log(own); 
/*
빌트인 Object 특징
인스턴스를 만들 수 있는 모든 빌트인 오브젝트의 __proto__ 에 
Object.prototype 의 6개 메소드가 설정됨.
따라서 빌트인 오브젝트로 만든 인스턴스에도 설정됨
Object.prototype */


//toString() 인스턴스 [타입]을 문자열로 표시 
var point = {book:"책"};
console.log(point.toString()); //to string 앞에 인스턴스를 작성 
var obj = new Number(123);
console.log(Object.prototype.toString.call(obj));



/*
빌트인 function 오브젝트 

new Function() = Function()
파라미터작성 => 마지막 파라미터에 함수에서 실행할 함수 코드 작성
마지막을 제외한 파라마터에 이름 작성

파라미터를 작성하지 않으면, 함수 코드가 없는 Function 인스턴스 생성
*/

var obj = new Function("one","two","return one+two");
console.log(obj(100,200)); 

/*
함수 생명 주기
-함수 호출하면서 파라미터 값을 넘겨 줌 
-함수 코드 실행
Js 엔진 컨트롤(현재 실행하고 있는 위치) 이 함수의 처음으로 이동 
파라미터 이름에 넘겨 받은 파라미터값 매핑
함수 코드 실행
retrun 작성에 관계없이 반환 값을 갖고 함수를 호출한 곳으로 돌아감
*/
function addTwo(one,two){
    return one+two;
};
var a = addTwo('123',"234");
console.log(a); 
console.log(addTwo.length); //addTwo 는 function 오브젝트 이므로

/*
함수 선언문 
Function Declaration 
function getBook(book){코드} 

함수 표현식 
Function Expression
var getBook = function(book){코드}
엔진이 function 키워드를 만나면 function오브젝트를 생성하고 그것을 getbook 에 할당
*/

function add(a,b){
    return a+b;
};
var add = function(a,b){
    return a+b; 
}
/*
var name = function abc(){} 
식별자 위치의 함수 이름은 생략 가능 
abc 가 식별자 위치의 함수 이름임.
*/ 


/*
재귀함수
함수 안에서 자신을 또 호출하면서 루프가 돈다 
102 가 되면 return 
함수를 빠져나가는 코드를 작성해야 한다. 
*/
var getBook = function inside(value){
    if (value === 102 || value >=110){
        return value;
    };
    console.log(value);
    return inside(value +1)
}; 
getBook(103); 


/*
call 
object : 호출할 함수 이름 
파라미터 : this 로 참조할 오브젝트, 호출된 함수로 넘겨줄 파라미터 opt
반환 : 호출된 함수에서 반환한 값
getTotal.call(this,10,20);
첫 번째 파라미터 
-호출된 함수에서 this 로 참조할 오브젝트
-일반적으로 this 사용, 다른 오브젝트 작성 가능
*/
var value ={one:10,two:20};
function getTotal1(){
    return this.one + this.two; //this는 첫번째 파라미터로 넘겨준 value, 즉 {one:10.two:20}을 참조함
     //value.one + value.two 와 같음 
};
var result = getTotal1.call(value) ;
//call 메서드의 첫번째 파라미터는 호출된 함수에서 this 키워드를 사용해서 참조한다. 
console.log("값:",result);

function addNum(one,two){
    return one + two ; 
};
var result = addNum.call(this,10,20);
console.log(result);



/*
apply()
object : 호출할 함수 이름 
파라미터 : this 로 참조할 오브젝트, [호출된 함수로 넘겨줄 파라미터 opt]
반환 : 호출된 함수에서 반환한 값
파라미터 수가 유동적일 때 사용
두 번째 파라미터에 배열 사용

call() 은 파라미터 수가 고정되어 있을 때 사용 
*/
function getTotal(one,two){
    return one + two ;
};
var result = getTotal.apply(this,[10,20,30]);
console.log("apply사용:",result);

/*
야규먼트 오브젝트
함수가 호출되어 함수 안으로 이동했을 때 
arguments 이름으로 생성되는 오브젝트 

함수를 호출한 곳에서 넘겨 준 값을 순서대로 저장 

호출된 함수에 파라미터를 작성한 경우 
- 호출된 함수의 파라미터에도 값을 설정하고 , 아규먼트 오브젝트에도 저장
- apply() 와 아규먼트 오브젝트 함께 쓸 수 있음

첫 번째 파라미터 one 에 10 이 들어가고 아규먼트에 10,20,30들어감 
*/
function makeSum(one){
    console.log("아규먼트 길이는:",arguments.length);
    return one+ arguments[0]+ arguments[1] + arguments[2];
};
var result = makeSum.apply(this,[10,20,30]); //참조할 대상은 makeSum
console.log("결과:",result); 


function makeTotalArray(){
    let arr = arguments;
    return arr;
}
const getArguments = makeTotalArray.apply(this,['회원1','회원2','회원3','회원4']);
console.log(arr);



/* 
사용 사례: 사람마다 선택한 수가 유동적일 경우 
apply() 와 아규먼트 오브젝트로 대응할 수 있다. 
함수 밖에서는 아규먼트 오브젝트를 접근할 수 없다. 
*/

function testApp(){
    var cnt= 0 ;
    var length = arguments.length;
    for(var i=0; i<length; i++){
        cnt += arguments[i] ;
    };
    return cnt;
};
var testResult = testApp.apply(this,[1,2,3,4,5]); //배열이 길이가 얼마든 모두 값을 더할 수 있음
console.log(testResult); 

/*global 오브젝트
모든 <script>를 통해 하나만 존재.
- new 연산자로 인스턴스 생성 불가 => 하나만 존재하기 때문에 생성할 팔요 없음
- 모든 코드에서 공유 
이름(Global) 은 있지만 
- 오브젝트 실체가 없음 
- 오브젝트를 작성(사용) 할 수 없음.

Globbal 오브젝트의 함수,변수를 Global 함수 Global 변수 라고 부름
전역 객체라고 부르기도 하지만 
-Global 은 오브젝트 이름 
-강좌에서는 Global(글로벌) 오브젝트로 표기

프로퍼티 앞에 오브젝트 이름을 작성해야 하지만 글로벌 오브젝트는
실체가 없으므로 프로퍼티 이름만 작성
*/
console.log(window.NaN);
console.log(Infinity);
console.log(undefined);

/*글로벌과 window 오브젝트 주체
- 글로벌 오브젝트는 JS 가 주체
- window 오브젝트는 window 가 주체
주체는 다르지만, 글로벌 오브젝틔의 프로퍼티와 함수가 window 오브젝트에 설정됨
*/
console.log(parseInt("123px"));
console.log(parseInt("123AB34C56")); //123은 변환하고, 그 뒤는 자름 
console.log(parseInt(" 0123")); //0 또는 빈 문자열을 제외시킴
console.log(parseFloat("-123.12"));//String 타입이지만 소수를 포함해 변환
console.log(parseInt("     123px  ")); // 양쪽 공백 지움 

/* 
NaN 여부 
*/
console.log(isNaN("ABC"));
console.log("NaN과NaN 비교 ES5:",NaN === NaN);
console.log("NaN과NaN 비교 ES6:",Object.is(NaN,NaN));



/*
defineProperty()
대상 오브젝트에 프로퍼티 추가  도는 프로퍼티 속성 변경
프로퍼티마다 상태를 갖고 있음 
- 상태 : 변경/ 삭제 /열거 가능 여부 
- 프로퍼티를 추가할 때 상태 결정
- 1. 첫 번째 파라미터에 프로퍼티를 추가할 오브젝트 작성
- 2. 두 번째 파라미터에 프로퍼티 이름을 작성 (객체로 여러개)
- 3. 세 번째 파라미터 {value:"Js북"} 에서 
 -value 는 프로퍼티 값을 나타는 속성!
 -"JS북" 은 속성 값으로 실행 결과 처럼 프로퍼티 book 의 값이 됨. 
*/
var obj = {};
Object.defineProperty(obj,"book",{ 
    value:"JS북",
    enumerable : true //열거 가능 여부 
});
console.log(obj); 


/* 
{} 의 default 상태는 true
defineProperty의 default 상태는 false임.
즉 , 변경/삭제/열거가 가능하려면 enumerable : true 등 별도의 설정 필요
*/

var obj = {} ;
Object.defineProperties(obj,{
    soccer : {
        value :"축구", //value 속성 
        enumerable :true
    },
    baseball : {
        value : "야구",
        enumerable :false  //flase 로 설정하면 for 문에서 열거가 불가 
    },
    basketball :{ 
        value : "농구",
        enumerable : true,
        configurable: true
    }
});
for(var name in obj){
    console.log(name+":"+obj[name]);
};
delete obj.soccor;
console.log(obj.soccor);


/*
writeable : true => 변경 가능
*/
var obj = {};
Object.defineProperty(obj,"computer",{
    value : "com1",
    writable:true 
});
console.log(obj.computer);
obj.computer = "변경가능" //원래는 obj.computer 이 com1   
console.log(obj.computer);
 

/*
getter, setter

getter : oop 용어
var result = obj.book; 코드를 만나면 
- obj.book 의 get 함수가 호출되며 
- get 함수에서 "JS책" 을 반환
- 반환된 "JS책" 을 result 변수에 할당
obj.book.get() 처럼 함수로 호출하면 에러 발생
*/
/*
form.id = "아이디" ; 코드를 만나면
- form.book 의 set 함수를 호출하면서 "아이디" 를 파라미터 값으로 넘겨줌
- data 의 title(프로퍼티명) 프로퍼티에 "아이디" 를 설정 
form.id; 코드를 만나면
- obj .book 의 get 함수가 호출되며
- get 함수에서 data.title 값을 반환
- setter 에서 설정한 "아이디" 반환
*/
var form = {}, data={};
Object.defineProperty(form,"id",{
    get : function(){
        return data.title
    },
    set: function(param){
        data.title = param; //data 에 
    }
});
 
form.id = "아이디"; //set 함수를 호출하면서 "비밀번호" 를 파라미터 값으로 넘겨줌 ;
console.log(form.id); 


/*
getPrototypeOf()
파라미터 : 대상 인스턴스
파라미터의 prototype 에 연결된 프로퍼티 반환
*/
function Book(point){
    this.point = point; //Book 객체에 point 설정 
};
 
Book.prototype.getPoint = function(){}; //get point 와 set point 를 연결 
Book.prototype.setPoint = function(){};

var obj = new Book(100); //new 연산자로 인스턴스 만듬 , obj에 할당
var result = Object.getPrototypeOf(obj); // 파라미터에 생성한 인스턴스 넣음
//그러면 , prototype 에 연결되어 있는 getpoint 와 setpoint 가 반환 된다.
for(var key in result){
    console.log(key+":"+result[key]);
};
//this.point 는 prototype 에 연결되어 있지 않으므로 , 반환하지 않습니다.

/*
참고 : 
getPrototypeOf() 는 prototype 에 있는걸 가져오는데 ,
ES6 스펙인 
setPrototypeOf() 는 __proto__ 에 설정
*/

/*
getOwnPropertyNames()
오브젝트의 프로퍼티 이름을 배열로 반환 
열거 가능 여부를 체크하지 않음!!! 
자신이 만든 프로퍼티가 대상
- 다른 오브젝트에서 받은 프로퍼티는 제외

keys()
열거 가능 프로퍼티 이름 반환! => enumerable :true 인것만 
*/ 
window.onload = function(){
    var obj = {id:"Ywoosang"};
    Object.defineProperties(obj,{
        passwd : {value:"yd1234"},
        Usernum : {value :"1"} 
    });
    var names = Object.getOwnPropertyNames(obj);
    for (var k = 0; k<names.length; k++){
        console.log(names[k]); //names는 배열로 반환하므로
    }
    debugger;

};