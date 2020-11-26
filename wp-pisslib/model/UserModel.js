const mongoose = require('mongoose');
require('../database/db');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength: [6 , 'password min-6']
    }
},{

    timestamps : true

});

const User = mongoose.model('User' , userSchema);

module.exports = User;