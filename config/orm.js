var connection = require("/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, data) {
            if(err) throw err;
            console.log(result);
        });
    },

    insertOne: function(table, cols, val, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (" + cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length) + ")";

        console.log(queryString);

        connection.query(queryString, val, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },

    updateOne: function();
}

module.exports = orm;