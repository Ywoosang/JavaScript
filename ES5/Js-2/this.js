var book = {
    point: 100,
    member : {
        point: 200,
        get : function(){
            console.log(this === book.member); // true 
            console.log(this.point); //200 
        }
    }
};

try{
    book.get();
}catch(error){
    console.log(error); //book.get is now a function 오류남. 
}
book.member.get()


var book ={
    value : 123,
    get : function() {
        var value = 456;
        console.log(this === window); //this 는 book 을 참조하므로 글로벌변수 => 윈도우 true
        console.log(this.value); //this 는 글로벌 변수를 참조하는데, value 는 지역변수 이므로. 
    }
};
var fn = book.get;  
fn()
function getTitle(){
    console.log("글로벌 함수");
};
var title = function(){
    function getTitle(){
        console.log("지역 함수");
    };
    this.getTitle(); //this name을 참조 => 글로벌  
    getTitle(); //지역 함수 호출 
}; 

title();

window.onload = function(){
  
    var book = {}; 
book.Point = function(point){
    this.point = point; 
};
book.Point.prototype.getPoint = 
    function(){
        console.log(this.point);
    }
var obj = new book.Point(100);
obj.getPoint();

var get = function(value){
    return this.base * this.rate + value; //value.base 
};
var value = {base:20, rate:30};
var result = get.call(value,50); // value 를 참조하도록 함  => this로 참조할걸 바꾸겠다는 의미
console.log(result)


function num(){
    return this.valueOf(); 
};
var result = num.call(123);
console.log(result);


};

var click ={
    myPoint : 100,
    setEvent : function(){
        var node =document.getElementById("point");
        node.onclick = this.show.bind(book,node);
    },
    show : function(node,event){
        console.log(node.textContent);
        console.log(this.myPoint);
    }
};
book.setEvent();
/*
1.book setEvent() 함수를 호출하면 함수 내로 접근해 이벤트 설정 


/*
이벤트 처리의 어려움은 
- 이벤트를 설정할 떄의 오브젝트를
- 핸들러에서 this로 참조할 수 없다는 것 

addEventListner 나 onclick 로 이벤트를 설정하면, 
연결된 핸들러 함수에서 this 로 오브젝트를 참조할 수 없음
이것이 왜 필요 ? 
오브젝트 안에 이벤트 함수를 설정하고, 핸들러 함수를 설정 ----1 
이벤트 설정과 핸들러를 한 눈에 볼 수 있다. => 코드가 길어지면 세분화 
때로는 핸들러 함수만 별도로 모아두는 경우도 있음 
핸들러 함수에서 this를 사용할 수 있어야함. 
= > this 를 사용하지 않으면 값을 access 하는 방법이 1가지가 없어지는 것임 
함수 안에서 값을 처리하는 형태 4가지 
1.파라메타로 받는것
2.변수를 선언하는 것 
3.다른 함수를 선언해서 return 값 받는것
4.this로 access 
----1 의 형태에서 this는 오브젝트 전체를 참조 
프로퍼티 값을 공유하거나 다양한 형태로 사용할 수 있는데 
이것이 불가한것 . 


=> 이를 bind()로 해결할 수 있음 



document.getElementById("point");
- button#point 로 엘리먼트 오브젝트 생성 
node.onclick = this.show.bind(book,node)
=> 첫 번째 파라미터는 handler 함수에서 this로 참조할 수 있는 오브젝트 
   두 번째 파라미터는 이벤트를 설정했던 엘리먼트 오브젝트 node 로 묶음

book.show 를 bind로 묶어서 function 오브젝트 설정 
id 가 point 인 요소에서 받은 입력 node 를 파라미터로 줌

function 객체 실행 
첫 번째 파라미터로 node 가 들어감 두 번쨰 파라미터 event 는 이벤트 오브젝트임(안에 많은 프로퍼티)
node.textContent 로 값 출력에 텍스트(값 출력)를 출력 
여기 앞에 붙어 있는 node 는 파라미터로 넘겨준 것
=> 이벤트를 설정했던 엘리먼트 오브젝트의 정보를 얻을 수 있는것 
물론 이벤트 오브젝트에도 이런 정보가 있음 

this.mypoint = book.mypoint 와 같음 100 처리 

이벤트 처리 => 대부분 bind 로 
핸들러 함수가 독립적으로 설정됨. => 공유도 가능한 이점

앞과 다른 것은 
var obj = book.get.bind(book);  => bind 로 만든 function 오브젝트를 호출하려면
obj() 로 해야하는데 
여기서는 onclick 이벤트가 발생하면 => 대신 호출해줌. 

이벤트 처리할때 bind 메소드를 사용하면 매우 다양하게 다양한 값들을 
handler 함수에서 사용할 수 있음.

*/

