const { Worker,isMainThread,parentPort ,workerData} = require('worker_threads');


// 메인, 워커 분기처리 
if(isMainThread){  // 메인 스레드 
    const threads = new Set(); // set 은 중복되지 않는 배열 
    threads.add(new Worker(__filename, {
        workerData: {start:1} // 초기 데이터 넣어줌  workerData 가져온것을 key 로 해주면 알아서 워커스레드에 전송 
    }))
    threads.add(new Worker(__filename, {
        workerData: {start:2} // 초기 데이터 넣어줌 
    }))    
    for(let worker of threads){
        worker.on('message',(value)=> console.log('워커로부터',value));
        console.log('현재 워커스레드 개수는',threads.size)
        worker.on('exit',()=>{
            threads.delete(worker); // 끝난 워커들은 묶음에서 빼고 새로 생성하면 다시 추가하고 하는 식으로 관리
            console.log('남은 워커스레드 개수는',threads.size)
            if(threads.size === 0){
                console.log('워커 종료');
            }
        })
    }
} else { // 워커스레드 
    //보낸 메세지를 받을 수 있음 
    const data = workerData;
    parentPort.postMessage(data.start+100); // 오브젝트를 보냈으므로 
    // 동시에 101,102 만들어서 돌려보내줌.
}