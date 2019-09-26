var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, [table], cb);
            console.log(cb);
    }

    // insertOne: function(table, cols, val, cb) {
    //     var queryString = "INSERT INTO " + table;
    //     queryString += " (" + cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(val.length) + ")";

    //     console.log(queryString);

    //     connection.query(queryString, val, function(err, result) {
    //         if(err) throw err;
    //         cb(result);
    //     });
    // },

    // updateOne: function();
}

module.exports = orm;