/*함수 이름 관례
calculatePoint() 처럼 동사로 시작 => 포인트를 계산하는 함수임을 알 수 있음
두 개 이상의 단어를 사용할 때 
- 두 번째 단어부터 명사 사용 
- 명사의 첫 문자를 대문자로 사용 
- CamelCase 형태라고 부름

동사+명사 형태로 동적인 모습
*/

function setValue(one,two){
    var sum = one + two ;
    console.log(sum);
}

var sumval = setValue(10,20); 
console.log(typeof sumval); 

//return 또는 표현식을 작성하지 않으면 undefined 반환

