const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let User = require('../model/UserModel');



process.env.SECRECT_KEY = 'secret';



module.exports.register = (req,res) => {

    const today = new Date();
 
    const usersData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    usersData.password = hash
                    User.create(usersData)
                        .then(user => {
                            res.json({
                                status: user.email + " registered success"
                            })
                        })
                        .catch(err => {
                            res.send(`error ${err}`);
                        })
                })
            } else {
                res.json({
                    error: "user already exist"
                });
            }
        })
        .catch(err => {
            res.send(` error ${err}`);
        })


}


module.exports.login = (req,res) => {
        User.findOne({
            where : {
                email : req.body.email
            }
        })
        .then( user => {
            if(user) {
                if(bcrypt.compareSync(req.body.password , user.password)){
                    let token = jwt.sign(user.dataValues , process.env.SECRECT_KEY , {
                        expiresIn : 1140
                    })
                    res.send(token);
                }
            }else{
                res.status(400).json({
                    error : "user not exist"
                })
            }
        })
        .catch( err => {
            res.status(400).json({
                error : err
            })
        })

}
