
let board;

function setup() {
	
	createCanvas(550, 550);
	
	board = new Board();
	board.smartFill();
  
}

function draw() {
	background(51);
	
	board.show();
	
}

function mousePressed() {
	board.update(mouseX, mouseY);
}

function dispEnd() {
	let elem = document.getElementById('resultsDisplay');
	noLoop();
		
	document.getElementById("myModal").style.display = "block";
		
	elem.innerHTML = 'You won !';
}