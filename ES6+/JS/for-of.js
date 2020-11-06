var list = [1,2,3];
for(let k=0; k<list.length; k++){
    console.log("for 문으로",list[k]);
}
for(let item of list){
    console.log("for of 문으로",item);
}

var str ="Ywoosang";
for (let value of str){
    console.log(value);
}
var nodes =  document.querySelectorAll(".show");
console.log(nodes);
for(var node of nodes){
    console.log(node.textContent);  //텍스트만 뽑아 가져오기
};

var obj = {};
Object.defineProperties(obj,{
    sports: { 
        enumerable : false, value : "스포츠"  //열거 가능한프로퍼티는 enumerable=true 여야 함. 
    },
    book: {
        enumerable : true,value: "책"
    }
});
for(let item in obj){
    console.log(item+" : "+obj[item]);
};

var obj = {js : "자바스크립트", py: "파이썬",java: "자바"}
var keys = Object.keys(obj);
for(let key of keys){
    console.log(obj[key]);
}

//에러 생략
const ws = "우상" ;
try{
    ws ="Ywoosang"
}catch{
    console.log("error생략");
}
 
const sports = {
    point : 100,
    //ES5
    getValue : function(){
        return this.point;
    },
    getPoint(){
        return this.point;
    }
};
console.log(sports.getPoint());


