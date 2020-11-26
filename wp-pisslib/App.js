const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

// use bodyparser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// dotenv
require('dotenv').config();

// static public
app.use(express.static('public'));

// set view engine
app.set('view engine' , 'ejs');


// routes
const routes = require('./routes/routes');
routes(app);


// port 
app.listen(port , () => {
    console.log(`Server run in port ${port}`);
});