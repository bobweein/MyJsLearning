'use strict';

/*
///////////////////////////////////////
// Constructor Functions and the new Operator
const Car = function (speed, make) {
  // Instance properties
  this.speed = speed;
  this.make = make;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.make);
  // };
};

const jonas = new Car('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Car('Matilda', 2017);
const jack = new Car('Jack', 1975);

console.log(jonas instanceof Car);

Car.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Car.hey();

///////////////////////////////////////
// Prototypes
console.log(Car.prototype);

Car.prototype.calcAge = function () {
  console.log(2037 - this.make);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Car.prototype);

console.log(Car.prototype.isPrototypeOf(jonas));
console.log(Car.prototype.isPrototypeOf(matilda));
console.log(Car.prototype.isPrototypeOf(Car));

// .prototyeOfLinkedObjects

Car.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('speed'));
console.log(jonas.hasOwnProperty('species'));


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Car.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a speed and a make property. The make property is the current make of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's make by 10, and log the new make to the console;
3. Implement a 'brake' method that will decrease the car's make by 5, and log the new make to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.make += 10;
  console.log(`${this.speed} is going at ${this.make} km/h`);
};

Car.prototype.brake = function () {
  this.make -= 5;
  console.log(`${this.speed} is going at ${this.make} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, make) {
    this.fullName = fullName;
    this.make = make;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.make);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.make;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.speed}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.make);
  },

  init(speed, make) {
    this.speed = speed;
    this.make = make;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.make = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current make in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current make in mi/h 
  (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
// class Car {
//   constructor(speed, make) {
//     this.speed = speed;
//     this.make = make;
//   }
//   accelerate() {
//     this.make += 10;
//     console.log(`${this.speed} is going at ${this.make} km/h`);
//   }

//   brake() {
//     this.make -= 5;
//     console.log(`${this.speed} is going at ${this.make} km/h`);
//   }

//   get speedUS() {
//     return this.make / 1.6;
//   }
//   set speedUS(make) {
//     this.make = make * 1.6;
//   }
// }

// const ford = new Car('ford', 120);
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford.make);

/*
class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.make += 10;
    console.log(`${this.speed} is going at ${this.make} km/h`);
  }

  brake() {
    this.make -= 5;
    console.log(`${this.speed} is going at ${this.make} km/h`);
  }

  get speedUS() {
    return this.make / 1.6;
  }

  set speedUS(make) {
    this.make = make * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.calcAge = function () {
  console.log(2037 - this.make);
};

const Student = function (speed, make, course) {
  Car.call(this, speed, make);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Car.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.speed} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Car);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
// const Car = function (speed, make) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.calcAge = function () {
//   console.log(2037 - this.make);
// };

// const Student = function (speed, make, course) {
//   Car.call(this, speed, make);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Car.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.speed} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Car);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = function (speed, make) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.calcAge = function () {
//   console.log(2037 - this.make);
// };

// const Student = function (speed, make, course) {
//   Car.call(this, speed, make);
//   // Car.bind(this, speed, make)();

//   this.course = course;
// };
// // Linking prototypes
// Student.prototype = Object.create(Car.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.speed} ,and I study ${this.course}!`);
// };
// const mike = new Student('mike', 2022, 'computer science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an ElecCar (called EV) 
  as a CHILD "class" of Car. 
  Besides a speed and current make, the EV also has the current 
  battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' 
  and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed
   by 20, and decrease the charge by 1%. 
   Then log a message like this: 'Tesla going at 140 km/h, 
   with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate',
 'brake' and 'chargeBattery' (charge to 90%). 
 Notice what happens when you 'accelerate'! 
 HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/
// const Car = function (make, speed) {
//   this.speed = speed;
//   this.make = make;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   // Car(make, speed);  wrong
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} km/h ,with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// console.log(tesla.charge);

// console.log('-----------------------------\n-----------------------------');
// // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first !
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const zanhua = new StudentCl('zanhua chen', 2001, 'math');
// console.log(zanhua);
// zanhua.introduce();
// zanhua.calcAge();

/*
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.make += 10;
  console.log(`${this.speed} is going at ${this.make} km/h`);
};

Car.prototype.brake = function () {
  this.make -= 5;
  console.log(`${this.speed} is going at ${this.make} km/h`);
};

const EV = function (speed, make, charge) {
  Car.call(this, speed, make);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.make += 20;
  this.charge--;
  console.log(
    `${this.speed} is going at ${this.make} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes:
   create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
   and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(make) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  // private fields
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h with the charge of ${
        this.#charge
      }`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const Rivian = new EVCl('Rivian', 120, 23);

Rivian.accelerate().chargeBattery(50).brake().accelerate();

/*
class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.make += 10;
    console.log(`${this.speed} is going at ${this.make} km/h`);
  }

  brake() {
    this.make -= 5;
    console.log(`${this.speed} is going at ${this.make} km/h`);
    return this;
  }

  get speedUS() {
    return this.make / 1.6;
  }

  set speedUS(make) {
    this.make = make * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(speed, make, charge) {
    super(speed, make);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.make += 20;
    this.#charge--;
    console.log(
      `${this.speed} is going at ${this.make} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
