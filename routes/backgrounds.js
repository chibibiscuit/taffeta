var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var background = require('../models/background.js');

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  background.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/:id', function(req, res, next) {
  background.findById(req.params.id, function (err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.put('/:id', function(req, res, next) {
  background.findByIdAndUpdate(req.params.id, req.body, function (err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.delete('/:id', function(req, res, next) {
  background.findByIdAndRemove(req.params.id, function (err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.post('/', function(req, res, next) {
  background.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;
