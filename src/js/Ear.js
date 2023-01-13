var Ear = /** @class */ (function () {
    function Ear(pos, radius, length, color) {
        if (radius === void 0) { radius = 4; }
        if (length === void 0) { length = 18; }
        if (color === void 0) { color = "black"; }
        this.radius = 4;
        this.topOffset = 0;
        this.length = 18;
        this.color = "black";
        this.pos = pos;
        this.radius = radius;
        this.length = length;
        this.color = color;
    }
    return Ear;
}());
export default Ear;
