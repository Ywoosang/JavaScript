const { Worker,isMainThread,parentPort} = require('worker_threads');

// 메인, 워커 분기처리 
if(isMainThread){  // 메인 스레드 
    /*
    처음에 메인 스레드가 생성되어 메인 스레드 안에서 워커 스레드들을 생성하고 워커스레드들에게 일을 분배 
    워커스레드들이 일을 마치면 그걸 다시 메인 스레드로 보내서 메인 스레드에서 워커 스레드들의 일을 합쳐서 
    최종적인 결과물로 리턴하는 방식 
    처음부터 워커스레드가 일을 나눠 갖는게 아니라 메인 스레드에서 일을 여러개 직접 프로그래밍해서 분배를 해주어야 하고 
    나중에 합쳐서 결과물 리턴하는것도 직접 코딩해야함.
    다만 워커스레드에서 동시에 분배했던 코드들이 돌아간다는 이점이 있음 
    */
    const worker = new Worker(__filename); // 파일의 경로 지정.else 부분을 이렇게 쓰고 싶지 않다면 워커스레드용 다른 파일로 해서 다른파일 경로는 path.join 로 만들어서. 
    // 이벤트 set 
    worker.on('message',(value)=> console.log('워커로부터 메시지 수신',value));
    // 워커스레드한테 메세지를을 보낼 수 있음
    worker.postMessage('ping')
} else { // 워커스레드 
    //보낸 메세지를 받을 수 있음 
    parentPort.on('message',(value)=> {
        console.log('부모로부터',value);
        // 다시 보낼 수 있음 
        parentPort.postMessage('pong');
        // 할일 다하면 
        parentPort.close(); 
    })
}