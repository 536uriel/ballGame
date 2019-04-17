var Stroke = /** @class */ (function () {
    function Stroke(x, y, font, str, points, w, h, colorRect, rectx, recty) {
        this.x = x;
        this.y = y;
        this.font = font;
        this.str = str;
        this.points = points;
        this.stroke = false;
        this.secCounter = 0;
        this.w = w;
        this.h = h;
        this.colorRect = colorRect;
        this.rectx = rectx;
        this.recty = recty;
    }
    Stroke.prototype.strokeStr = function (canvasContext) {
        canvasContext.font = this.font;
        canvasContext.strokeText(this.str + this.points, this.x, this.y);
    };
    Stroke.prototype.rect = function () {
        var canvas = document.getElementById("canvasGame");
        var Context = canvas.getContext("2d");
        Context.fillStyle = this.colorRect;
        Context.fillRect(this.rectx, this.recty, this.w, this.h);
    };
    return Stroke;
}());
//# sourceMappingURL=Stroke.js.map