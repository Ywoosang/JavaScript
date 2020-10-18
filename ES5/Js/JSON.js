/*
Json 오브젝트 
JavaScript Object Notation
- 빌트인 오브젝트 
- New 연산자로 인스턴스 생성 불가 
Json 주요 기능 
- 데이터 송수신의 변환 기준 
- 텍스트 이므로 전송 송도가 빠름 
- 파일 확장자 : Json, txt 도 사용 가능
Js 데이터 타입 지원
- 다른 언어도 사용하지만, 완전하게 같지 않을 수도 있음
*/

/*
stringfy()
파라미터 : 변환 대상, 함수 또는 배열(opt) , 가독성을 위한 구분자(opt)
반환 : 반환 결과
Js 타입을 Json 타입의 문자열로 반환 => Json 은 문자열 + 부분숫자
- Json.stringfy() 형태로 호출

1.변환이란 큰따옴표 안에 작성되도록 만드는 것을 뜻합니다 
2. 프로퍼티 이름인 book 이 "book" 으로 변환
3. '책' 이 "책" 으로변환
4. 숫자는 변환하지 않습니다. 
*/
// 오브젝트
var value = {
    book :'책',
    title : 123
};
var result = JSON.stringify(value);
console.log(result); 

//배열 
var arr = ['배열','안에','작성'];
var result = JSON.stringify(arr);
console.log(result);

//특수한 값 반환 
console.log(JSON.stringify([Infinity,NaN,null])); // => null 로 변환된다.
// 서버에서 받을 때 정확하게 null 로 가는지, null 로 가도 서버 코드에 지장이 없는지 확인해야 한다.  
console.log(JSON.stringify([true,false]));

//undefined 변환

// 값 하나이면 그대로 변환
console.log(JSON.stringify(undefined));
//배열 안에 있으면 null 로 변환 
console.log(JSON.stringify([undefined]));
//프로퍼티 값이면 프로퍼티를 제외시킨다.  프로퍼티 이름도 없어지므로 ,주의 
console.log(JSON.stringify({value:undefined}));

/*
두 번째 파라미터에 함수 작성
함수에서 return 한 값을 변환 값으로 사용합니다. 
값을 return 하지 않거나 undefined를 return 하면 
최종 데이터에서 제외시킵니다. 
즉, 데이터를 걸러 내게 됩니다. 
*/
var data = {book:'책',point:55};
function replace(key,value){
    return key === "point" ? 11 : value;
};
var result = JSON.stringify(data,replace); //프로퍼티마다 함수에 차례로 들어감
console.log(result); 


/*
두 번째 파라미터로 배열에 프로퍼티 이름을 작성할 경우
이름이 같은 것만 result 에 설정
{point:11} 이 출력되지 않음
*/
var data = {book:'책', point:11, amount:90};
var result = JSON.stringify(data,['book','amount'],'\n');
console.log(result);