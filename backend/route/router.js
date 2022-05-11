const express = require('express');
const router = express.Router();
const db = require('../DAL/index');
const db2 = require('../DAL/db');
const authToken = require('../Middlewares/authentication');
// const { signupValidation, loginValidation } = require('./validator');
// const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
db2.connect();
router.post('/register',  (req, res) => {  
    db.query(
        `SELECT * FROM juniors WHERE LOWER(mail) = LOWER(${db.escape(
            req.body.email
            )})`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This user is already in use!'
                });
            }
            if (err) {
                return res.status(403).send({ msg: ' internal problem' });
            }
            else {
                // username is available
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: "cannot encrypt"
                        });
                    } else {
                        // has hashed pw => add to database
                        db.query(
                            `INSERT INTO juniors (name, mail, password) VALUES ('${req.body.name}', ${db.escape(req.body.email)},${db.escape(hash)});`,
                            (err, result) => {
                                if (err) {
                                    //throw err;
                                    return res.status(400).send({
                                        msg: err
                                    });
                                }
                                else {
                                    return res.status(201).send({
                                        msg: 'The user has been registerd with us!'
                                    });
                                }
                            }
                        );
                    }
                });
            }
         }
    );
    //res.send("hello world");
});
 router.get('/check-users',authToken, async (req, res)  => {

         //res.send("hello world");
          try{
            let result = await db2.runQuery('SELECT * FROM juniors');
            console.log(result);
            let juniorsInfo = db2.extractDbResult(result);
            res.send(juniorsInfo);
         }
        catch(e){
             res.send(e);
         }

});
router.post('/login', (req, res, next) => {

    db.query(
        `SELECT * FROM juniors WHERE LOWER(mail) = LOWER(${db.escape(
            req.body.email
            )})`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Email or password is incorrect!'
                });
            }
            
            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        throw bErr;
                        return res.status(401).send({
                            msg: 'Email or password is incorrect!'
                        });
                    }
                    if (bResult) {
                        const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secrect', { expiresIn: '1h' });
                        return res.status(200).send({
                            msg: 'Logged in!',
                            token,
                            user: result[0]
                        });
                    }
                    return res.status(401).send({
                        msg: 'Username or password is incorrect!'
                    });
                }
            );
         }
    );
    //res.send("hello");
});
// router.post('/get-user', (req, res, next) => {
//     if (
//         !req.headers.authorization ||
//         !req.headers.authorization.startsWith('Bearer') ||
//         !req.headers.authorization.split(' ')[1]
//     ) {
//         return res.status(422).json({
//             message: "Please provide the token",
//         });
//     }
//     const theToken = req.headers.authorization.split(' ')[1];
//     const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
//     db.query('SELECT * FROM juniors where id=?', decoded.id, function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results[0], message: 'Fetch Successfully.' });
//     });
// });
module.exports = router;