var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "honey123"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
