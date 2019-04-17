class Line {


	constructor(x: number, y: number, onBaondry: boolean, radiosBaondry: number, upRadios: boolean, downRadios: boolean, maxD: number, minD: number) {
		this.x = x;
		this.y = y;
		this.onBaondry = onBaondry;
		this.radiosBaondry = radiosBaondry;
		this.upRadios = upRadios;
		this.downRadios = downRadios;
		this.degries = 0.7;
		this.maxD = maxD;
		this.minD = minD;
	}


	public x: number;
	public y: number;
	public x2: number;
	public y2: number;
	public degries: number;
	public radiosBaondry: number;
	public upRadios: boolean;
	public downRadios: boolean;
	public onBaondry: boolean;
	public maxD: number;
	public minD: number;


	public drowLines() {
		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var canvasContext = canvas.getContext("2d");


		this.x2 = this.x + (Math.sin(this.degries) * this.radiosBaondry);
		this.y2 = this.y + (Math.cos(this.degries) * this.radiosBaondry);

		canvasContext.moveTo(this.x, this.y);
		canvasContext.lineTo(this.x2, this.y2);
		canvasContext.stroke();


		if (this.degries >= this.maxD) {
			this.upRadios = false;
			this.downRadios = true;

		}

		if (this.degries <= this.minD) {
			this.downRadios = false;
			this.upRadios = true;
		}

		if (this.downRadios) {
			this.degries -= 0.01;
		}

		if (this.upRadios) {
			this.degries += 0.01;
		}

	}
}