const mongoose = require('mongoose');

const Person = new mongoose.Schema({
    userName : {
        type : String,
        unique : true
    },
    name : {
        type : String
    },
    password : {
        type : String
    },
    email : {
        type : String
    }
})

module.exports = mongoose.model('Person',Person);