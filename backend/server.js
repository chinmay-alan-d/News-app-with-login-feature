const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router.js');
const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/credentialDB");
const db = mongoose.connection;
app.use(express.json());
app.use(
    cors({
        origin : '*'
    })
)

db.on('error',()=>{
    console.log('error connecting to data');
})

db.once('open',()=>{
    console.log('connection opened with database');
})

app.get('/',(req,res)=>{
    res.send('hello from /')
})

app.get('/all',router);
app.post('/login',router);
app.post('/signUp',router);

app.listen(4000,()=>{
    console.log('server running on port 4000');
})