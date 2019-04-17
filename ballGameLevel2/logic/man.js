var Man = /** @class */ (function () {
    function Man(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.counterimg = 0;
        this.idImg = new Array(4);
        for (var i = 0; i < this.idImg.length; i++) {
            this.idImg[i] = document.getElementById('man' + i);
        }
    }
    Man.prototype.drow = function () {
        var canvas = document.getElementById("canvasGame");
        var Context = canvas.getContext("2d");
        Context.drawImage(this.idImg[this.counterimg], this.x, this.y, this.w, this.h);
        this.counterimg++;
        if (this.counterimg > 3) {
            this.counterimg = 0;
        }
    };
    return Man;
}());
//# sourceMappingURL=man.js.map