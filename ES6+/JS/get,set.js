
const name = "setDouble"; 


const book = { 
    point : 100,
    get getPoint(){
        return this.point;
    },
    get Title(){   //다수의 getter 를 선언할 수 있다. 
        return "제목"
    },
    set setPoint(param){
        this.point = param;
    },
    set [name](){ 
        this.point = this.point *2; 
    }
};
console.log(book.getPoint);
console.log(book.getTitle); 
book.setPoint = 200; // setPoint 에 값을 할당하면 setPoint() 가 자동으로 호출
console.log(book.point);
book.setDouble()
//delete book[name]  delete 연산자로 setter를 삭제 가능

