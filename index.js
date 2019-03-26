var koa = require('koa');
var http = require('http');
var path = require('path');

var app = new koa();
app.use(require('koa-static')(path.join(__dirname, './dist')));

http.createServer(app.callback()).listen(3009)