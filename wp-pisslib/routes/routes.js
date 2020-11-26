'use-strict'

const routes = (app) => {




    // bookWebRoute
    const bookWeb = require('./web/Book');
    app.use(bookWeb);

    // apiuserRoute
    const userApi = require('./api/ApiUser');
    app.use(userApi);


    app.get('/' , (req,res) => {
        res.send('hello from root');
    })

}


module.exports = routes;