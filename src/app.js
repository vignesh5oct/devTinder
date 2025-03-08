const express = require('express');
const app = express();
const port = 3000;

app.use('/home',(req,res)=>{
    res.send('Hello Home');
})

app.get('/user',(req,res)=>{
    res.send({name:'John',age:25});
})


app.post('/user',(req,res)=>{
    res.send('User created');
})

app.delete('/user',(req,res)=>{
    res.send('User Deleted');
})


// app.use('/',(req,res)=>{
//     res.send('Hello World');
// })


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})