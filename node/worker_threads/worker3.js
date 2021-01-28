const min =2 ;
const max = 10_000_000; 
const primes = [];

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

console.time('prime');
generatePrimes(min,max);
console.timeEnd('prime');
console.log(primes.length);

// 10초동안 싱글스레드 하나를 잡아먹으면 다른사람들은 10초를 기다려야 하는 문제점 발생
// 100명이 동시에 들어온다면 서비스가 불가능
// 이럴 경우 멀티스레드 이용하면 효율적
