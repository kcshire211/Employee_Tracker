const mysql = require("mysql2");
//creates connection for mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Eugene#211MySQL",
    database: "employee_db",
});

connection.connect(function (err) {
    if(err) throw err;
});

module.exports = connection;