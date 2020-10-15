'use strict';
var one=1, two=1;
if (one=== two){
    var result = one +two ;
    console.log(result);
}

var a = 1, b =1;
if (a=== b) console.log("블록을 사용하지 않음");  // 한 줄에 이어서 작성 
if (a === b){
    console.log("1번째 줄")// 줄을 바꿔 작성
    console.log("2번째 줄");// 세미콜론이 나올때까지 실행
}else{
    console.log("블록 사용");
}

//debugger : debugger 위치에서 실행 멈춤. 
// 브라우저 개발자 도구 창이 열려 있을 때만 멈춤
//debugger;
var sports ="스포츠" ;
console.log(sports);

// while 문 
var k= 1;
while (k<3){
    console.log(k);
    k++;
};

// do while : 평가 결과가 true 이면 do 문을 실행하고 false 이면 while 문의 block 을 실행한다. 
var k = 0 ; 
do {
    console.log("DO",k);
    k++;
}while(k<4){
    console.log("DO-While");
}

//for(초깃값opt; 비교opt; 증감opt) 2번째의 비교 표현식의 평과 결과가 true 인 동안 블럭의 문장을 반복 실행
for (var k=0; k<2; k++){ //초깃값 -> 비교 -> 증감 순으로
    console.log(k);
}

//ofr 문은 opt 생략 가능
for (var k=0; k<3;){
    console.log(k);
    k++ 
}
var a = 0 ;
for(;a<3;){
    console.log(a);
    a++;
};

 
for(var cnt=0,even = 0,odd=0; cnt<=50; ++cnt){
    if(cnt%2 == 0){
        even += cnt;
    }else{
        odd += cnt;
    };
};
var sum = even + odd ; 
console.log(cnt,even,odd,sum);

//break 반복문 종료 break; 또는 break 식별자; 
for(var cnt=0; cnt<10; cnt++){ //cnt++을 사용하기 전에 안에 있는 코드 블럭이 실행되어 break 로 반복문 종료
    if(cnt==5){
        break;
        console.log("강제 종료로 실행 안됌");
    };
    console.log(cnt); 
};

//swich 표현식의 평가 값과 일치하는 case 문 수행
// case 1 아래의 모든 문장을 수행하므로 200 3도 출력. 이를 방지하려면 break 를 작성해야 한다. 
var exp=1;
switch(exp){
    case 1: 
        console.log(100);
    case 2:
        console.log(200);
};

var exp =1, value;
switch(exp){
    case 3:
        console.log(300); 
    default:
        console.log("기본");  //조건에 일치하는 case 가 없으면 default 와 그 아래에있는 코드 블록을 실행
    case 4:
        console.log(400);
    // case 1:
    //     console.log(100);
}


//or 형태
var exp = 3;
switch(exp){
    case 2:
    case 3:
        console.log(500); //2또는 3이 있으면 , || or 역할. 
    
}

// try-catch 

var value ;
try{
    value = ball ; // ball 변수가 없으므로 에러 발생 
}catch(error){
    console.log("catch 실행"); //파라미터 error 에 Js 의 Error 오브젝트 설정
    console.log(error); // error는 식별자로 임의의 이름 사용 가능 
}finally{
    console.log("finally는 항상 실행");
};


// throw :  throw 표현식;  명시적으로 예외를 발생시킴. 예외가 발생하면 catch 실행
try{
    throw "예외 발생시킴"; // 아래 문장은 실행시키지 않는다. 
    var sport ="스포츠";
}catch(error){
    console.log(error);
    console.log(sport); //
};

try{
    throw{  //표현식에 오브젝트를 작성한 형태 
        msg :"예외 발생시킴",
        bigo : "임의의 이름 사용"
    };
}catch(error){
    console.log(error.msg);
    console.log(error.bigo)
};

try{
    throw new Error("예외 발생시킴"); //new 로 Js 에 제공하는 Error 오브젝트 설정
}catch(error){
    console.log(error.message); //error.message로 작성한 메시지 사용 
}

//strict 모드 : "use strict"
// 엄격하게 Js 문법 사용의 선언 
// 소스 코드 맨 위에 사용 
// book = '책'; 오류 발생 
//console.log(book); 


try{
    nln ="var 선언하지 않음";
    console.log(nln);
}catch(error){ 
    console.log(error);
}

function newFunction() {
    'use strict';
}