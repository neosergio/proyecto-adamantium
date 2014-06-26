/* previous install connect and serve-static using node.js */
/* npm install connect */
/* npm install serve-static */
/* this is using 5000 port */
var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic(__dirname));
app.listen(5000);
/* just run this file using node */
/* node server.js */
