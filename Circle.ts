import {Shape} from "./Shape";

export class Circle extends Shape
{
    radius: number = 1.0;
    constructor(radius: number) {
        super();
        this.radius = radius
    }
    getArea():number{
        return Math.PI*this.radius*this.radius
    }
    resize(percent): number {
        return this.getArea() * percent / 100
    }
}
let circle: Circle = new Circle(10);
console.log("Diện tích trước khi tăng kích thước là: "+(circle.getArea()))
console.log("Diện tích sau khi tăng kích thước là: "+ circle.resize(10))
