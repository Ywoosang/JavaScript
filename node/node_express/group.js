app.get('/test',(req,res)=>{
    res.send('GET/test');
})
app.post('/test',(req,res)=>{
    res.send('POST/test')
})