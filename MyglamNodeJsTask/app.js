const express = require('express');
var http = require("http");
var bodyParser = require('body-parser');
var settings =require('./config/settings.js');
const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, origin, accept, authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    res.setHeader('Access-Control-Max-Age', '1209600');

    // Pass to next layer of middleware
    next();
});

var globSync = require('glob').sync;
var allRoutes = globSync('./routes/**/*.js', {
    cwd: __dirname
}).map(require);
allRoutes.forEach(function(routes) {
    app.use(settings.contextRoot,routes);
}); 


var port = settings.appPort;
var server = http.createServer(app); 
var setRequestTimeOut = server.listen(port,function(err)
{
	if(err) throw err;
	console.log('app listening on port ' + port + '!')
});
setRequestTimeOut.timeout = settings.timeOut; 