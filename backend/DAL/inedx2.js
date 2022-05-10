
const mySql = require('mysql');
const connectionConfig = require('./config.json');



// this is a global var - so we can use it in all the functions in this file
let connection;


//-----------------------CONNECT AND DISCONNECT------------------------------

function connect() {
    //here we asiggn to the global var - the open connection that we created
    connection = mySql.createConnection(connectionConfig);

    return new Promise((resolve, reject) => {
        connection.connect((err) => { err ? reject(err) : resolve(); });
    });   
}

function disconnect() {
    return new Promise((resolve, reject) => {
        connection.end((err) => { err ? reject(err) : resolve(); });
    });   
}



//-----------------------DDL - Data Defenition Language---------------------------
//-----------------------DML - Data Manipulation Language-------------------------
function runQuery(queryParam) {
    return new Promise((resolve, reject) => {
        connection.query(queryParam,
            (err, res) => { err ? reject(err) : resolve(res) })
    });
}


function runQueryWithParam(queryParam, queryValues) {
    return new Promise((resolve, reject) => {
        connection.query(queryParam, [queryValues],
            (err, res) => { err ? reject(err) : resolve(res) })
    });
}

function extractDbResult(res) {
    return JSON.parse((JSON.stringify(res)).replace("RowDataPacket",""));
}


module.exports = {
    connect,
    disconnect,
    runQuery,
    runQueryWithParam,
    extractDbResult
}
