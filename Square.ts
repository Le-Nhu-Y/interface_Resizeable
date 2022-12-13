import {Shape} from "./Shape";

export class Square extends Shape
{
    side:number=1.0;
    constructor(side:number) {
        super();
        this.side=side;
    }
    resize(percent): number {
        return this.side * percent / 100
    }
}
let square:Square=new Square(10);
console.log(square.resize(200))