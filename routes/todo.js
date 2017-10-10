var express = require('express');
var router = express.Router();

var tasks = require('../models/task.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getalltodo',function(req,res,next){
  tasks.getAllTasks(function(err,rows){
    res.json(rows);
  });
});

module.exports = router;
