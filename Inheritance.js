// Inheritance
//--------------- USING CLASS COMPONENT ---------------------------------
class Animal {
    constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    }
    makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
    }
}
class Cat extends Animal {
    constructor(name) {
    super(name, "Meow");
    }
}
class Dog extends Animal {
    constructor(name) {
    super(name, "Woof");
    }
}
const fluffy = new Cat("Fluffy");
  fluffy.makeSound(); // Output: Fluffy says Meow!
const rover = new Dog("Rover");
  rover.makeSound(); // Output: Rover says Woof!