var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
    burger.selectAll("burgers", function(err, data) {
        if(err) throw err;
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    
});


module.exports = router;