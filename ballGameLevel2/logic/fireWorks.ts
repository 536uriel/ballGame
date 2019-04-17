class FireWorks {

	constructor(index: number, radios: number, fireRadios: number, fireLine: number) {

		this.x = new Array<number>(index);
		this.y = new Array<number>(index);
		

		this.radios = new Array<number>(index);

		for (var i: number = 0; i < index; i++) {
			this.radios[i] = radios;

		}
	
		this.fireRadios = fireRadios;
		this.fire = false;
		this.degrees = 0.7;

		this.fireLine = fireLine;
	}

	

	public x: number[];
	public y: number[]; 
	
	public radios: number[];
	

	public fire: boolean;
	public fireRadios: number;
	public degrees: number;
	public fireLine: number;

	public fireStarY: number[];
	public fireStarX: number[];
	public tmpx: number;
	public tmpy: number;
	public counterx: number;

	

	public drow(canvasContext) {

		for (var index: number = 0; index < this.x.length; index++) {
			canvasContext.fillStyle = FireWorks.retRandomColor();
			canvasContext.beginPath();
			canvasContext.arc(this.x[index], this.y[index], this.radios[index], 0, Math.PI * 2, true);
			canvasContext.fill();

			this.x[index] += Math.sin(this.degrees) * this.fireRadios;
			this.y[index] += Math.cos(this.degrees) * this.fireRadios;

			this.degrees += this.x.length;


			if (this.radios[index] <= this.fireLine) {
				this.radios[index] += 0.5;

			}

			if (this.radios[index] > this.fireLine) {
				this.fire = false;
				this.radios[index] = 5;
			}
		}

	}


	public drowFireWorks(canvasContext) {


		for (var index: number = 0; index < this.x.length; index++) {
			canvasContext.fillStyle = FireWorks.retRandomColor();
			canvasContext.beginPath();
			canvasContext.arc(this.x[index], this.y[index], this.radios[index], 0, Math.PI * 2, true);
			canvasContext.fill();

			this.x[index] += Math.sin(this.degrees) * this.fireRadios;
			this.y[index] += Math.cos(this.degrees) * this.fireRadios;

			if (this.radios[index] > 0) {
				this.radios[index] -= 0.2;

			}

			if (this.radios[index] <= 0) {

				this.radios[index] = 10;
			}

			this.degrees += (360 / this.x.length) / 40;

		}

		if (this.fireRadios <= this.fireLine) {
			this.fireRadios += 0.1;

		}

		if (this.fireRadios > this.fireLine) {
			this.fire = false;
			this.fireRadios = 5;
		}
	}

	public static retRandomColor() {
		var color = ["blue", "green", "yellow", "red"];
		var rend = Math.round(Math.random() * color.length);

		for (var i: number = 0; i < color.length; i++) {
			if (rend == i) {
				return color[i];
			}
				
		}

	}

}