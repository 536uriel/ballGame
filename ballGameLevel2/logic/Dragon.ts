class Dragon {

	constructor(index: number, ballx: number, bally: number, radios: number, color: string[], upline: number, downline: number, up: boolean, down: boolean, leftLine: number, rightLine: number, left: boolean, right: boolean) {

		this.index = index;

		for (var i: number = 0; i < this.index; i++) {

			this.ballx = new Array<number>(index);
			this.bally = new Array<number>(index);
			this.up = new Array<boolean>(index);
			this.down = new Array<boolean>(index);
			this.left = new Array<boolean>(index);
			this.right = new Array<boolean>(index);
			this.radios = new Array<number>(index);

		}

		for (var i: number = 0; i < index; i++) {
			this.ballx[i] = ballx;
			this.bally[i] = bally;

			this.up[i] = up;
			this.down[i] = down;
			this.left[i] = left;
			this.right[i] = right;
			this.radios[i] = radios;

			radios++;
			ballx -= radios;
			bally -= radios;
		}

		
	
		this.color = color;
		this.upLine = upline;
		this.downLine = downline;
		this.leftLine = leftLine;
		this.rightLine = rightLine;
	

	
	}

	public index: number;
	public ballx: number[];
	public bally: number[];
	public radios: number[];
	public color: string[];
	public upLine: number;
	public downLine: number;
	public up: boolean[];
	public down: boolean[];
	public leftLine: number;
	public rightLine: number;
	public right: boolean[];
	public left: boolean[];


	public drowDragon() {


		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var canvasContext = canvas.getContext("2d");

		for (var i: number = 0; i < this.ballx.length; i++) {

			if (this.bally[i] <= this.upLine) {

				this.up[i] = false;
				this.down[i] = true;
			}

			if (this.bally[i] >= this.downLine) {

				this.down[i] = false;
				this.up[i] = true;
			}

			if (this.ballx[i] <= this.leftLine) {

				this.left[i] = false;
				this.right[i] = true;

			}

			if (this.ballx[i] >= this.rightLine) {

				this.right[i] = false;
				this.left[i] = true;

			}

			if (this.right[i]) {

				this.ballx[i]++;
			}

			if (this.left[i]) {

				this.ballx[i]--;

			}

			if (this.up[i]) {

				
				this.bally[i] -= 1;
			}

			if (this.down[i]) {
				
				this.bally[i] += 1;
			}

		


			canvasContext.fillStyle = this.color[i];
			canvasContext.beginPath();
			canvasContext.arc(this.ballx[i], this.bally[i], this.radios[i], 0, Math.PI * 2, true);
			canvasContext.fill();


			
		}

	}
	

}