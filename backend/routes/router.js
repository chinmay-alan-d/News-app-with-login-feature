const express = require('express');
const router = express.Router();
const Person = require('../model/model.js');
// const http = require('http');

router.get('/all',async (req,res)=>{
    try {
        const result = await Person.find();
        res.json(result);
    } catch (error) {
        console.log('error finding data from /all');
    }
});

router.post('/signUp',async (req,res)=>{
    const newUser = new Person({
        name : req.body.name,
        userName : req.body.userName,
        password : req.body.password,
        email : req.body.email
    })
    try {
        const i = await newUser.save();
        res.json('ok');
    } catch (error) {
        console.log('error posting data in /signup',error);
    }
})

router.post('/login',async (req,res)=>{
    const data = req.body;
    const DataUserName = data.userName;
    const DataPassword = data.password;
    console.log(DataUserName);
    console.log(DataPassword);
    try {
        const serch = await Person.findOne({userName : DataUserName})
        if(serch===null){
            res.send('username doesnt exist');
            return;
        }
        const actualPassword = serch.password
        if(actualPassword===DataPassword){
            res.send('match');
            console.log(serch);
        }else{
            res.send('not match');
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
