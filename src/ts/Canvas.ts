import Ear from "./Ear.js";
import Vector from "./Vector.js";

export default class Canvas
{
    private canvasElement : HTMLCanvasElement = null;
    private ctx : CanvasRenderingContext2D = null;
    public resolution : Vector = new Vector(0, 0);

    constructor(elementID : string)
    {
        this.canvasElement = document.getElementById(elementID) as HTMLCanvasElement;
        if(this.canvasElement == null || this.canvasElement == undefined)
        {
            console.error("Canvas Element with id: " + elementID + " not found");
            return;
        }
        this.ctx = this.canvasElement.getContext("2d");
        this.ctx.imageSmoothingEnabled = false;
        this.resolution = new Vector(this.canvasElement.width, this.canvasElement.height);
    }

    private DrawCircle(pos : Vector, radius : number)
    {
        this.ctx.beginPath();
        this.ctx.arc(pos.x, this.canvasElement.height - pos.y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    private DrawLine(v1 : Vector, v2 : Vector, radius : number)
    {
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
    }

    public DrawEar(ear : Ear) : void
    {
        var point1 = ear.pos;
        var point2 = Vector.Add(ear.pos, new Vector(ear.topOffset, ear.length));

        this.ctx.fillStyle = ear.color;
        this.DrawCircle(point1, ear.radius);
        this.DrawCircle(point2, ear.radius);
        this.DrawLine(point1, point2, ear.radius);
    }

    public Clear() : void
    {
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
}