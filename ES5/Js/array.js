/* 
빌트인 오브젝트 
Array(배열) 형태
[123,"ABC","가나다"]
대괄호 안에 콤마로 구분하여 값 작성

배열 엘리먼트 Element
[123,"ABC"] 에서 123, "ABC" 각각을 엘리먼트 또는 요소라고 부름
엘리먼트 위치를 인덱스라고 부름
엘리먼트 작성이 순서를 갖고 있음
*/

// 모두 같은 의미 
var book = new Array();
var book = Array();
var book = [];

//대괄호 수가 배열의 차원을 결정한다.
var list = [12,34,56];
for (var k= 0; k < list.length; k++){
    console.log(list[k]);
}; //1차원 배열 순서대로 

var inList;
var list = [[1,2],[3,4],[5,6]];
for(var k=0; k< list.length; k++){
    inList = list[k]; 
    for(var i=0; i<inList.length; i++){
        console.log(inList[i]);
    }
};  //차원 배열 순서대로 출력

//3차원 배열일 경우 => 함수로 빼서 처리한다. 앞에서 함수로 2차원으로 내려가도록 정리한다.

/*array 오브젝트 프로퍼티
unshift() : 배열 처음에 엘리먼트 삽입
push() : 배열 끝에 엘리먼트 첨부
concat() : 배열 끝에 값을 연결
slice(): 인덱스 범위의 엘리먼트를 복사 
join(분리자) : 엘리먼트와 분리자를 결합하여 반환
toString(): 엘리먼트를 문자열로 연결하여 반환
shift():첫 번쨰 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
sort(): 엘리먼트 값을 Unicode 순서로 분류하여 반환
reverse(): 엘리먼트 위치를 역순으로 바꾸어 반환 
splice(): 엘리먼트를 삭제하고 새로운 엘리먼트를 삽입, 삭제한 엘리먼트 반환
*/
var two = new Array([10,20]);
console.log(two); 

var one = new Array(10,20);
console.log(one);

var obj = new Array(3);
console.log(obj); //숫자 하나당 엘리먼트 1개 추가
// [undefined,undefined,undefined]
for(var k=0 ; k<obj.length; k++){
    console.log(typeof obj[k]);
};

/*
인스턴스 생성 놀리 
-new Array() 는 new 연산자에서 
생성자 함수를 호출하여 인스턴스 생성
-Array()는 직접 생성자 함수를 호출하여 인스턴스 생성
*/
var value = [1,2,3];
value.length = 5;
console.log(value);//배열의 엘리먼트 수를 변경. 배열이 늘어남

var value = [1,2,3];
value.length= 2;
console.log(value); //길이를 3 에서 2 로 줄이면 뒤의 엘리먼트가 삭제됨.

/*
엘리먼트추가와 삭제 메커니즘 
-삽입할 위치에 인덱스 지정 
-표현식으로 인덱스 지정
*/
var value = [1,2];
value[4] = 5;
console.log(value); // 값을 설정하지 않은 추가된 엘리먼트에 undefined 설정

/*
delete 연산자 (연산자임!!)
var 변수는 삭제 불가 -> 삭제 실패로 처리하여 false 반환
글로벌 변수는 삭제 가능 
- {name:value} 삭제 방법 
- 삭제할 프로퍼티 이름 작성
인덱스로 배열의 엘리먼트 삭제
*/

var value = 123;
console.log("value 변수를 삭제한다.",delete value); //삭제 실패로 처리 

globalval= "var 을 선언하지 않은 글로벌 변수";
console.log(delete globalval); //글로벌 변수는 삭제가 가능하다
try{
    console.log(globalval);
}catch(e){
    console.log("존재하지 않음");
    console.log(e);
};
//그냥 선언할 때 var 선언한다고 알아두기

var book = {title:"책"};
console.log(delete book.title); // 오브젝트 이름.프로퍼티 이름 형태로 작성
console.log(book.title); //오브젝트에 프로퍼티 이름이 없으면 undefined 반환

var ws = {우상:"woosang"};
console.log("ws 객체를 삭제한다",delete ws);
var name = {하나:"1"};
console.log("name 객체를 삭제한다",delete name); // 왜 name 객체는 삭제될까?

var value = [1,2,3,4];
console.log(delete value[1]);
console.log(value.length); //삭제한 뒤에도 길이가 4가 나온다

/*
배열 엘리먼트 삭제 메커니즘
삭제된 인덱스에 undefined 설정 
- 배열을 읽을 때 제외시켜야 한다. 
- 따라서 삭제해도 length 는 달라지지 않는다
*/
var value = [1,2,3,4,5];
delete value[1];
console.log(value); // 삭제한 값이 undefined 

// 메소드를 사용하여 삭제하기 


var myNum = [1,undefined,3,"",7];
// myNum = myNum.filter(function())


/*
엘리먼트 삽입과 첨가
0번인덱스 부터 차례로 첨가
배열에 있던 엘리먼트는 뒤로 이동
*/
var numList = [1,2,3,4];
numList.unshift(22,33,44);
console.log(numList);

//push : 배열 끝에 파라미터 값을 첨부 

var value = [1,2] ;
value.push(23,23);
console.log((value));

/*
서버에서 데이터를 받아서 행과 열이 있는 상태로 만들려고 함.
매번 데이터와 첨부기준 을 하게되면100번을 insert 시켜야함
100 개가 있다면 100번 렌더링 => 너무 과도함
배열 전체를 읽어서 문자열로 만들어서 브라우저에게 줌 => 이럴때1번만 렌더링하게
*/

//concat() 배열에 파라미터 값을 연결하여 반환
var value = [1,2];
var result = value.concat(3,4);
console.log("[1,2]에 3,4를 연결",result); 

/* 
엘리먼트 복사 
slice();
배열의 일부를 복사하여 배열로 반환
첫 번째 파라미터 인덱스부터 두 번째 파라미터 인덱스 직전까지
*/
var origin = [1,2,3,4,5];
var result = origin.slice(1,3);
console.log("복사본",result);
console.log("원본",origin);
//true, false를 숫자로 변환
console.log(value.slice(true,3));
console.log(value.slice(false,3)); //false 는 0 

console.log(origin.slice(4,3)); //첫 번째 파라미터 값이 두 번째 파라미터 값보다 크면 빈 배열을 반환
//파라미터 값이 음수이면 length 값을 더한다. 
console.log(origin.slice(-4,-2)); //(1,3) -> -4+5 , -2+5

/*
파라미터 : 분리자opt, 디폴트: 콤마 
엘리먼트와 분리자를 하나씩 결합하여 '문자열'로 연결
마지막 엘리먼트는 분리자를 연결하지 않음
*/

var value=[1,2,3];
var result= value.join("##")
console.log(result);
console.log(value);

