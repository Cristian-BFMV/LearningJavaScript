/**En ECS6, la sintaxis para crear clases es mucho más parecida a la forma en que se hace en Java, sin embargo,
 * el funcionamiento del motor es a través de los prototypes de ECS5
 */
class Person {
  constructor(firtsName, lastName) {
    this.firtsName = firtsName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello, ${this.firtsName} ${this.lastName}`;
  }
}
/**Para heredarde una clase en JS, se usa la palabra clave extends */
class Customer extends Person {
  /**Constructor de la clase Customer */
  constructor(firtsName, lastName, age, membership) {
    /**Con el método super se hace refencia al constructor de la clase Person */
    super(firtsName, lastName);
    this.age = age;
    this.membership = membership;
  }
  /**Este método sobreescribe el método de Person, aunque obviamente se puede utilizar los métodos por defecto de la clase Person */
  greeting() {
    return `Hello, ${this.firtsName} ${this.lastName} tu edad es: ${this.age} y tu tipo de membresia es: ${this.membership}`;
  }
}

const customer = new Customer("Cristian", "Mendoza", 22, "Premium");

console.log(customer.greeting());
