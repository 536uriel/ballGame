var Dragon = /** @class */ (function () {
    function Dragon(index, ballx, bally, radios, color, upline, downline, up, down, leftLine, rightLine, left, right) {
        this.index = index;
        for (var i = 0; i < this.index; i++) {
            this.ballx = new Array(index);
            this.bally = new Array(index);
            this.up = new Array(index);
            this.down = new Array(index);
            this.left = new Array(index);
            this.right = new Array(index);
            this.radios = new Array(index);
        }
        for (var i = 0; i < index; i++) {
            this.ballx[i] = ballx;
            this.bally[i] = bally;
            this.up[i] = up;
            this.down[i] = down;
            this.left[i] = left;
            this.right[i] = right;
            this.radios[i] = radios;
            radios++;
            ballx -= radios;
            bally -= radios;
        }
        this.color = color;
        this.upLine = upline;
        this.downLine = downline;
        this.leftLine = leftLine;
        this.rightLine = rightLine;
    }
    Dragon.prototype.drowDragon = function () {
        var canvas = document.getElementById("canvasGame");
        var canvasContext = canvas.getContext("2d");
        for (var i = 0; i < this.ballx.length; i++) {
            if (this.bally[i] <= this.upLine) {
                this.up[i] = false;
                this.down[i] = true;
            }
            if (this.bally[i] >= this.downLine) {
                this.down[i] = false;
                this.up[i] = true;
            }
            if (this.ballx[i] <= this.leftLine) {
                this.left[i] = false;
                this.right[i] = true;
            }
            if (this.ballx[i] >= this.rightLine) {
                this.right[i] = false;
                this.left[i] = true;
            }
            if (this.right[i]) {
                this.ballx[i]++;
            }
            if (this.left[i]) {
                this.ballx[i]--;
            }
            if (this.up[i]) {
                this.bally[i] -= 1;
            }
            if (this.down[i]) {
                this.bally[i] += 1;
            }
            canvasContext.fillStyle = this.color[i];
            canvasContext.beginPath();
            canvasContext.arc(this.ballx[i], this.bally[i], this.radios[i], 0, Math.PI * 2, true);
            canvasContext.fill();
        }
    };
    return Dragon;
}());
//# sourceMappingURL=Dragon.js.map