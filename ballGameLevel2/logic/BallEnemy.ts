class BallEnemy {

	constructor(x: number, y: number, radios: number, doSumPer: number) {
		this.x = x;
		this.y = y;
		this.radios = radios;
		this.color = ["blue", "red"];
		this.colorBool = [false, false, false];
		this.doSumPer = doSumPer;


	}

	public x: number;
	public y: number;
	public radios: number;
	public color: string[];
	public colorBool: boolean[];
	public doSumPer: number;




	public changeColor(sec: number) {


		if (sec == 10) {
			return "red"
		}

		if (sec % 750 == 0) {

			this.colorBool[0] = true;
			this.colorBool[1] = false;

		}

		if (sec % 1500 == 0) {
			this.colorBool[0] = false;
			this.colorBool[1] = true;

		}


		if (this.colorBool[0]) { return this.color[0]; }

		if (this.colorBool[1]) { return this.color[1]; }



	}
}
