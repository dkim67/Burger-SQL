var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/burgers', function(req, res) {
    burger.selectAll(function(data) {
        res.render('index', { burgers: data });
    });
});

router.post('/burgers/create', function(req, res) {
    burger.insert('burger', req.body.name, function() {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/devour/:id', function(req, res) {
    console.log(req.params.id);
    burger.update('devoured', req.params.id, function(data) {
        res.json(data);
    });
});

router.use(function(req, res) {
    res.redirect('/burgers');
});

module.exports = router;