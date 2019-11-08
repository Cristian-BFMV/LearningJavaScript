function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.saludo = function() {
  return `Hola ${this.firstName} ${this.lastName}`;
};

function Customer(firstName, lastName, age, mebership) {
  /**Person.call actua como un constructor cuando un clase hija hace uso del constructor de una clase padre en Java */
  Person.call(this, firstName, lastName);
  this.age = age;
  this.mebership = mebership;
}
/**Le hereda los métodos del prototype de Person a Customer */
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;
