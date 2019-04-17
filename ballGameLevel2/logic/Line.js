var Line = /** @class */ (function () {
    function Line(x, y, onBaondry, radiosBaondry, upRadios, downRadios, maxD, minD) {
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
    Line.prototype.drowLines = function () {
        var canvas = document.getElementById("canvasGame");
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
    };
    return Line;
}());
//# sourceMappingURL=Line.js.map