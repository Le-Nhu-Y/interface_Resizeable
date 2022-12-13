import {Shape} from "./Shape";

export class Square extends Shape
{
    side:number=1.0;
    constructor(side:number) {
        super();
        this.side=side;
    }
    getArea():number{
        return this.side*this.side
    }
    resize(percent): number {
        return this.getArea() * percent / 100
    }
}
let square:Square=new Square(10);
console.log("Diện tích trước khi tăng kích thước là: "+(square.getArea()))
console.log("Diện tích sau khi tăng kích thước là: "+(square.resize(200)))