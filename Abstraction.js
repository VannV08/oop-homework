// Abstract class representing a geometric shape
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape");
        }
        this.shapeName = "shapeName";
    }

    display() {
        return `Shape is: ${this.shapeName}`;
    }
}

// Concrete class representing a Circle
class Circle extends Shape {
    constructor(shapeName, radius) {
        super();
        this.shapeName = shapeName;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Create an instance of the Circle class
const circle = new Circle("Circle", 5);
console.log(circle.display()); // Output: Shape is: Circle
console.log(`Area of the circle: ${circle.area().toFixed(2)}`); // Output: Area of the circle: 78.54
