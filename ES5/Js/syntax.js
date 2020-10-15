var hello = "안녕하세요"; 
document.body.innerText  = hello ; 

// 의미를 부여하여 변수 이름 작명 : 시멘틱 Semantic 
// 변수 이름은 포괄적이지 않고 구체적으로
// 콤마를 이용해서 변수 여러개 선언,할당 가능 => 세미콜론 기준이 한 문장
var book = "책" , point  = 123,
point = 789; // 재할당

// 같은 값 할당 => 권장되는 형태는 아님. 값이 연동되는 경우도 있음 
var point = amount = 123 ;  
document.body.innerText = amount ; 

// 소괄호 안에 작성된 값을 콘솔에 출력 
console.log(1+2) ; 
// 정수와 실수를 구분하지 않기 때문에  두개 더하기 가능
console.log(0.123+12);

var ONE = 123; //상수 변수로 사용하겠다 (대문자) 선언 => 값을 바꾸지 않겠다는 시멘틱 선언
ONE = 456;
console.log(ONE);

//typeof 연산자
var point = 122 , book ="책" ; 
console.log(typeof point);
console.log(typeof book);

//Number 타입의 특수한 값 3개 = >타입은 number 임. 프로그램이 죽지 않도록 
//숫자가 아니라는 값을 설정해 놓은 것  
var point = 1*"A" ;
console.log(point)
var inf = 1/0 ;
console.log(inf); 


//Undefined(대문자) => 타입임
//undefined(소문자) => 값이 할당되지 않았다는 시맨틱
var point = undefined;
console.log(point);

//null 은 의도적으로 값을 할당해야 null 이 된다. 

var nom = null;
console.log(nom);
console.log(typeof nom);

//Objext 형태 {name : value} 형태 
//프로퍼티(property) => name 과 value 하나를 지칭
// Object 는 프로퍼티 집합 

var book= { 
    '책1': 'book1',
    '책2' : 'book2'
};  

console.log(book);



// 후치 연산자 문장을 수행한 후에 증가 => 세미콜론 다음 1 증가
var one  =1 ;
var value = one ++ +3; 
console.log(one,value); // 4

// 전치 연산자 => 표현식을 평가하기 전에 증가. 표현식에서 증가된 값을 사용
var one =1;
var value = ++one +3;
console.log(one,value); //5

//! 연산자
var value = 'A' ;
console.log(!'A');  


// >연산자 => string 타입 비교 
console.log(1<"A"); //한 쪽이 String 타입이면 false 반환
console.log("A"<"a"); //양 쪽이 모두 String 타입이면 유니코드 사전 순서로 비교
console.log("가"<"다"); //sort 할때 씀  가나다순 분류
console.log("A07"<"A21"); // 문자 하나씩 비교 같으면 다음으로 .. 

// == 연산자 : 값 타입은 비교하지 않는다 
var ud; 
console.log(1=="1"); //"문자:숫자","숫자:문자"일 때 문자 타입을 숫자 타입으로 변환하여 비교한다.
console.log(ud==undefined); //양쪽이 모두 undefined 이므로 true
console.log(ud==undefined); //양쪽이 모두 undefined 이므로 true
console.log(ud == null);

//부등 연산자 != a!=와 !(a == b) 는 같다.
//일치 연산자 왼쪽과 오른 쪽의 값과 타입이 모두 같으면 true
console.log(1 ==='1'); 

var ud;
console.log(ud == null); // 동등 연산자로 비교하면 true 
console.log(ud === null); // 일치 연산자로 비교하면 타입이 다르므로 false
console.log(ud !==  null); //값 또는 타입이 다르면 true

// || or 연산자. 왼쪽 결과가 true 이면 오른쪽은 비교하지 않음
var value= 0 ,zero = 0 , two = 2; // true 가 아니라 true가 되는 변수값을 반환 
console.log(value || zero || two); // false || false || ture  => 2 반환 
console.log(zero || value);  //마지막까지 비교하였는데 모두가 false 이면 false 가 아니라 마지막 변수값을 반환한다
console.log(value ===0 || three ===3); // three 는 정의되지 않았는데, 왼쪽이 true 이면 무조건 true 로 받아들이므로 오류 X

// &&  AND 연산자 => 왼족 결과가 false 이며 오른쪽은 비교하지 않음
var one = 1 , two =2;
console.log(one && two)//마지막 변수값를 반환

var one =1 , zero = 0 ;
console.log(one && zero && nine);// zero 변수값이 0 이므로, false ,false 이므로 오른쪽을 비교하지 않고 
//zero 변수값인 0을 반환 

//조건 연산자 exp > exp-1 : exp-1 3항 연산자 
//exp 위치의 표현식을 먼저 평가 true 이면 exp-1 의 결과 반환
//flase 이면 exp-2 의 결과 반환

console.log( 1==1 ? "같음" : "다름")




