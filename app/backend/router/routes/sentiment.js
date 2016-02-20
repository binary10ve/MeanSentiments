'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var analyze = require('Sentimental').analyze,
    positivity = require('Sentimental').positivity,
    negativity = require('Sentimental').negativity;

module.exports = function (isLoggedIn) {
	router.post('/', function (req, res) {
		res.status(200).send({ analysis : analyze(req.body.sentence)});
	});


	return router;

};
