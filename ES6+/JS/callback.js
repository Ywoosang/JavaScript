function one(value){
    console.log(value);

}; 
function two(callback){
    const value = 'callback test';
    callback(value); 
};
two(one);

// const target = document.getElementById('target');

// target.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log('callback test');
// })


// target.addEventListener('click',function(e){
//     console.log(e);
// 	console.log('callback test');
// });
 

 /* 
클로저 

함수 안에서만 사용되는 함수가 있을 수 있음  이때 함수밖에서 함수를 선언하면 응집성이 
떨어지므로 안에서 실행하는것 
 */



// private 변수 
// 정보를 아무나 수정하는 것을 방지 
function outter(title) {
    // 전달된 매개변수(인자) 는 지역변수로 취급됨. 

    // 객체 안에 함수가 정의되어 있다. 
    // 이 맥락에서 객체 안 함수는 outter 함수의 내부함수라고 생각 가능.
    // 다만 외부 함수의 소속이 객체라는 것일 뿐.  따라서 외부함수의 지역변수에 접근 가능 
    return {
        get_title : function(){
            return title; // 지역 변수를 내부 함수에서 접근할 수 있음.
        },
        set_title : function(_title){
            title = _title // 내부 변수를 가리키는 title. 지역변수 title 값을 변경  
        }
    }
}

// 객체들이 내부적으로 접근하는 title 값은 각각 다르다 
inner = outter('title1');
 
inner2 = outter('title2'); 
console.log(inner.get_title());
console.log(inner2.get_title());

// 이 상태에서 set_title 을 이용해 outter 의 지역변수인 title 값을 변경시키면
// 지역변수인 title 을 객체가 참조하고 있으므로 get_title 로 반환하는 title 값도 달라진다.
inner.set_title('title1.1');
console.log(inner.get_title());
// 안바뀜
console.log(inner2.get_title()); 

/*
private variable 비밀 변수가 가능 
get_title, set_title 는 누구나 접근가능한 public 변수
하지만 title 은 외부 함수의 지역변수. 
이 지역변수인 title 은 outter 을 호출해서 할당했을 때 생이 마감된 outter 의 지역변수임.
따라서 get_title 과 set_title 을 통해서만 접근 가능 

private 한 변수가 왜 필요한지
소프트웨어가 커지면 많은 사람이 접근. 
소프트웨어 안에서 많은 데이터가 존재하는데 누구나 수정할 수 있는 형태의 데이터면 위험
get_title 과 set_title  만 title 에 접근할 수 있을 때의 장점 : title 변수를 아무나 수정할 수 없기 때문에 안전
title 값을 set_title 을 통해서 변경할 때 숨겨놓고, 변수의 값을 수정할 때는 set_title을 통해서만 수정할 수 있고
변수의 값을 가져올 때는 get_title을 통해서만 가져올 수 있도록 하면  변수가 안전하게 저장되고, 안전하게 수정될 수 있다. 
*/

var arr = []
for(let i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}


// const arr = []

// for(let i = 0; i<5; i++){
//     arr[i] = function(){
//         return i;
//     }
// }
// for(let func of arr){
//     console.log(func());
// }
