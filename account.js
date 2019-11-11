// Import the ORM to create functions that will interact with the database.
var orm = require("./orm");

var accounts = {
  all: function(cb) {
    orm.all("account", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("account", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("account", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("account", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (accountController.js).
module.exports = accounts;