var mysql = require('mysql');

//mySQL connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root"
  database: "burgers_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
