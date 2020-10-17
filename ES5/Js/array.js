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
var result= value.join("##");
var connect = value.join("");
console.log(result);
console.log(connect); //엘리먼트 요소들만 연결

/*
서버에서 데이터를 받아서 테이블(표) 를 만들때 서버의 데이터를 마크업으로 만들어서 리스트에 푸쉬함
그런 다음 빈 문자열로 연결해서(join) 한번에 html 에 insert가능
한번에 표가 표시된다는 장점 => 일일이 각 ul li 마다 보낼 필요 없이
*/

/*
toString 배열의 엘리먼트 값을 문자열로 연결, 콤마로 엘리먼트를 구분
*/
var result = ["A","B","C"].toString();
console.log(result);
console.log([["가"],["다"]].toString()); // 2차원 배결의 각 엘리먼트 값을 1차원 배열로 펼치고 다시 1차원을 문자열로 연결하여 반환

var table = [];
table.push('<ul>')
for(var cnt=1; cnt<=20; cnt++){
    li = '<li ' + "id='id"+cnt+"' style='color:blue'>"+"id"+cnt+"</li>";     
table.push(li);  
}; 
table.push('</ul>');
table =table.join("\n"); 
document.body.innerHTML = String(table);

/*
shift() 
배열의 첫 번째 엘리먼트 삭제 
삭제한 엘리먼트 값이 undefined 로 남지 않고 완전히 삭제된다. (메소드 활용)
length 의 값이 하나 줄어듬
빈 배열이면 undefinded 가 반환 됨
인덱스가 하나씩 당겨짐 

pop() 마지막 엘리먼트 삭제 

splice() 
중간에 있는 엘리먼트들을 삭제 => 범위 지정 가능  (시작할 인덱스,삭제할 개수 ,대체할 것 )
엘리먼트를 삭제하고 삭제한 위치에 세 번째 파라미터 삽입
*/

var value = [1,2,3,4,5];
console.log(value.splice(0,4)); //1번 인덱스부터 2번 인덱스까지 삭제 
console.log(value);
var k = ["가","나","다","라"];
console.log(k.splice(0,2,3)); //0번,1번 반환 (0,2)
console.log(k);

/*
sort() 정렬
파마리터로 함수를 받을 수 있다. 
sort 대상 배열도 정렬된다. 
값이 undefined 면 끝으로 이동
숫자에 해당하는 Unicode 의 code point 로 정렬
[7,1234,26,101] => [101,1234,26,7] 
왼쪽에서 오른쪽으로 코드 포인트로 비교하여 sort 하기 때문에 이런 결과가 나오는 것
sort() 파라미터에 함수를 작성하고 함수에서 정렬해야 한다. 
*/

var value = [4,2,1,3];
copyValue = value.slice();
console.log(value.sort());
console.log(value); //원본도 정렬됨.값이 보존이 되어야 하면 
console.log(copyValue); 

var value = [,,1,2];
console.log(value.sort()); 

var value = [101,26,7,1234];
console.log(value.sort());  

/* 
sort 알고리즘
콜백함수 => 함수를 반복할 때 마다 자바스크립트 엔진이 함수를 호출하는 것 
반환된 값을 가지고 또다른 처리

sort() 
*/
var val = [26,101,7,1234];
val.sort(function(one,two){
    console.log(one,two); 
    return two-one; //역순 정렬
    return one-two //정방향 정렬
});
console.log(val);

/*
reverse() 
배열 엘리먼트 위치를 역순으로 바꿈
엘리먼트 값이 아닌 인덱스 기준
대상 배열도 바뀜.
*/


/*
isArray() 
함수. 따라서 Array.isArray() 로 해야한다. 
체크 대상이 배열이면 true 아니면 false 로 해야 한다. 
서버에서 Json 타입으로 데이터를 가져옴 
Json 타입 안에는 { : } 형태와 [] 형태 .. 존재 
읽은 것 마다 { : } 인지 [] 인지 체크를 해 주어야 한다. 
타입에 따라서 다른 함수를 호출해서 실행하도록 동작시키기 때문 

*/
console.log(Array.isArray([1,2]));
console.log(typeof {a:1});
console.log(typeof [1,2]); //배열인데 오브젝트로 나온다. 기존 방식으로는 배열인지, 객체인지 체크가 불가능 
console.log(typeof null); 

/*
인덱스 처리 메소드 
indexOf(검색 시작 인덱스) 
파라미터 값과 같은 엘리먼트의 인덱스 반환
-왼쪽에서 오른쪽으로 검색 
- 값이 같은 엘리먼트가 있으면 검색 종료 
- 데이터 타입까지 체크 
- 없으면 -1 반환 
두 번째 파라미터의 인덱스부터 검색 
String 과 Array 의 indexOf() 차이
*/

var value = [1,2,5,2,5];
console.log((value.indexOf(5)));
console.log((value.indexOf("5"))); // 타입까지 보기 때문에 X -1 반환
console.log(value.indexOf(5,3));
console.log(value.indexOf(5,-2)); //음수면 length 를 더함

var value = [1,2,5,2,5];
console.log(value.lastIndexOf(5)); //오른쪽에서 왼쪽으로 비교하는게 스펙적 측면에서 더 빠르다(뒤에서 앞으로 검색)


/*
콜백 함수를 호출 
시맨틱과 독립성

for Each()
엘리먼트 값, 인덱스 , 배열 전체 
두 번째 파라미터에 this 로 참조할 오브젝트를 넣을 수 있다. 
*/

var list = ["가","나","다","라"];
list.forEach(function(el,index,array){
    console.log(el,index,array);
}); 

/*
콜백 함수를 분리(독립성)
코드 중복을 피해서 콜백 함수를 빼기: 일반적 방법
*/
var all = function(val,index,all){ //콜백 함수
    console.log(val,index,all);
};
list.forEach(all);

/*
this 로 오브젝트 참조
*/
var list = [1,2];
var fn = function(el,index,all){
    console.log(el+this.ten);
};
list.forEach(fn,{ten:10});

/* 
forEach()
시작할떄 이미 반복 범위가 결정되어 있다
엘리먼트를 추가하더라도 처리하지 않는다. 
현재 인덱스보다 큰 인덱스의 값을 
변경하면 변경된 값을 사용한다. 
- 현재 인덱스보다 작은 인덱스의 값을 변경하면 처리하지 않는다. 
현재 인덱스보다 큰 인덱스의 엘리먼트를 삭제하면 
배열에서 삭제되므로 반복에서 제외된다. 
-추가는 처리하지 않지만, 삭제는 반영 
*/
var list = [1,2,3];
var fn = function(el,index,all){
    if(index===0){
        list.push("AB"); //배열을 처음 읽었을 때, 배열 끝에 "AB" 를 첨부
    };
    console.log(el); //반복하는 도중에 배열에 엘리먼트를 추가하면 처리하지 않음
};
list.forEach(fn)

var list = [1,2,3];
var fn2 = function(el,index,all){
    if(index ===0){
        list[1]= "변경"; //현재 인덱스 보다 큰 인덱스 값 변경하면 변경된 값을 사용한다.
    };
    console.log(el); 
}
list.forEach(fn2)

var list = [1,2,3];
var fn2 = function(el,index,all){
    if(index ===0){
        list[1]= "변경"; //현재 인덱스 보다 큰 인덱스 값 변경하면 변경된 값을 사용한다.
    };
    console.log(el); 
}
list.forEach(fn2)

var list = [1,2,3];
var fn2 = function(el,index,all){
    if(index ===0){
        delete list[2];   //삭제는 반영 
    };
    console.log(el); 
}
list.forEach(fn2)

//forEach() 는 시맨틱 접근

/*
for 과 forEach() 차이

forEach() 는 시맨틱 접근
처음부터 끝까지 반복한다는 시맨틱
반복 중간에 끝나지 않는다는 시맨틱
시맨틱으로 소스 코드의 가독성 향상

for() 는 함수 코드를 읽어야 알 수 있다. 
break , continue

forEach() 는 반복만 하며
- 콜백 함수에서 기능 처리 , this 사용 가능 

forEach() 는 인덱스 0 부터 시작
- for() 와 같이 인덱스 증가 값ㅇ르 조정할 수 없음
- 뒤에서 앞으로 읽을 수 도 없음, 이것도 시맨틱 접근 
*/


//함수 호출 시간 측정
var start = Date.now();
//배열에 1부터 1,000,000 까지 작성
for(var cnt=1,list=[]; cnt<=1000000; cnt++){
    list.push(cnt);
} ;
var check = function(el,index,all){
   
}; 
console.log((list));

list.forEach(check);
var end = Date.now();
console.log(end-start);


/*
every() 
시맨틱 접근 
배열의 엘리먼트를 하나씩 읽어가면서 
false를 반환할 때까지 콜백 함수를 호출
-false 가 반환되면 반복 종료
-false 를 반환하지 않으면 true 반환
false 가 되는 조건이 배열의 앞에 있을 때 효율성 높음

some()
배열의 엘리먼트를 하나씩 읽어가면서 
true 를 반환할 때까지 콜백 함수 호출 
- true 가 반환되면 반복 자동 종료
- true 를 반환하지 않으면 false 반환
*/

var value = [10,20,30,40];
var  fn = function(el,index,all){
    console.log(el);
    return el < 25; 
 
};
var result = value.every(fn);
console.log("결과:",result); 



var value = [10,20,30,40]
var fnc = function(el,index,all){
    if(el>30){ 
        return true; 
    };
    console.log(el);
};

var ret = value.some(fnc); 
console.log(ret);

/*
filter() 
시맨틱 접근 
배열의 엘리먼트를 하나씩 읽어가면서 
- 콜백 함수에서 true 를 반환하면 
- 현재 읽은 엘리먼트를 배열로 반환
조건에 맞는 엘리먼트를 추려낼 때 유용
*/ 

var value = [10,20,30,40];
var fn = function(el,index,all){
    return el>35;
};
var result = value.filter(fn);
console.log(result); // 배열로 반환 


/*
map()
시맨틱 접근
배열의 엘리먼트를 하나씩 읽어가면서 
- 콜백 함수에서 반환한 값을 
새로운 배열[] 에 첨부하여 반환
*/
var value = [10,20,30];
var fn = function(el,index,all){
    return el +this.add;
};
var point = {add:100};
var result = value.map(fn,point);
console.log(result); //배열로 반환 


/*
반환 값을 파라미터 값으로 사용하는 메소드
reduce()
data : 반복 대상 
파라미터 : 콜백 함수 , 초깃값 opt
반환: 콜백 함수에서 반환한 값 
forEach() 처럼 시맨틱 접근 
배열 끝까지 콜백 함수 호출 
- 파라미터 작성 여부에 따라 처리가 다름 
*/


/*
처음 호출할 때 
prev 에 0번째 인덱스 값 들어감 , curr에 1번째 인덱스 값 들어감
두 번째 호출할 때 
prev 에 직전에 return 값 들어감 , curr 에 2번째 인덱스 값 들어감 


두번째 파라미터를 작성하면, prev 에 두번째 파라미터의 값이 들어가고 , 
curr 에 0번째 인덱스 값이 들어감 
*/
var value = [1,3,5,7];
var fn = function(prev,curr,index,all){
    console.log(prev +","+curr);
    return prev +curr;
};
var result = value.reduce(fn);
console.log("결과",result); 


var arr = ["가","나","다","라","마"];
var fn = function(prev,curr,index,all){
    return prev+curr
}
var a = arr.reduceRight(fn,"바")
console.log("결과",a); 

/*
Boolean 인스턴스 생성
new Boolean()
*/
var value =[undefined,null,NaN,0,""];
for(var cnt=0; cnt<value.length; cnt++){
    var Obj = new Boolean(value[cnt]);
    console.log(Obj+1); 
};
