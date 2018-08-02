var connection = require("./connection.js");

function printQMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function convertSQL(ob) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM " + table, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insert: function(table, col, burger, cb) {
        connection.query("INSERT INTO " + table + "(" + col  + ")" + "VALUES (?)", burger, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    update: function(table, col, burger_id, cb) {
        connection.query("UPDATE " + table + " SET " + col + "=1 " + "WHERE id=" + burger_id, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }

};

module.exports = orm;
