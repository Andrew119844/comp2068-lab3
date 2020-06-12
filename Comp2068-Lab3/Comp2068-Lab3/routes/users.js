'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function (req, res) {
    var brotherName = ["Brian"];
    res.render('brother', { 'name': brotherName });
});

module.exports = router;