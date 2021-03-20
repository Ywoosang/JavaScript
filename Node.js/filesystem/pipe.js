const fs = require('fs');
// zlib 을 통해 파일을 합축해서 쓸 수도 있다.

const zlib = require('zlib');

// pipe 로 연결 가능 
// readStream 에서 읽어온 것을 pipe 로 연결해 writeStream 에서 받고 파일 씀. => 파일 복사 

// writestream.txt 를 16 바이트로 스트리밍 해주면서 압축함. 압축한 것을 씀. 
// stream 을 하면 압축을 할 수 있다. 
const readStream = fs.createReadStream('./writestream.txt',{ highWaterMark : 16 });
const writeStream = fs.createWriteStream('./userpipe1.gz');
const zlibStream = zlib.createGzip(); // 압축함. 
readStream.pipe(zlibStream).pipe(writeStream); // pipe 끼리 여러번 연결할 수 있다. 
