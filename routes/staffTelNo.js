var express = require('express');
var router = express.Router();

/*database connection*/
var con=require('../config/connection');
/* GET My Profile page. */

router.get('/', function(req, res, next) {
    con.query('select * from doctor', function (err, rows,fields) {
        if (err) throw err;
        res.render('staffTelNo', {doctor: rows});

    });


});




module.exports = router;
