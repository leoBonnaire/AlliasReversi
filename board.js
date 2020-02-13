
class Board {
	
	constructor() {
		/* Create the initial board state */
		this.state = [];
		for(let i = 0; i < 10; i++) {
			this.state[i] = [];
			for(let j = 0; j < 10; j++) {
				this.state[i][j] = false;
			}
		}
		
	}
	
	randomFill() {
		for(let i = 0; i < 10; i++) {
			for(let j = 0; j < 10; j++) {
				this.state[i][j] = Math.random() >= 0.5;
			}
		}
	}
	
	smartFill() {
		for(let i = 0; i < 100; i++) {
			this.update(Math.random() * Math.floor(width), Math.random() * Math.floor(width));
		}
	}
	
	update(x, y) {
		let w = width / 10;
		
		let xIndex = floor(x / w);
		let yIndex = floor(y / w);
		
		this.state[xIndex + 0][yIndex + 0] = !this.state[xIndex + 0][yIndex + 0];
		if(yIndex < 9) this.state[xIndex + 0][yIndex + 1] = !this.state[xIndex + 0][yIndex + 1];
		if(yIndex > 0) this.state[xIndex + 0][yIndex - 1] = !this.state[xIndex + 0][yIndex - 1];
		if(xIndex < 9) this.state[xIndex + 1][yIndex + 0] = !this.state[xIndex + 1][yIndex + 0];
		if(xIndex > 0) this.state[xIndex - 1][yIndex + 0] = !this.state[xIndex - 1][yIndex + 0];
		
		if(this.isClear()) dispEnd();		
	}
	
	isClear() {
		for(let i = 0; i < 10; i++) {
			for(let j = 0; j < 10; j++) {
				if(this.state[i][j] != this.state[0][0]) return 0;
			}
		}
		return 1;
	}
	
	show() {
		let w = width / 10;
		
		for(let i = 0; i < 10; i++) {
			for(let j = 0; j < 10; j++) {
				
				if(this.state[i][j]) fill(255);
				else fill(0);
				
				let x = i * w + w / 2;
				let y = j * w + w / 2;
				let r = w - 10;
				
				circle(x, y, r);
				
			}
		}
	}
	
}