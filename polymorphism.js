// //  Polymorphism with overloading method.

// class Calculator {
//     // Method with two parameters
//     add(a, b) {
//         return a + b;
//     }

//     // Overloaded method with three parameters
//     add(a, b, c) {
//         return a + b + c;
//     }

//     // Overloaded method with an array of numbers
//     add(...numbers) {
//         return numbers.reduce((sum, num) => sum + num, 0);
//     }
// }

// const calc = new Calculator();

// console.log(calc.add(2, 3)); // Output: 5 (using two parameters)
// console.log(calc.add(2, 3, 4)); // Output: 9 (using three parameters)
// console.log(calc.add(1, 2, 3, 4, 5)); // Output: 15 (using an array of numbers)

// //  Polymorphism with overriding method.
class person {
    constructor(name) {
        this.name = name;
    }
    // method to return the string
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person {
    constructor(name, id) {
        // super keyword for calling the above 
        // class constructor
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul', 22);
console.log(student1.toString()); //Output: Name of person: Mukul,
                                  //        Student ID: 22