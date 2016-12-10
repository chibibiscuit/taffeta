var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var link = require('../models/link.js');

router.get('/', function(req, res, next) {
  link.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/:userName', function(req, res, next) {
  link.find({ userName: req.params.userId }, function (err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.put('/:id', function(req, res, next) {
  link.findByIdAndUpdate(req.params.id, req.body, function (err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.delete('/:id', function(req, res, next) {
  link.findByIdAndRemove(req.params.id, function (err, data){
    if (err) return next(err);
    res.json(data);
  });
});

router.post('/', function(req, res, next) {
  link.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;
