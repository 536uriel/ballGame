class Arrow {

	public x: number;
	public y: number;
	public h: number;
	public w: number;
	public imgid: any;
	public direction: string;
	public left: boolean;
	public right: boolean;
	public start: boolean;


	public drow() {

		var canvas = <HTMLCanvasElement>document.getElementById("canvasGame");
		var Context = canvas.getContext("2d");

		Context.drawImage(this.imgid, this.x, this.y, this.w, this.h);



	}
}