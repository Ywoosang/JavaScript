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