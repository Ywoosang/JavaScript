const { Worker, isMainThread,parentPort, workerData }  = require('worker_threads'); 

const min =2 ;
let primes = [];

function generatePrimes(start,range){
    let isPrime = true;
    const end = start +range;
    for(let i = start; i < end; i++){
        for(let j = min; j< Math.sqrt(end); j++){
            if(i !== j && i % j === 0) {
                isPrime =false;
                break; 
            }
        }
        if(isPrime){
            primes.push(i)
        }
        isPrime = true; 
    }
}


if (isMainThread) {
    const max = 10_000_000; 
    const threadCount = 8;
    const threads = new Set();
    // 8 개에게 2~ 100_000_000 까지 8 조각으로 나누어서 계산
    const range = Math.ceil((max -min ) / threadCount) 
    let start = min;
    console.time('prime');
    // 7 개 
    for(let i = 0; i<threadCount-1; i++){
        const wStart = start; 
        threads.add(new Worker(__filename,{workerData: { start :wStart, range }})); //worker data 마다 시작과 끝이 들어감 
        start += range; 
    }
    threads.add(new Worker(__filename, { workerData:{ start, range: range + ((max-min+1) % threadCount)}}))

    // 부모는 데이터(수신 이벤트) 받음
    for (let worker of threads){
        worker.on('error',(err)=>{
            throw err; 
        })
        worker.on('exit',() => {
            threads.delete(worker);//
            if(threads.size === 0){
                console.timeEnd('prime');
                console.log(primes.length);
            }
        }); 
        // 워커들이 구한 소수들 
        worker.on('message',(msg) => {
            primes = primes.concat(msg); // 찾아보기 

        }); 
    
} }else {
    generatePrimes(workerData.start,workerData.range);
    // 부모에게 데이터 전송 
    parentPort.postMessage(primes) 
}

// 10초동안 싱글스레드 하나를 잡아먹으면 다른사람들은 10초를 기다려야 하는 문제점 발생
// 100명이 동시에 들어온다면 서비스가 불가능
// 이럴 경우 멀티스레드 이용하면 효율적

// 스레드한테 일 분배하고 분배한 결과물 합쳐서 다시 도출