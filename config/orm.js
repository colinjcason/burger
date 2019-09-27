var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, cb);
            console.log(cb);
    },

    insertOne: function(cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured)VALUES (?, 0)";

    }
}

module.exports = orm;