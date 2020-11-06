/*
인덱스에 맞추어서 배열을 분할 할당한다.
없으면 undefined  , spread ... 와 같이 사용 가능(나머지)
*/

var one,two,three;
[one,two,three] = [1,2,3];
console.log('인덱스에 해당하는 변수에 할당',one,two,three)

var one,two;
[one,two] = [4,5,6];
console.log('할당 받을 변수 수가 적은 경우',one,two); //왼쪽의 변수 인덱스에 맞추어 값을 할당하므로, 3은 할당되지 않음.


var one, two ,three ,four
[one, two ,three, four] = [1,2,3];
console.log('할당 받을 변수 수가 많은 경우',one,two,three,four); //값을 할당할 수 없는 변수에 undefined 가 설정

/*배열 차원에 맞추어 분할 할당*/

var one, two ,three ,four;
[one,two,[three,four]] = [1,2,[3,4]]

console.log('배열 차원에 맞추어 분할 할당',[one,two,three,four]) ;

var one ,two ,three, four;
[one, , ,four] = [1,2,3,4,];
console.log('매치되는 인덱스에 변수가 없으면 undefined',[one,two,three,four]);

/*
spread 와 같이 사용
나머지2,3,4,5,6 를 배열로 할당 
*/
var one,rest;
[one,...rest] = [1,2,3,4,5,6];    
console.log(one);
console.log(rest);  

/*
object 분할 할당 
프로퍼티 이름이 같은 프로퍼티에 값을 할당
*/
var {one,two} = {one:10 , two:20}
console.log("이름이 같은 프로터피에 값 할당",one,two);

var one,two; //변수 이름을 별도로 작성한 경우, 소괄호 안에 작성. 위와 같은 것임
({one,two} = {one:10,two:20});
console.log('이름이 같은 프로퍼티에 값 할당',one,two);

var five,six; 
({one:five,two:six} = {one:5,two:6});
console.log("프로퍼티 값 위치에 변수 이름 작성해서 할당",five,six);

var {one,plus:{two,three}} = {one:10,plus:{two:20,three:30}}; //여기서 plus 는 구조만 맞춰 준 것이다.
console.log("object 구조에 맞추어 값 할당",one,two,three);

var {one,...rest}={one:10,two : 20,three:30};
console.log(rest);  //rest 에 나머지 object 를 할당 {two: 20, three: 30}


/*
파라미터 분할 할당 
호출하는 함수에서 object 형태로 넘겨준 파라미터 값을 호출받는 함수의 파라미터 값에 맞추어 할당
Obbject 구조에 맞추어 값 할당 
*/
function add({one,two}){ 
    console.log(one+two);
}
add({one:10,two:20});  //one 에 10 ,two 에 20 으로 파라미터에  값이 분할 할당된다. 


/*
Object 오퍼레이션
- 같은 프로퍼티 이름 사용  대체됨.
- Shorthand property names
*/
var one = 10, two =20;
const values = {one,two};
console.log("객체 안으로 변수 넣기",values); 

/*
프로퍼티 이름 조합
- 문자열을 프로퍼티 이름으로 사용 
- 변수 값을 프로퍼티 이름으로 사용 
- 분할 할당을 조합한 형태
*/

var item ="world";
var sports = {
    [item]: 100,   //[] 안 변수값이 프로퍼티 이름으로 사용됨 
    [item+"Cup"] :'월드컵',
    [item+"Sports"]:function(){ //변수 값에 따라 함수 이름을 정의할 수 있음
        return "스포츠";
    }
};
console.log(sports[item]);
console.log(sports[item+"Cup"]);
console.log(sports[item+"Sports"]()); 

/*
앞에서 함수 이름을 부르려고 할 때
조건에 따라 부르면 코드가 지저분해짐.
이와 같은 형태로 변수에 값을 할당하고 부르면 앞 코드가 깨끗하고 유연성 확보 가능
조건에 따라서 함수를 코드로 부르는 것이 아니라 
조건 값에 따라서 함수를 부르는 개념
*/

var item = "book";
var result = {[item]:title} = {book:'책'} //item 자리에 book 이 들어가고 뒤에서 값으로 title 에 '책' 이 할당됨.
console.log("분할 할당을 조합한 형태",result);
/* 가변적으로 프로퍼티 이름을 사용할 수 있다. => 유연성 높아짐*/

var one = "회원1", two = "회원2" ,three= "회원3",four="회원4";
var result ={[one]:title,[two]:title,[three]:title,[four]:title} = {회원1:1,회원2:2,회원3:3,회원4:4};
console.log(result);
