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
    burger.insertOne({
        burger_name: req.body.burger_name,
        devoured: 0
    }, function(err, result, fields) {
        console.log(result);
        res.json({ "something": fields });
    });
});

router.put("/api/burgers", function(req, res) {
    burger.updateOne(
        req.body.id, function(err, result) {
        console.log(err);
        console.log(req.body.id);
        res.json({ "something": result });
        console.log('this worked')
    });
});


module.exports = router;