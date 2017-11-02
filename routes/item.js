var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',//administrator
  password : '123456',
});

router.post('/count', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',' *');
	var title=req.body.title;
	var datatime=req.body.datatime;
	var name=req.body.name;
	var content=req.body.content;
		connection.query(`INSERT INTO baobei.tijiao (title,datatime,name,content) VALUES ('${title}','${datatime}','${name}','${content}')`, function(err, rows, fields) {
	
		});
});
router.get('/zhanshi', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',' *');
		connection.query("SELECT * FROM baobei.tijiao", function(err, rows, fields) {
			res.send(rows);
		});
});
module.exports = router;

