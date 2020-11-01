"use strict";
//Number 파라미터 값을 Number 타입으로 변환
// 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
console.log("Number()");
console.log(Number("123")+500);
console.log(Number("ABC")); // 변환한 술 없으면 NaN 반환 
console.log("123"+500)//형변환 없으면 string으로 변환되어 붙음
console.log(Number(undefined));
console.log(null);
console.log(true);

//상수는 값을 변경, 삭제 불가 영문 대문자사용이 관계  
console.log("Number 상수"); 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);



/* new 연산자
constructor : 생성자 
파라미터 : 값 opt
반환 : 생성한 인스턴스 

- 오브젝트로 인스턴스를 생성하여 반환 
원본을 복사하는 개념 
new 연산자를 사용하면 인스턴스
코딩 관례로 첫 문자를 대문자로 작성 
- 인스턴스 생성 목적 
인스턴스마다 값을 갖기 위한 것 */

 // new 연산자를 사용하면 함수로 호출되는데 , 이때 호출되는 것을 생성자(constructor)라 한다.
// => number 함수라 하지않고 생성자라 함  
//인스턴스 타입은 소문자 object  ※대문자 Object는 key vlaue 형태의 프로퍼티 
console.log("New 연산자");
var obj = new Number(); // 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환
console.log(typeof obj);  
var oneObj = new Number("123"); //생성한 인스턴스 oneObj에 값을 저장 
var twoObj = new Number("456");
console.log(oneObj.valueOf()); //값만 다르게 가져감 
console.log(twoObj.valueOf()); //원본을 복사해서 각자 따로 기능하도록


//new Number() 빌트인 Number 오브젝트로 새로운 Number 인스턴스를 생성
console.log("new Number()");
var obj = new Number("123")
console.log(obj.valueOf()); //valueof 인스턴스에 설정된 값을 반환


/*프리미티브 값 : 언어에 있어 가장 낮은 단계의 값. 더이상 분해.전개 불가
프리미티브 타입
Number,String,Boolean : 인스턴스 생성 가능 
Null,Undefined : 인스턴스 생성 불가
Object 는 프리미티브 값을 제공하지 않음 
*/
console.log("프리미티브 값"); 
window.onload = function(){ //local 로 읽어주려면 이걸 써야함 window.onload = function(){} 
var point = "123";   
var book = "책" ;
var obj = {book:"책"};
var instance = new Number(456);
};

/*
인스턴스의 프리미티브 값
var obj = new Number(123);
-인스턴스를 생성하면 
파라미터 값을 인스턴스의  프리미티브 값을 설정
[[PrimitiveValue]]: 456  
- 프리미티브 값을 갖는 오브젝트 => [[prinitiveValue]] : 값 만들어지는
Boolean,Date,Number,String 
*/
console.log("인스턴스의 프리미티브 값 ");
var obj = new Number(123);
console.log(obj+200); //인스턴스와 숫자 값을 더하면 인스턴스의 프리미티브 값에 값을 더한다.
var obj2 = new Number("456"); 
console.log(Number(obj2)+200); 
console.log(obj2+200);

//valueof() 인스턴스의 프리미티브 값 반환
console.log("valueof()");
console.log(obj.valueOf());


console.log("toString()");
var value = 20;
console.log(20=== value.toString()); // 타입이 다르므로 false 
console.log(value.toString(16));// 20을 16 진수로 변환 
console.log(20..toString()); //2번째 . =>값과 함수를 구분하는.  1번째. => 20.0 에서 0을 작성하지 않은 것과 같다. 
//즉 20.0으로 작성해야 할 것을 20.으로 표기한것 20.tostring() 으로 하면 에러
console.log(21..toString());


//지수 표기 => 숫자를 지수 표기로 변환하여 문자열로 변환 
console.log("toExponential()");
var value = 1234;
console.log(value.toExponential());

console.log("toFixed");
var value = 1234.567;
console.log(value.toFixed(2));  //3번째자리 반올림
console.log(value.toFixed());  //1번째 자리 반올림
console.log(value.toFixed(5)); //넘어가면 0 붙임 
