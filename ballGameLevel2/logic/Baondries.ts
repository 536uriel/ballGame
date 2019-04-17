class Baondries {

	constructor(x: number, y: number, w: number, h: number, onBaondry: boolean) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.onBaondry = onBaondry;
		this.short = true;
		this.long = false;
		this.counterGrd = 0;
		this.counterGrdRight = true;
		this.counterGrdLeft = false;

	}

	public x: number;
	public y: number;
	public width: number;
	public height: number;
	public onBaondry: boolean;
	public short: boolean;
	public long: boolean;
	public counterGrd: number;
	public counterGrdRight: boolean;
	public counterGrdLeft: boolean;



	public drowBaondries() {

		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var canvasContext = canvas.getContext("2d");
		var grd = canvasContext.createLinearGradient(this.x, this.y, this.x + this.counterGrd, this.y - this.height);
		grd.addColorStop(0, "green");
		grd.addColorStop(1, "red");
	

		canvasContext.fillStyle = grd;
		canvasContext.fillRect(this.x, this.y, this.width, this.height);

		if (this.counterGrd > this.width) {
			this.counterGrdRight = false;
			this.counterGrdLeft = true;
		}

		if (this.counterGrd < 0) {
			this.counterGrdLeft = false;
			this.counterGrdRight = true;
		}

		if (this.counterGrdRight) {
			this.counterGrd++;

		}

		if (this.counterGrdLeft) {
			this.counterGrd--;
		}

	}

	

	public shortLongBaondry() {

		if (this.height >= -1) {

			this.long = false;
			this.short = true;
		}

		if (this.height <= -100) {

			this.short = false;
			this.long = true;
		}

		if (this.short) {

			this.height -= 1;
		}

		if (this.long) {

			this.height += 1;
		}


	}

}