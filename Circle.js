"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = 1.0;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.resize = function (percent) {
        return this.radius * percent / 100;
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
var circle = new Circle(10);
console.log(circle.resize(100));
// import {Shape} from "./Shape";
// export  class Circle extends Shape
// {
//     x : number;
//     y : number;
//     radius : number
//
//     constructor(x: number, y: number, radius: number) {
//         super()
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
//
//     resize(percent ):number{
//          return (this.radius * percent)/100
//      };
//     extend(percent: number): number {
//         return this.radius * percent
//     }
// }
//
// let circle = new Circle(10,10,100)
// console.log(circle.resize(10));
// console.log(circle.extend(10));
