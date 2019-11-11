var express = require("express");

var router = express.Router();

var path = require("path");

var accounts = require("./account");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
router.get("/main", function(req, res){
    res.sendFile(path.join(__dirname, "main.html"));
});
router.get("/account", function(req, res){
    res.sendFile(path.join(__dirname, "account.html"));
});
router.get("/data", function(req, res) {
    accounts.all(function(data) {
      res.json({ balance: data });
    });
});
router.use(express.static(path.join(__dirname, 'public')));

module.exports = router;
