/* previous install connect using node.js */
/* npm install connect */
/* this is using 8080 port */
var connect = require('connect');
connect.createServer(
	connect.static(__dirname)
).listen(8080);

/* just run this file using node */
/* node server.js */
