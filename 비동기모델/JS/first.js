var obj = new Promise((resolve,reject)=>{
    resolve() //resolve 호출했을 때 받을 함수가 없음. 
    reject()
    console.log("pending"); //log 실행하고 함수 블럭이 끝나면 인스턴스 생성해서 obj 에 할당
});
obj.then((value)=>{
    console.log("성공");
}, (reason) => {
    console.log("실패");
});
console.log("마지막");


//pending -> 마지막 -> 성공


var obj = new Promise((resolve,reject) =>{
    resolve("성공"); // 상태가 하나만 발생하므로 둘중 하나만 호출 
    reject("실패");
});
obj.then((value)=> {console.log(value)},(reason)=>{console.log(reason)});
console.log("끝");

//끝 -> 성공 

//비동기 2개 => pending  -> 마지막,끝 -> 성공,성공으로 찍힘




