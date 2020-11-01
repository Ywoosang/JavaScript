
function book1(){
    getBook = function(){
        return "함수 표현식";
    };
    console.log(getBook());
    
    function getBook(){
        return "호이스팅"; 
    };
   
};
book1();

var result = book2();
book2 = function(){
    return "함수 표현식";
};
console.log(result);

function book2(){
    return "호이스팅";
};

function get(){
    return arguments;
};
console.log(get("A","B"));


function book(){
    var point = 123;
    function get(){
           console.log(point);
    };
    get();
};
book();

var value = 100;  //속하는 오브젝트가 없음 => 글로벌 오브젝트에 설정됨
function getVal(){
       var point = 200;  //book 오브젝트에 point 변수가 속함 
       return value;
};
console.log(getVal());

var base = 200;
function getPoint(bonus){
       var point = 100;
       return point + base + bonus;
};
console.log(getPoint(70)) ;



var obj1 = {point:100};
obj1.getPoint = function(){
    return this.point;
};
console.log(obj1.getPoint());



window.onload = function(){ 
 
function Book(point){ //함수 객체 생성 
    this.point = point; 
};
Book.prototype.getPoint = function(){ //생성한  Book 객체에 getpoint 라는 함수 프로퍼티 연결(추가)
    return this.point + 200;
};
var obj = new Book(100); //Book 인스턴스 생성하고 100 이라는 값 줌 => 
console.log(obj.point); 
console.log(obj.getPoint());
 

var Book = function(){};
var result = Book === Book.prototype.constructor;
console.log("1:",result)
var obj = new Book();
console.log("2:",Book === obj.constructor);
console.log("3:",typeof Book);
console.log("4:",typeof obj);

function Name(){};
Name.prototype = {
       constructor : Name,
       setPoint : function(){}
};
var obj = new Name();
console.log(obj.constructor)

 
function Number(){
       console.log("1:", this.point);
};
Number.prototype.getPoint = function(){
       this.setPoint();
       console.log("2:",this.point);
};
Number.prototype.setPoint = function(){
       this.point = 100;
};
var obj = new Number(); //인스턴스 생성하면 Number 에 이동하고 안 실행 => point 없으니까 undefined 
obj.getPoint();

};