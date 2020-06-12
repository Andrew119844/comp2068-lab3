'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Comp 2068-Lab-3' });
});

router.get('/mom', function (req, res) {
    var momName = ["Mom"];
    res.render('Mom', { 'name': momName });
});

router.get('/bro', function (req, res) {
    var brotherName = ["Brother"];
    res.render('Bro', { 'name': brotherName });
});

router.get('/andrew', function (req, res) {
    var myName = ["Me"];
    res.render('Andrew', { 'name': myName });
});


module.exports = router;
