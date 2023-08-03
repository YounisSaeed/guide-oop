// Circle class that implements the Shape interface and calculates the area of a circle.
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        // Calculate the area of a circle using the formula: π * r^2
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// Rectangle class that implements the Shape interface and calculates the area of a rectangle.
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        // Calculate the area of a rectangle using the formula: width * height
        return this.width * this.height;
    };
    return Rectangle;
}());
// Calculator class that adheres to the Open-Closed Principle by accepting any shape that implements the Shape interface.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculateShapeArea = function (shape) {
        // Call the calculateArea() method of the provided shape to get the area.
        return shape.calculateArea();
    };
    return Calculator;
}());
// Debug: Create instances of Circle and Rectangle and calculate their areas using the Calculator class.
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
var circleArea = Calculator.calculateShapeArea(circle);
var rectangleArea = Calculator.calculateShapeArea(rectangle);
console.log("Circle area: ".concat(circleArea));
console.log("Rectangle area: ".concat(rectangleArea));
