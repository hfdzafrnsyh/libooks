const express = require('express');
const router = express.Router();
const BookController = require('../../controller/BookController');


router.get('/books' , BookController.getBook);


module.exports = router;





