// 노드에서는 모듈을 만들어 사용 가능
const odd = "홀수";
const even = "짝수";

// module.exports 하고 넘겨주고 싶은 것들을 배열 또는 오브젝트 안에 집어넣으면 된다. 
// 보통 오브젝트 안에 넣어줌. 
// module.export =  [odd,even]
// 한 파일에서 하나만 만들어야 한다. 
module.exports = {
    odd,
    even,
}

// module.exports === exports === {} 처음 값이 빈 오브젝트이다. 
// 축약형 
// exports.odd = odd
// exports.even = even  
//exports 를 쓰면 module.exports 를 쓰면 안됌. 같이 쓸수는 없음 
// 초기화됌. 
module.exports = {
    odd,
    even
}
