const express = require("express");
const router = express.Router();
const cors = require('cors');
const UserController = require('../../controller/UserController');

router.use(cors());

router.post('/register' , UserController.register);
router.post('/login' , UserController.login);

module.exports = router;