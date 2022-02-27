const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname,'../girlfriends/build')))


app.get('/api',(req,res)=>{
    res.json({message:"fuck you all"});
})

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../girlfriends/build','index.html'))
})



app.listen(2700,()=>{
    console.log("listening at port 2700");
})