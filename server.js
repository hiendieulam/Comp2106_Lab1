var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('port', process.env.PORT || 3000); //Create localhost with 3000 value
server.listen(app.get('port'));
console.log('Sever running...' + app.get('port'));

app.get('/', function(rer, res) {
    res.sendFile(__dirname + '/index.html')
});