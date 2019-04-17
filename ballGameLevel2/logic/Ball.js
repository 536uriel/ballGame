var Ball = /** @class */ (function () {
    function Ball(x, y, radios, color) {
        this.x = x;
        this.y = y;
        this.radios = radios;
        this.color = color;
        Ball.onBaondry = false;
        Ball.wasOnBaondry = false;
        Ball.right = false;
        Ball.left = false;
        Ball.m = 5;
        Ball.reverse = false;
        Ball.up = false;
        Ball.ground = 585;
        Ball.jump = 90;
        Ball.topjump = Ball.ground - Ball.jump;
        Ball.upandDown = false;
    }
    Ball.prototype.calculateGravity = function () {
        for (var i = 0; i < this.lines.length; i++) {
            this.forceRight = Ball.m * Math.sin((90 / 60) - lines[i].degries);
            this.forceLeft = Ball.m * Math.cos((90 / 60) - this.lines[i].degries);
            this.forceRight -= this.forceLeft;
            this.forceDown -= this.forceLeft;
        }
    };
    Ball.prototype.drowBall = function () {
        var canvas = document.getElementById("canvasGame");
        var canvasContext = canvas.getContext("2d");
        canvasContext.fillStyle = this.color;
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radios, 0, Math.PI * 2, true);
        canvasContext.fill();
    };
    Ball.prototype.up = function () {
        this.y -= Ball.m;
    };
    Ball.prototype.down = function () {
        this.y += Ball.m;
    };
    Ball.prototype.moveBall = function () {
        onkeydown = function (data) {
            if (data.key == "ArrowRight") {
                Ball.right = true;
                Ball.left = false;
            }
            if (data.key == "ArrowLeft") {
                Ball.left = true;
                Ball.right = false;
            }
            if (data.key == "ArrowUp") {
                Ball.up = true;
                Ball.reverse = false;
            }
        };
        onkeyup = function (data) {
            if (data.key == "ArrowRight") {
                Ball.right = false;
                Ball.left = false;
            }
            if (data.key == "ArrowLeft") {
                Ball.left = false;
                Ball.right = false;
            }
        };
        var brk = false;
        for (var i = 0; i < this.boundry.length; i++) {
            for (var y = -2; y <= 2; y++) {
                if (this.x >= this.boundry[i].x && this.x <= this.boundry[i].width + this.boundry[i].x && this.y + this.radios + y == this.boundry[i].y && !Ball.up) {
                    Ball.onBaondry = true;
                    Ball.wasOnBaondry = true;
                    Ball.reverse = false;
                    Ball.topjump = this.boundry[i].y - this.radios - Ball.jump;
                    brk = true;
                    break;
                }
                else {
                    Ball.onBaondry = false;
                }
            }
            if (brk)
                break;
        }
        if (!brk) {
            for (var i = 0; i < this.waves.length; i++) {
                for (var y = -2; y <= 2; y++) {
                    if (this.x >= this.waves[i].x && this.x <= this.waves[i].width + this.waves[i].x && this.y + this.radios + y == this.waves[i].y + this.waves[i].height && !Ball.up) {
                        Ball.onBaondry = true;
                        Ball.wasOnBaondry = true;
                        Ball.upandDown = true;
                        Ball.reverse = false;
                        Ball.topjump = this.waves[i].y - this.radios - Ball.jump + this.waves[i].height;
                        this.y = this.waves[i].y + this.waves[i].height - this.radios;
                        brk = true;
                        break;
                    }
                    else {
                        Ball.onBaondry = false;
                    }
                }
                if (brk)
                    break;
            }
        }
        if (!brk) {
            for (var i = 0; i < this.lines.length; i++) {
                for (var num = -3; num <= 3; num++) {
                    var y1 = this.lines[i].y;
                    var y2 = this.lines[i].y2;
                    var x1 = this.lines[i].x;
                    var x2 = this.lines[i].x2;
                    var m = (y1 - y2) / (x1 - x2);
                    if (this.y + this.radios + num == Math.round((m * (this.x - x1)) + y1) && this.x >= this.lines[i].x && this.x <= this.lines[i].x2 && !Ball.up) {
                        Ball.onBaondry = true;
                        Ball.wasOnBaondry = true;
                        Ball.reverse = false;
                        Ball.topjump = this.y - this.radios - Ball.jump;
                        this.y += num;
                        this.x += m;
                        brk = true;
                        break;
                    }
                    else {
                        Ball.onBaondry = false;
                    }
                }
                if (brk)
                    break;
            }
        }
        if (!brk) {
            for (var i = 0; i < this.dragon.index; i++) {
                for (var num = -2; num <= 2; num++) {
                    if (Math.round(this.x) >= this.dragon.ballx[i] - this.dragon.radios[i] && this.x <= this.dragon.ballx[i] + this.dragon.radios[i] && Math.round(this.y) + this.radios + this.dragon.radios[i] + num == Math.round(this.dragon.bally[i]) && !Ball.up) {
                        Ball.onBaondry = true;
                        Ball.wasOnBaondry = true;
                        Ball.reverse = false;
                        Ball.topjump = this.y - this.radios - Ball.jump;
                        this.y -= 1;
                        brk = true;
                        break;
                    }
                    else {
                        Ball.onBaondry = false;
                    }
                }
                if (brk)
                    break;
            }
        }
        if (!Ball.onBaondry && Ball.wasOnBaondry && !Ball.up) {
            Ball.reverse = true;
            Ball.upandDown = false;
        }
        if (this.y >= Ball.ground) {
            Ball.reverse = false;
            Ball.wasOnBaondry = false;
        }
        if (Ball.right) {
            this.x += 3;
        }
        if (Ball.left) {
            this.x -= 3;
        }
        if (this.y <= Ball.topjump && Ball.up) {
            Ball.up = false;
            Ball.reverse = true;
        }
        if (Ball.up && !Ball.reverse) {
            this.up();
            if (!Ball.onBaondry && Ball.wasOnBaondry) {
                Ball.upandDown = false;
            }
        }
        if (Ball.reverse) {
            this.down();
            Ball.topjump = Ball.ground - Ball.jump;
            ;
        }
    };
    return Ball;
}());
//# sourceMappingURL=Ball.js.map