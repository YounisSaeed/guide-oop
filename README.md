# guide-oop
## Open-Closed Principle

The Open-Closed Principle (OCP) is one of the SOLID principles of object-oriented design. It states that software entities (classes, modules, functions) should be open for extension but closed for modification. In other words, you should be able to add new functionality to a software component without modifying its existing code.

### Explanation

The Open-Closed Principle is achieved through the following concepts:

1. **Abstractions and Interfaces**: Define interfaces to represent the behavior of components, allowing for various implementations.

2. **Inheritance and Polymorphism**: Implement components based on these abstractions, adhering to the defined interfaces. This allows clients to interact with components based on common interfaces, without needing to know the specific implementations.

3. **Extending Functionality**: When new functionality is required, introduce new classes or modules that extend or implement the existing interfaces without modifying the original code.

4. **Closed for Modification**: The existing code remains stable and untouched, preventing unexpected side effects and maintaining the stability of the system.

By following the Open-Closed Principle, you can easily extend and enhance the software without breaking existing functionality. This leads to more flexible, maintainable, and scalable software systems.

### Example

Consider a project that calculates the area of different shapes: circles, rectangles, and triangles. The Open-Closed Principle is applied by defining a `Shape` interface and implementing it for circles and rectangles. A new shape, `Triangle`, is added to the system without modifying the existing classes. This demonstrates extension without modification, as the `Shape` class and its implementations remain closed for modification.

```typescript
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

class Calculator22 {
    static calculateShapeArea(shape: Shape): number {
        // Call the calculateArea() method of the provided shape to get the area.
        return shape.calculateArea();
    }
}
