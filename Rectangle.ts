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
    getArea():number{
        return this.length*this.width
    }
    resize(percent): number
    {
        return this.getArea() * percent / 100
    }
}
let rectangle:Rectangle=new Rectangle(5,10)

console.log("Diện tích trước khi tăng kích thước là: "+(rectangle.getArea()))
console.log("Diện tích sau khi tăng kích thước là: "+ rectangle.resize(10))
