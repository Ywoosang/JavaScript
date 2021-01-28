setImmediate(()=>{
    console.log('immediate');
});

setTimeout(()=>{
    console.log('time out 0 sec');
},0);

Promise.resolve().then(()=>{
    console.log('promise');
}); 

process.nextTick(()=>{
    console.log('nextTick'); 
});

 
