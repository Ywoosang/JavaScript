/*
버퍼 :일정한 크기로 모아두는 데이터 010101..
- 일정한 크기가 되면 한 번에 처리
- 버퍼링: 버퍼에 데이터가 찰 때까지 모으는 작업

스트림 : 데이터의 흐름
- 버퍼들이 계속 전달되는것이라고 보면 됌. 
- 일정한 크기로 나눠서 여러 번에 걸쳐서 처리
- 버퍼(또는 청크) 의 크기를 작게 만들어서 주기적으로 데이터를 전달 
- 스트리밍: 일정한 크기의 데이터를 지속적으로 전달하는 작업 

노드에서는 Buffer 객체 사용 
*/
const buffer = Buffer.from('이 텍스트를 버퍼로 전환해 보세요');
// 수동으로 바꿔줄 수 있다. 
console.log(buffer); //<Buffer ec 9d b4 20 ed 85 8d ec 8a a4 ed 8a b8 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 ec a0 84 ed 99 98 ed 95 b4 20 eb b3 b4 ec 84 b8 ec 9a 94>
console.log(buffer.length); // 길이가 46 => 46바이트
console.log(buffer.toString()); // 버퍼를 다시 문자열로 바꾸기

const array = [Buffer.from('띄엄1'),Buffer.from('띄엄2'),Buffer.from('띄엄3')];
console.log(Buffer.concat(array).toString()); // 버퍼들 이어붙이고 string 으로 변환 

console.log(Buffer.alloc(5)); // 빈 버퍼 만들기  <Buffer 00 00 00 00 00> 
