const mongoose = require('mongoose');

const uri = process.env.URI;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology : true
});

const connection = mongoose.connection;

connection.once('open',() => {
    console.log('Connection Mongodb Successfully');
});

