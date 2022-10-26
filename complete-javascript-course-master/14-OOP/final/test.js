// class User {
//   static score = 20;

//   static sayHi() {
//     return this.score;
//   }
// }

// class Customer extends User {
//   // some code
// }
// console.log(Customer.score);
// console.log(Customer.sayHi());

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// hello world
