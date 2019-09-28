var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, cb);
            console.log(cb);
    },

    insertOne: function(col, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, col, cb);
        console.log(cb);
    },

    updateOne: function(col, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(queryString, col, cb);
    }
};

module.exports = orm;