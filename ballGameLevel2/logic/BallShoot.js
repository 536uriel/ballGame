var BallShoot = /** @class */ (function () {
    function BallShoot(x, y, radios, color) {
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
    BallShoot.prototype.drowBall = function (canvasContext) {
        canvasContext.fillStyle = this.color;
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radios, 0, Math.PI * 2, true);
        canvasContext.fill();
    };
    return BallShoot;
}());
//# sourceMappingURL=BallShoot.js.map