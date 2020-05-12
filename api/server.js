const express = require('express');
const mongoose = require('mongoose');


const app = express();


mongoose.connect('mongodb://localhost:27017/orclampapi');


app.get('/', (req, res)=>{
    res.send('Hello Orc');
})

app.listen(3001);