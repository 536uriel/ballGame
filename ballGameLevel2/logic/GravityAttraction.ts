class GravityAttraction {


	constructor(x: number, y: number, color: string, radios: number, G: number) {

		this.x = x;
		this.y = y;
		this.color = color;
		this.radios = radios;
	
		this.G = G;
	
		
	}

	public x: number;
	public y: number;
	public color: string;
	public radios: number;
	public G: number;




	public drowBall() {

		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var canvasContext = canvas.getContext("2d");

		var grd = canvasContext.createRadialGradient(this.x, this.y, 1, this.x, this.y, this.radios);
		
		grd.addColorStop(0, "yellow");
		grd.addColorStop(0.5, "blue");
		grd.addColorStop(1, "red");
	

		canvasContext.fillStyle = grd;
		canvasContext.beginPath();
		canvasContext.arc(this.x, this.y, this.radios, 0, Math.PI * 2, true);
		canvasContext.fill();

	}



}