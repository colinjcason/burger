var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableName, cb) {
        orm.selectAll(tableName, cb);
    },

    // insertOne: function(col, vals, cb) {
    //     orm.insertOne("burgers", cols, vals, function(res) {
    //         cb(res);
    //     });
    // },

    // updateOne: function() {

    // }
};



module.exports = burger;