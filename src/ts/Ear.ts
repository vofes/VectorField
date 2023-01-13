import Vector from "./Vector.js";

export default class Ear
{
    public pos : Vector;
    public radius : number = 4;
    
    public topOffset : number = 0;
    public length : number = 18;
    public color : string = "black";

    constructor(pos : Vector, radius : number = 4, length : number = 18, color : string = "black")
    {
        this.pos = pos;
        this.radius = radius;
        this.length = length;
        this.color = color;
    }
}