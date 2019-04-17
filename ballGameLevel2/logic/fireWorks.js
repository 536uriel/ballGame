var FireWorks = /** @class */ (function () {
    function FireWorks(index, radios, fireRadios, fireLine) {
        this.x = new Array(index);
        this.y = new Array(index);
        this.radios = new Array(index);
        for (var i = 0; i < index; i++) {
            this.radios[i] = radios;
        }
        this.fireRadios = fireRadios;
        this.fire = false;
        this.degrees = 0.7;
        this.fireLine = fireLine;
    }
    FireWorks.prototype.drow = function (canvasContext) {
        for (var index = 0; index < this.x.length; index++) {
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
    };
    FireWorks.prototype.drowFireWorks = function (canvasContext) {
        for (var index = 0; index < this.x.length; index++) {
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
    };
    FireWorks.retRandomColor = function () {
        var color = ["blue", "green", "yellow", "red"];
        var rend = Math.round(Math.random() * color.length);
        for (var i = 0; i < color.length; i++) {
            if (rend == i) {
                return color[i];
            }
        }
    };
    return FireWorks;
}());
//# sourceMappingURL=fireWorks.js.map