// process.exit(1) 서버에서 오류 있을 때 확인, 프로세스 종료하는 용도로 사용
// process.exit(1) 오류 알려주고 종료 , process.exit(0) 오류 안알려주고 종료
 
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);
console.log(process.uptime());
console.log(process.execPath);
console.log(process.cwd());
console.log(process.cpuUsage()); 

console.log(process.env.SHELL)

// process 부분 확인