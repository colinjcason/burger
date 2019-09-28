var orm = require("../config/orm.js");

var burger = {
    selectAll: function(tableName, cb) {
        orm.selectAll(tableName, cb);
    },

    insertOne: function(tableName, cb) {
        orm.insertOne(tableName, cb);
    },

    updateOne: function(tableName, cb) {
        orm.updateOne(tableName, cb);
    }
};



module.exports = burger;