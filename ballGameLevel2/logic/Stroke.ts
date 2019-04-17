class Stroke {

	constructor(x: number, y: number, font: string, str: string, points?: number,w?:number,h?:number,colorRect?:string,rectx?:number,recty?:number) {

		this.x = x;
		this.y = y;
		this.font = font;
		this.str = str;
		this.points = points;
		this.stroke = false;
		this.secCounter = 0;
		this.w = w;
		this.h = h;
		this.colorRect = colorRect;
		this.rectx = rectx;
		this.recty = recty;
	}

	public x: number;
	public y: number;
	public font: string;
	public str: string;
	public points: number;
	public stroke: boolean;
	public secCounter: number;
	public w: number;
	public h: number;
	public colorRect: string;
	public rectx: number;
	public recty: number;


	public strokeStr(canvasContext) {


		canvasContext.font = this.font;
		canvasContext.strokeText(this.str + this.points, this.x, this.y);


	}

	public rect() {
		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var Context = canvas.getContext("2d");

		Context.fillStyle = this.colorRect;
		Context.fillRect(this.rectx, this.recty, this.w, this.h);

	}


	

}