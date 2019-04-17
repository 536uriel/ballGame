class BallShoot {


	constructor(x: number, y: number, radios: number, color: string) {
		this.x = x;
		this.maxX = x;
		this.y = y;
		this.radios = radios;
		this.color = color;
		BallShoot.persec = 0;
		this.firstShoot = true;
		BallShoot.counter = 0;
		BallShoot.counter2 = -1;

	}


	public x: number;
	public maxX: number;
	public y: number;
	public radios: number;
	public color: string;
	public firstShoot: boolean;
	public static persec: number;
	public static counter: number;
	public static counter2: number;


	public drowBall(canvasContext) {

		canvasContext.fillStyle = this.color;
		canvasContext.beginPath();
		canvasContext.arc(this.x, this.y, this.radios, 0, Math.PI * 2, true);
		canvasContext.fill();
	}
}