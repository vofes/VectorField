export default class Vector
{
    public x : number = 0;
    public y : number = 0;

    constructor(x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }

    public static Add(v1 : Vector, v2 : Vector) : Vector
    {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }

    public static Sub(v1 : Vector, v2 : Vector) : Vector
    {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    public static Mul(v : Vector, n : number) : Vector
    {
        return new Vector(v.x * n, v.y * n);
    }

    public static Div(v : Vector, n : number) : Vector
    {
        return new Vector(v.x / n, v.y / n);
    }

    public Length() : number
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public Normalized() : Vector
    {
        var length = this.Length();
        return Vector.Div(this, length);
    }
}