const mongoose = require('mongoose');
require('../database/db');


const Schema = mongoose.Schema;

const bookSchema = new Schema({

    nameBook : {
        type : String,
        required : true
    },
    authorBook : {
        type : String,
        required : true
    } 

},
    {
        timestamps : true
    }
);

const Book = mongoose.model('Book' , bookSchema);

module.exports = Book;