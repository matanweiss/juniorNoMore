const express = require('express');
const router = express.Router();
const db = require('../DAL/index');
const db2 = require('../DAL/db');
const authToken = require('../Middlewares/authentication');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
db2.connect();
router.post('/register-junior', authToken, async (req, res) => {
    try {
        // var id = db.escape(req.body.id);
        // console.log(id);
        let result = await db2.runQuery(
            'SELECT * FROM users WHERE mail = ' + db.escape(req.body.mail));
        console.log(result);
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                res.send('cannot encrypt');
            }
        })
        result = await db2.runQuery('INSERT INTO users (`firstName`,`lastName`,`mail`,`password`,`isJunior`) VALUES (`' + db.escape(req.body.firstName) + '`,`' + db.escape(req.body.lastName) + '`,`' + db.escape(req.body.mail) + '`,`' + db.escape(hash) + '`,`' + db.escape(req.body.isJunior) + '`)`');
        console.log(result);
        result = await db2.runQuery('SELECT `id` FROM users where mail = ' + db.escape(req.body.mail));
        result = await db2.runQuery(
            'INSERT INTO `juniors`( `user_id`, `phone`, `degree`, `academy`, `linkedin`, `skill1`, `skill2`, `skill3`, `personalNote`) VALUES (' + db.escape(result.body.id) + ',' + db.escape(req.body.phone) + ',' + db.escape(req.body.degree) + ',' + db.escape(req.body.academy) + ',' + db.escape(req.body.skill1) + ',' + db.escape(req.body.skill2) + ',' + db.escape(req.body.skill3) + ',' + db.escape(req.body.personalNote) + ');'
        );
        console.log(result);
        let juniorsInfo = db2.extractDbResult(result);
        res.send(juniorsInfo);
    }


    catch (e) {
        res.send(e);
    }
});
// router.post('/register-junior',  (req, res) => {  
//     db.query(
//         `SELECT * FROM users WHERE LOWER(mail) = LOWER(${db.escape(
//             req.body.email
//             )})`,
//         (err, result) => {
//             if (result.length) {
//                 return res.status(409).send({
//                     msg: 'This user is already in use!'
//                 });
//             }
//             if (err) {
//                 return res.status(403).send({ msg: ' internal problem' });
//             }
//             else {
//                 // username is available
//                 bcrypt.hash(req.body.password, 10, (err, hash) => {
//                     if (err) {
//                         return res.status(500).send({
//                             msg: "cannot encrypt"
//                         });
//                     } else {
//                         // has hashed pw => add to database
//                         db.query(
//                             `INSERT INTO users (firstName,lastName, mail, password,isJunior) VALUES ('${req.body.first_name}','${req.body.last_name}', ${db.escape(req.body.email)},${db.escape(hash)},'${req.body.isJunior}');`,
//                             (err, result) => {
//                                 if (err) {
//                                     //throw err;
//                                     return res.status(400).send({
//                                         msg: err
//                                     });
//                                 }
//                                 else {
//                                     db.query('SELECT * FROM users where mail = ${db.escape(req.body.email)} ;', (err,res)=>{
//                                         if(err){
//                                             return res.status(400).send({
//                                                 msg: err
//                                         }
//                                         else{
//                                             //db.query('INSERT INTO juniors('user_id', `phone`, `degree`, `academy`, `linkedin`, `skill1`, `skill2`, `skill3`, `personalNote`) VALUES (${res.body.id}'))

//                                         }
//                                     }

//                                      )
//                                     return res.status(201).send({
//                                         msg: 'The user has been registerd with us!'
//                                     });
//                                 }
//                             }
//                         );
//                     }
//                 });
//             }
//          }
//     );
//     //res.send("hello world");
// });
router.post('/login', (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(mail) = LOWER(${db.escape(
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
router.get('/get-juniors', authToken, async (req, res) => {

    //res.send("hello world");
    try {
        let result = await db2.runQuery(
            'SELECT * FROM `juniors` INNER JOIN (SELECT `firstName`,`lastName`,`mail`,`id` FROM users) as users ON users.id = juniors.user_id;'
        );
        console.log(result);
        let juniorsInfo = db2.extractDbResult(result);
        res.send(juniorsInfo);
    }
    catch (e) {
        res.send(e);
    }
});
router.post('/get-user', authToken, async (req, res) => {
    try {
        // var id = db.escape(req.body.id);
        // console.log(id);
        let result = await db2.runQuery(
            'SELECT * FROM juniors INNER JOIN (SELECT `firstName`,`lastName`,`mail`,`id` FROM users) as users ON users.id = juniors.user_id WHERE LOWER(user_id) = ' + db.escape(req.body.id));
        console.log(result);
        let juniorsInfo = db2.extractDbResult(result);
        res.send(juniorsInfo);
    }
    catch (e) {
        res.send(e);
    }
});
router.post('/delete-user', authToken, async (req, res) => {
    try {
        //    var id = db.escape(req.body.id);
        //    console.log(id);
        let result = await db2.runQuery(
            'DELETE FROM juniors WHERE user_id =' + db.escape(req.body.id));
        console.log(result);
        result = await db2.runQuery(
            'DELETE FROM users WHERE id =' + db.escape(req.body.id));
        console.log(result);
        result = await db2.runQuery(
            'DELETE FROM project WHERE publisher_id =' + db.escape(req.body.id));
        console.log(result);

        //let juniorsInfo = db2.extractDbResult(result);
        res.send("Deleted");
    }
    catch (e) {
        res.send(e);
    }
});
router.post('/update-junior-info', authToken, async (req, res) => {
    try {
        //    var id = db.escape(req.body.id);
        //    console.log(id);
        let result = await db2.runQuery(
            'DELETE FROM juniors WHERE user_id =' + db.escape(req.body.id));
        console.log(result);
        result = await db2.runQuery(
            'DELETE FROM users WHERE id =' + db.escape(req.body.id));
        console.log(result);
        result = await db2.runQuery(
            'DELETE FROM project WHERE publisher_id =' + db.escape(req.body.id));
        console.log(result);

        //let juniorsInfo = db2.extractDbResult(result);
        res.send("Deleted");
    }
    catch (e) {
        res.send(e);
    }
});
router.get('/get-projects', authToken, async (req, res) => {

    //res.send("hello world");
    try {
        let result = await db2.runQuery('SELECT * FROM project');
        console.log(result);
        let projectsInfo = db2.extractDbResult(result);
        res.send(projectsInfo);
    }
    catch (e) {
        res.send(e);
    }
});


module.exports = router;