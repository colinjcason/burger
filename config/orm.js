var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, cb);
            console.log(cb);
    },

    insertOne: function(tableName, cb) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, tableName, cb);
        console.log(cb);
    },

    updateOne: function(tableName, id, cb) {
        var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ??";
        connection.query(queryString, [tableName, id], cb);
        console.log(cb);
    }
};

module.exports = orm;