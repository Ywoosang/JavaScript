/* Built-in
- 값, 연산자, 오브젝트(object) 를 Js 코드를 처리하는 영역에 사전에 만들어 놓은 것
- 사전 처리를 하지 않고 즉시 사용 가능 

빌트인 값 타입 
undefined , Null , Boolean, Number,String,Object

빌트인 연산자(Operator)
+,-,*,/,%,++,--,new 등

빌트인 오브젝트

- Number 오브젝트 
1,2,3 숫자,상수,지수를 처리하는 오브젝트 (소문자 object=> 데이터 처리에 목적) 
이미 key:value 형태로 만들어져 있는것 
- String 오브젝트 
"abc" 와 같은 문자열 분리,연결
-Boolean 오브젝트
true , false
-Object오브젝트
{key:value} 형태
-Array 오브젝트 
[1,2,"A","가나다"] 형태 
-Function 오브젝트
function abc(){} 형태
-Math 오브젝트 
abs(),round() 등의 수학 계산
-Date 오브젝트
연월일,시분초
-JSON 오브젝트
[{"name":"value"}] 형태
서버와 데이터 송수신에 사용 
-RegExp 오브젝트
^,$ 와 같은 정규 표현식
-글로벌(global) 오브젝트
소스 파일 전체에서 하나만 존재 
모든 코드에서 공유, 접근 가능 
전역 객체라고 하면 ,뉘앙스에 차이 있음 
*/
var a = null , b ={} ; 
console.log(typeof a);  //null 과 Object는 모두 object 타입이다.
console.log(typeof b); 
 
var num = Number;
debugger;
 

