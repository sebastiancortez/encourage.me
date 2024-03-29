var express = require('express');
var router = express.Router();
var db = require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/messages', function(req, res, next) {
    var sql='SELECT * FROM messages ORDER BY RAND() LIMIT 1';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('message', { title: 'message', sampleData: data});
  });
});
module.exports = router;