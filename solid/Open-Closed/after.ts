// Define the Shape interface with a method to calculate the area.
interface Shape {
    calculateArea(): number;
}

// Circle class that implements the Shape interface and calculates the area of a circle.
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        // Calculate the area of a circle using the formula: π * r^2
        return Math.PI * this.radius * this.radius;
    }
}

// Rectangle class that implements the Shape interface and calculates the area of a rectangle.
class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number , height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        // Calculate the area of a rectangle using the formula: width * height
        return this.width * this.height;
    }
}

// Calculator class that adheres to the Open-Closed Principle by accepting any shape that implements the Shape interface.
class Calculator {
    static calculateShapeArea(shape: Shape): number {
        // Call the calculateArea() method of the provided shape to get the area.
        return shape.calculateArea();
    }
}

// Debug: Create instances of Circle and Rectangle and calculate their areas using the Calculator class.

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const circleArea = Calculator.calculateShapeArea(circle);
const rectangleArea = Calculator.calculateShapeArea(rectangle);

console.log(`Circle area: ${circleArea}`);
console.log(`Rectangle area: ${rectangleArea}`);
