var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Vector.Add = function (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    };
    Vector.Sub = function (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    };
    Vector.Mul = function (v, n) {
        return new Vector(v.x * n, v.y * n);
    };
    Vector.Div = function (v, n) {
        return new Vector(v.x / n, v.y / n);
    };
    Vector.prototype.Length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.Normalized = function () {
        var length = this.Length();
        return Vector.Div(this, length);
    };
    return Vector;
}());
export default Vector;
