class Circle {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    calculateCircleArea(): number {
        return Math.PI  * this.radius * this.radius;
    }
}

class Calculator {
    static calculateCircleArea(circle: Circle): number  {
        return circle.calculateCircleArea();
    }
}


// DEBUG
const circle = new Circle(5);
const circleArea = Calculator.calculateCircleArea(circle);
console.log(`Circle area : ${circleArea}`);