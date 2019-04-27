'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new@1234',
    database: 'expro'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;