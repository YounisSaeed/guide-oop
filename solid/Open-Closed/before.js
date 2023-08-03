var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateCircleArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculateCircleArea = function (circle) {
        return circle.calculateCircleArea();
    };
    return Calculator;
}());
// DEBUG
var circle = new Circle(5);
var circleArea = Calculator.calculateCircleArea(circle);
console.log("Circle area : ".concat(circleArea));
