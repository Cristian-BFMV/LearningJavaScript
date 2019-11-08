/**En ECS6, la sintaxis para crear clases es mucho más parecida a la forma en que se hace en Java, sin embargo,
 * el funcionamiento del motor es a través de los prototypes de ECS5
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }
  /**También existen los métodos estaticos y funcionan igual que en Java */
  static addNumbers(number1, number2) {
    return number1 + number2;
  }
}

const cristian = new Person("Cristian", "Mendoza");

console.log(cristian.greeting());

const julieta = new Person("Julieta", "Botero");
console.log(julieta.greeting());
julieta.getMarried("Mendoza");

console.log(julieta.greeting());

console.log("La suma de 5 y 6 es: ", Person.addNumbers(5, 6));

console.log(Person.jhh);
