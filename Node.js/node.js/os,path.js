console.log(__filename);
console.log(__dirname);

const os = require('os') // os 라는 파일 만들지 않았지만, 쓸 수 있도록 제공. 이미 노드에서 모듈로 만들어 놓은 것을 가져올 수 있음

// console.log(os.cpus()); // cpu 정보. 나중에 서버 띄울때 기본적으로는(백그라운드 제외) 싱글스레드.   코어가 몇개인지 
// os 스레드와 노드 스레드는 다르다. 

const path = require('path');
// console.log(path);

const join = path.join('/a','/b','c');
const resolve = path.resolve('/a','/b','c');
console.log(join,'\n',resolve);

// path.join 과 path.resolve 많이 씀.
console.log(path.join(__dirname,'','/var.js')) // join은 절대경로를 무시 /var.js 면 / 가 없다고 침  
console.log(path.resolve(__dirname,'..','/var.js')) // 가장 상위 폴더의 var.js   => 절대경로  resolve 는 절대 경로가 있으면 앞에것들이 무시됌. 절대경로 존중 
console.log(path.resolve(__dirname,'','./var.js') ) // 상대 경로

console.log(path.join('/foo/bar', './baz'));
console.log(path.join('/foo/bar', '/tmp/file/'));

let a = path.join(__dirname,'/crr','/temp','/name','dir','..');
let b = path.resolve(__dirname,'/crr','/temp','/name','dir','..');
console.log(a);
console.log(b);
