const Book = require('../model/BooksModel');

module.exports.getBook = (req,res) => {
    res.send('Hello from controller book');
}