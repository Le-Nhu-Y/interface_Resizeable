import {Shape} from "./Shape";

export class Circle extends Shape
{
    radius: number = 1.0;
    constructor(radius: number) {
        super();
        this.radius = radius
    }
    resize(percent): number {
        return this.radius * percent / 100
    }
}
let circle: Circle = new Circle(10);
console.log(circle.resize(10))
