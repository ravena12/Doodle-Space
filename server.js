var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static('client'));
var server = app.listen(8000, function() {
	console.log('listening on 8000')
});
var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);
function newConnection(socket){
	console.log(socket.id, 'new socket connection');
	socket.on('mouse', mouseMsg);
	function mouseMsg(data){
		socket.broadcast.emit('mouse', data);
	}
}


