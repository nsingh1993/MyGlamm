var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');
var settings =require('../config/settings.js');

var con = null;


router.post('/UserOperation',function(req,res){
	try{
		//console.log('req is : '+JSON.stringify(req));
		console.log('reached');
		var name = req.body.name;
		var email = req.body.email;
		var contact = req.body.contact;

		//console.log('as'+req.body.name);
		if(name && name != undefined && email && email != undefined && contact && contact != undefined){
			con = mysql.createConnection({
			  host: settings.host,
			  user: settings.user,
			  password: settings.password,
			  port : 3306
			});

			con.connect(function(err) {
			if (err){
				res.send({error:err});
			}
			  console.log("Connected!");
			  var sql = "insert into test.EmployeeDetail (name,email,contact) values('"+name+"','"+email+"',"+contact+")";
			  console.log('sql is :'+sql);
			  con.query(sql, function (err, result) {
			    if (err) {
			    	con.end();
			    	res.send({error:err});
			    }else{
				    //console.log("Result: " + result);
				    con.end();
				    res.send({"Result":'success'});
				}
			  });
			});
		}
		else{
			res.send({"Message":'required field missing'});
		}
	}
	catch(ex){
		if(con) con.end();
		res.send('some technical error occured.');
	}

});

router.put('/UserOperation',function(req,res){
	try{
		//console.log('req is : '+JSON.stringify(req));
		var name = req.body.name;
		var email = req.body.email;
		var contact = req.body.contact;
		var id = req.body.id;

		//console.log('as'+req.body.name);
		if(id && id != undefined && name && name != undefined && email && email != undefined && contact && contact != undefined){
			con = mysql.createConnection({
			  host: settings.host,
			  user: settings.user,
			  password: settings.password,
			  port : 3306
			});

			con.connect(function(err) {
			if (err){
				res.send({error:err});
			}
			  console.log("Connected!");
			  var sql = "update test.EmployeeDetail set name='"+name+"',email='"+email+"',contact='"+contact+"' where id = "+id;
			  console.log('sql is :'+sql);
			  con.query(sql, function (err, result) {
			    if (err) {
			    	con.end();
			    	res.send({error:err});
			    }else{
				    //console.log("Result: " + result);
				    con.end();
				    res.send({"Result":'success'});
				}
			  });
			});
		}
		else{
			res.send({"Message":'required field missing'});
		}
	}
	catch(ex){
		if(con) con.end();
		res.send('some technical error occured.');
	}

});

router.delete('/UserOperation',function(req,res){
	try{
		console.log('req is : '+JSON.stringify(req.body));
		var id = req.body.id;

		//console.log('as'+req.body.name);
		if(id && id != undefined ){
			con = mysql.createConnection({
			  host: settings.host,
			  user: settings.user,
			  password: settings.password,
			  port : 3306
			});

			con.connect(function(err) {
			if (err){
				res.send({error:err});
			}
			  console.log("Connected!");
			  var sql = "delete from test.EmployeeDetail where id = "+id;
			  console.log('sql is :'+sql);
			  con.query(sql, function (err, result) {
			    if (err) {
			    	con.end();
			    	res.send({error:err});
			    }else{
				    //console.log("Result: " + result);
				    con.end();
				    res.send({"Result":'success'});
				}
			  });
			});
		}
		else{
			res.send({"Message":'required field missing'});
		}
	}
	catch(ex){
		if(con) con.end();
		res.send('some technical error occured.');
	}

});

router.get('/UserOperation',function(req,res){
	try{
		//console.log('req is : '+JSON.stringify(req));
		//var id = req.body.id;

		//console.log('as'+req.body.name);
			con = mysql.createConnection({
			  host: settings.host,
			  user: settings.user,
			  password: settings.password,
			  port : 3306
			});

			con.connect(function(err) {
			if (err){
				res.send({error:err});
			}
			  console.log("Connected!");
			  var sql = "select * from test.EmployeeDetail";
			  console.log('sql is :'+sql);
			  con.query(sql, function (err, result) {
			    if (err) {
			    	con.end();
			    	res.send({error:err});
			    }else{
				    //console.log("Result: " + result);
				    con.end();
				    res.send({"Result":result});
				}
			  });
			});
	}
	catch(ex){
		if(con) con.end();
		res.send('some technical error occured.');
	}

});

module.exports = router;