class Man {

	constructor(x: number,y:number,h:number,w:number) {

		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.counterimg = 0;
		this.idImg = new Array<any>(4);

		for (var i: number = 0; i < this.idImg.length; i++) {
			this.idImg[i] = document.getElementById('man' + i);

		}

	}

	public x: number;
	public y: number;
	public h: number;
	public w: number;
	public idImg: any[];
	public counterimg;

	public drow() {

		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var Context = canvas.getContext("2d");

		Context.drawImage(this.idImg[this.counterimg], this.x, this.y, this.w, this.h);

		this.counterimg++;

		if (this.counterimg > 3) {

			this.counterimg = 0;
		}
	}
}