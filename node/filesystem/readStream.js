const fs = require('fs');
// createReadStream 이 한번에 읽는 64kb 를 읽음.
// 데이터가 이에 미치지 못하면 readfile 과 마찬가지로 그냥 한번에 읽는것과 마찬가지.
// 나뉘어 오는 것을 확인하기 위해 { highWaterMark :64000 } => 64kb 에서  { highWaterMark :16 } 16b  (바이트) 씩  보내면 됌.
// 대용량 파일전송은 스트림 방식이 필수
// 100기가짜리 파일을 한번에 버퍼로 보내면 서버 메모리가 100기가여야함 => 10기가짜리 서버 구축이 힘듬
// 100기가 짜리 파일을 10만번 1메가로  보내면 됌.  서버 메모리가 1메가만 있으면 됌. 
// 메모리 관리에서 효율적이다. 
const readStream = fs.createReadStream('./readme3.txt',{ highWaterMark :16 });
const data = [];
readStream.on('data',(chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});
readStream.on('end',() => {
    // 스트림은 조각조각내서 동시에 오는게 아니라 순서대로 옴.
    // concat 으로 합쳐줌 
    console.log('end :',Buffer.concat(data).toString());
}); 
readStream.on('error',(err)=> {
    console.log('error :',err); 
})

