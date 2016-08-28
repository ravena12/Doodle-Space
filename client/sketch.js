var socket;
var hexy = ''
function setup() {
	createCanvas(800,500);
	background(51);
	var theDiv = document.getElementById("canvasDiv");
	var content = document.getElementById("defaultCanvas0");
	theDiv.appendChild(content);
	socket = io.connect('http://localhost:8000');
	socket.on('mouse', newDrawing);

function newDrawing(data) {
	noStroke();
	fill(data.color);
	ellipse(data.x,data.y, 15,15)
	}
}
function colorPick(hex){
 	hexy = hex;
}
function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY,
		color: hexy
	}
	socket.emit('mouse', data);
	noStroke()
	fill(hexy);
	ellipse(mouseX,mouseY, 15, 15)
}


