/**Para crear un constructor en JS, es necesario hacerlo a través de una función, en la cual se le pasan los posible parametros
 * nota: Es importante, el uso de la palabra reservada this para indicar que se hace referencia la valor del objeto
 */
const Persona = function(name, age, nickName = "Uselessguy22") {
  this.name = name;
  this.age = age;
  this.nickName = nickName;
};

/**El objeto prototype sirve para declara funciones fuera del constructor y que está sigan "perteneciendo" a la clase indicada */
Persona.prototype.toString = function() {
  return `Hola, ${this.name} tu edad es: ${this.age} y su sobrenombre es: ${this.nickName}`;
};

const persona1 = new Persona("Cristian", 22, "Azuladito");

console.log(persona1.toString());

/**En resumen, el prototype asociado al objeto, permite que se encapusle métodos fuera del objeto de JavaScript */
