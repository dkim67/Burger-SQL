var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(data) {
            cb(data);
        });
    },

    insert: function(col, burger, cb) {
        orm.insert('burgers', col, burger, function(data) {
            cb(data);
        });
    },

    update: function(col, burger_id, cb) {
        orm.update('burgers', col, burger_id, function(data) {
            cb(data);
        });
    }
};

module.exports = burger;