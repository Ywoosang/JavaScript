/*
자바스크립트 특징 

자바스크립트는 스크립팅Scriptiong 언어 
스크립팅 언어 특징
- 소스 파링릐 코드를 사전에 컴파일 하여 실행 파일을 만들어 놓지 않고
- 사용하는 시점에서 컴파일 하고 실행 
- 장점을 활용하는 지혜 필요
컴파일 순서 
-소스 파일 위에서부터 아래로 컴파일 
-function 키워드를 만나면 function 오브젝트를 생성 
-이때, 함수 안의 코드는컴파일 하지 않음. 
- 함수가 호출되었을 때 , 위의 방법으로 컴파일 => 필요할 때만 컴파일 하는 것 
*/
/*
아래를 book.js 파일에 작성된 코드라고 본다면
자바스크립트는 html 파일의 script 엘리먼트의 src 속성에 book.js 를 작성 
html 파일이 렌더링 하면서 src 속성에 적힌 book.js 파일을 서버에서 가져와서 그때 컴파일
필요하면 그때 일부를 실행 
자바나 c++ 같은 경우에는 사전에 컴파일을 함 그다음 확장자가 ex인 실행파일을 만들어놓고 실행할떄 ex파일 불러옴
=> 컴파일 시간이 안걸림
그런데 자바스크립트는 사용하는 시점에 컴파일도하고 실행도 함 

*/
var value = 123; 
var book = function(){
    var point = 500;
    var getpoint = function(){
        return point;
    };
    getpoint(); 
};
book();


var Book = function(point){ // 넘어온 200을 받음
    this.point = point;   //이때 this 는 생성하는 인스턴스를 참조 => 여기에 200 할당 
};
Book.prototype.getPoint = function(){  
    return this.point + 100; 
};
var oneOnInstance = new Book(200); //인스턴스를 만듬  200을 point 에 넘겨줌 
console.log(oneInstance.getPoint());




