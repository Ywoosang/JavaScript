/* String 오브젝트 
"ABC" 처럼 문자 처리를 위한 오브젝트
문자 처리를 위한 함수와 프로퍼티가 포함되어 있으며, 함수를 호출하여 문자 처리를 함.

빌트인 string object 문자열을 처리하는 함수들 
localeCompare() 값의 위치를 1,0,-1 로 변환   
*/
"use strict";
var value = String(123);
console.log(value);
console.log(typeof value);
console.log(""+123); 

var obj = new String(123);
console.log(typeof obj);
console.log(obj.valueOf());

 
console.log("lengh 프로퍼티");
 
    
var value = "abcd" ;
console.log(value.length);
/*value 는 오브젝트가 아닌데 어떻게 .length 가 가능한 것일까?
=> 자바스트립트 엔진이 value.length 를 만나면 value 타입을 체크. 
value 가 String 타입이므로, 내부에서 new String("abcd") 를 하게 되며 
생성한 인스턴스의 length 의 값인 3을 반환하게 된다. */ 
for(var b="ABCD" ,cnt=0; cnt<b.length; cnt++){ //0,1,2,3 일때 실행되고 끝남.
    console.log(b[cnt]); 
}
console.log(cnt); //cnt++ 에서 마지막으로 증가한 값인 4 
 
/* 
1. "ABCD" 로 for() 문을 반복할 때 
- 문자를 하나씩 읽을 수 있는 것은 
- 인스턴스에  0: "A", 1: "B" ,2:"C",3:"C"로 분리되어 있기 때문.
2. for() 문을 반복할 때 
- value[k] 에서 k 를 프로퍼티 이름으로 값을 구합니다.
*/

console.log("trim()"); //문자열 앞뒤의 화이트 스페이스 삭제  
var value="  abcd   "
console.log(value.length); 
console.log(value.trim().length);
console.log(value.trim());
console.log(value);




console.log("toString() data위치의 값을 String 타입으로 변환");
var value ="123";
var result = value.toString();
console.log(typeof result);

window.onload = function(){
    "use strict"
    var obj = String;
    var instance= new String("123");
    /* 
    1. local 의 obj를 펼칩니다.
    2. 그런데, toString() 이 없습니다.
    */
   var oneProto = instance.__proto__;
   var oneString = oneProto.toString;
   /*
   1. 여기에 instance.__proto__ 를 펼칩니다. 
   2. 여기에 toString()이 있습니다.
   */ 
  var twoProto = instance.__proto__.__proto__;
  var twoString = twoProto.toString;
  /* 
  1. twoProto 에도 toString() 이 있습니다. 
  2. 구조적으로 toString() 이 두 개가 있는 모습입니다.
  __proto__: 
    toString(); ->빌트인 String 오브젝트의 toString
      __proto__:
        toString(); -> 빌트인 Object 오브젝트의 toString
  */
  
 /*
 1.String 오브젝트에 toString() 이 없으면
 2.Object 오브젝트의 toString() 이 호출됩니다. 
 3."123" 을 Object 타입으로 인식하여 변환하기 때문에 
 - String 오브젝트에 toString() 이 있는 것입니다.
 */
};


/*
Js 함수 호출 구조 

우선, 데이터 타입으로 오브젝트를 결정하고, 
오브젝트의 함수를 호출합니다.
*/
var value = 123;
value.toString();  // Number 오브젝트의 toString() 을 호출합니다. 
"123".toString(); //  String 오브젝트의 toString 을 호출합니다. 
var result = toString(123); //오브젝트.toString() 이 아니라 그냥 toString만 써주었을때 
console.log(result); // 


/*
chasrAt() 인덱스의 문자를 반환
*/
var value ="sports";
console.log(value.charAt(1));
console.log(value[1]); 
console.log(value.charAt(12)); // 빈 문자열을 반환
console.log(value[12]); // undefined 가 반환 

/*
indexOf
(검색할 문자열, 검색 시작위치 (기본0))
*/
var value = "123123123123232312";
console.log(value.indexOf(2)) 
console.log(value.indexOf(2,3));  
console.log(value.indexOf(23));  

var index; 
console.log("길이는:",value.length);
for(var cnt=-1; cnt<=value.length;){
    index=value.indexOf(2,cnt+1)
    cnt = index ;
    if(index==-1){ //같은 문제가 없으면 -1 반환 
        break;
    }
    console.log(index);
};
/*
search() : 검색된 첫 번째 인덱스 반환. 매치되지 않으면 -1반환
정규표현식을 사용할 수 있다는 점에서 다름. 
*/
var value ="웹 퍼블리싱", a = "abced";
console.log("웹의 인덱스:",value.search("웹"));
console.log("b의 인덱스:",a.search(/b/))





//lastindexof()뒤에서 앞으로
var value = "12312311221"; 
console.log(value.lastIndexOf(1,4)); 
console.log(value.lastIndexOf(2,-1)); //from index <0 인 경우엔 -1 반환 


//문자열 연결
var obj = new String(1234);
console.log(obj.concat("웹개발","5678")); //String 인스턴스를 작성하면 프리미티브 값을 연결

//substring()  파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
//두 번째 파라미터를 작성하지 않으면 , 반환 대상의 끝까지 반환
var value = "0123456789";
console.log(value.substring(6));
console.log(value.substring());


//substr() 파라미터의 시작 인덱스부터 지정한 문자 수를 반환
var value = "01234567";
console.log(value.substr(0,3)); //0번 인덱스부터 문자 3개를 반환 

//slice() 파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환 
var value ="01234567";
console.log(value.slice(1,4));
console.log(value.slice(false,4)); //false, undefined , null, Nan빈 문자열은 0으로 간주 


/* 
^ :첫 문자 매치 $:끝 문자 매치
매치 대상에 정규 표현식의 패턴을 사용하여 매치 결과를 배열로 반환 [매치결과]
없으면 null 반환 
*/
var value = "Sports";
console.log(value.match("o"));
console.log(value.match(/s/));
console.log(value.match('oRt'));


var value ="abcde"
console.log(value.replace("a","바꿈"));
console.log(value.replace(/a/,"바꿈"));

function change(){
    return "함수";
};
console.log(value.replace('b',change())); // 함수를 실행하고 반환된 값으로 바꿈 



/*
split() 분리자로 정규표현식, 문자열
배열로 변환
분리자가 분리 대상에 없으면, 분리 대상 전체를 하나의 배열로 반환 
*/
var value ="123"
console.log(value.split(''));

/*
localeCompare()
1(앞),0(같음), -1(뒤)
값을 비교하여 위치를 나타내는 값으로 반환. 
Unicode 사전 순으로 비교 
*/
var value = "나";
console.log(value.localeCompare("가")); //"가" 가 "나" 보다 앞에 있으므로 1 반환 


