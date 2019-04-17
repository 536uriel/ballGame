var Arrow = /** @class */ (function () {
    function Arrow() {
    }
    Arrow.prototype.drow = function () {
        var canvas = document.getElementById("canvasGame");
        var Context = canvas.getContext("2d");
        Context.drawImage(this.imgid, this.x, this.y, this.w, this.h);
    };
    return Arrow;
}());
//# sourceMappingURL=Arrow.js.map