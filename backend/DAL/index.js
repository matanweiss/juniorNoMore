var mysql = require('mysql');
var config = require('./config.json');
var conn = mysql.createConnection(config); 

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = 
  conn;

   