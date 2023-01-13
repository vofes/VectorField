import Vector from "./Vector.js";
var Canvas = /** @class */ (function () {
    function Canvas(elementID) {
        this.canvasElement = null;
        this.ctx = null;
        this.resolution = new Vector(0, 0);
        this.canvasElement = document.getElementById(elementID);
        if (this.canvasElement == null || this.canvasElement == undefined) {
            console.error("Canvas Element with id: " + elementID + " not found");
            return;
        }
        this.ctx = this.canvasElement.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        this.resolution = new Vector(this.canvasElement.width, this.canvasElement.height);
    }
    Canvas.prototype.DrawCircle = function (pos, radius) {
        this.ctx.beginPath();
        this.ctx.arc(pos.x, this.canvasElement.height - pos.y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    Canvas.prototype.DrawLine = function (v1, v2, radius) {
        var dir = Vector.Sub(v2, v1).Normalized();
        var pcDir = new Vector(dir.y, -dir.x);
        var pccDir = new Vector(-dir.y, dir.x);
        var p1 = Vector.Add(v1, Vector.Mul(pcDir, radius));
        var p2 = Vector.Add(v1, Vector.Mul(pccDir, radius));
        var p3 = Vector.Add(v2, Vector.Mul(pccDir, radius));
        var p4 = Vector.Add(v2, Vector.Mul(pcDir, radius));
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, this.canvasElement.height - p1.y);
        this.ctx.lineTo(p2.x, this.canvasElement.height - p2.y);
        this.ctx.lineTo(p3.x, this.canvasElement.height - p3.y);
        this.ctx.lineTo(p4.x, this.canvasElement.height - p4.y);
        this.ctx.fill();
    };
    Canvas.prototype.DrawEar = function (ear) {
        var point1 = ear.pos;
        var point2 = Vector.Add(ear.pos, new Vector(ear.topOffset, ear.length));
        this.ctx.fillStyle = ear.color;
        this.DrawCircle(point1, ear.radius);
        this.DrawCircle(point2, ear.radius);
        this.DrawLine(point1, point2, ear.radius);
    };
    Canvas.prototype.Clear = function () {
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    return Canvas;
}());
export default Canvas;
