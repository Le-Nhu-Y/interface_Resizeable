import {Shape} from "./Shape";

export class Rectangle extends Shape
{
   width:number=1.0;
   length:number=1.0
    constructor(width:number,
                length:number)
    {
        super();
        this.length=length;
        this.width=width;
    }
    resize(percent): number
    {
        return this.length*this.width * percent / 100
    }
}
let rectangle:Rectangle=new Rectangle(5,10)
console.log(rectangle.resize(200))