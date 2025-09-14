const express = require("express");

const app = express();

app.set('view engine', 'ejs')

//routing
app.get('/',(req,res)=>{
    res.send('home page')
})

app.post('/api/data',(req,res)=>{
    res.json({
        message: 'Data recieved',
        data : req.body
    })
})