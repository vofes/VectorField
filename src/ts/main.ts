import Canvas from "./Canvas.js";
import Ear from "./Ear.js";
import Vector from "./Vector.js";
import perlinNoise from "./perlin-noise.js";

const canvas : Canvas = new Canvas("mainCanvas");
const distance = 30;
const ears = Array(Math.round(canvas.resolution.x / distance)).fill(0).map(x => Array(Math.round(canvas.resolution.y / distance)).fill(0));

function CreaetEars()
{
    for(var x = 0; x < ears.length; x++)
    {
        for(var y = 0; y < ears[0].length; y++)
        {
            ears[x][y] = new Ear(new Vector(x * distance, y * distance));
        }
    }
}
CreaetEars();

var increment = 0;
const speed = 40;
const fps = 20;
function UpdateEars()
{
    increment += speed * 1 / fps;
    for(var x = 0; x < ears.length; x++)
    {
        for(var y = 0; y < ears[0].length; y++)
        {
            ears[x][y].topOffset = perlinNoise(x * 0.1, y * 0.1, increment * 0.001) * 50 - 25;
            ears[x][y].length = perlinNoise(x * 0.1 + 10000, y * 0.1 + 10000, increment * 0.01) * 40 -20;
            ears[x][y].radius = perlinNoise(x * 0.1 + 5000, y * 0.1 + 5000, increment * 0.001) * 4 + 1;

            var r = perlinNoise(x * 0.1 + 2500, y * 0.1 + 2500, increment * 0.001) * 255 + 25;
            var b = perlinNoise(x * 0.1 + 7500, y * 0.1 + 7500, increment * 0.001) * 255 + 25;
            var a = perlinNoise(x * 0.1 + 10000, y * 0.1 + 10000, increment * 0.01) + 0.5;
            ears[x][y].color = "rgba(" + r + ", 0, " + b + ", " + a + ")";
        }
    }
}

function DrawEars()
{
    canvas.Clear();

    for(var x = 0; x < ears.length; x++)
    {
        for(var y = 0; y < ears[0].length; y++)
        {
            canvas.DrawEar(ears[x][y]);
        }
    }
}

setInterval(() => UpdateEars(), 1 / fps);
setInterval(() => DrawEars(), 1 / fps);