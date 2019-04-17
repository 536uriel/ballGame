var BallEnemy = /** @class */ (function () {
    function BallEnemy(x, y, radios, doSumPer) {
        this.x = x;
        this.y = y;
        this.radios = radios;
        this.color = ["blue", "red"];
        this.colorBool = [false, false, false];
        this.doSumPer = doSumPer;
    }
    BallEnemy.prototype.changeColor = function (sec) {
        if (sec == 10) {
            return "red";
        }
        if (sec % 750 == 0) {
            this.colorBool[0] = true;
            this.colorBool[1] = false;
        }
        if (sec % 1500 == 0) {
            this.colorBool[0] = false;
            this.colorBool[1] = true;
        }
        if (this.colorBool[0]) {
            return this.color[0];
        }
        if (this.colorBool[1]) {
            return this.color[1];
        }
    };
    return BallEnemy;
}());
//# sourceMappingURL=BallEnemy.js.map