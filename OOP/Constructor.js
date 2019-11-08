/**Para crear un constructor en JS, es necesario hacerlo a través de una función, en la cual se le pasan los posible parametros
 * nota: Es importante, el uso de la palabra reservada this para indicar que se hace referencia la valor del objeto
 */
const Persona = function(name, age, nickName = "Uselessguy22") {
  this.name = name;
  this.age = age;
  this.nickName = nickName;
  /**Ta */
  this.toString = () => {
    return `Hola, ${this.name} tu edad es: ${this.age} y te dicen ${this.nickName}`;
  };
};
/**Para instanciar un objeto Persona, es necesario la palabra clave new y llamar al constructor con sus respectivos parametros
 * nota : Si no se le pasa un argumento queda como undefined
 */
const persona = new Persona("Cristian", 22, "Azuladito");
/**Lo impprime como un object literal */
console.log(persona.toString());

const obj = {
  name: "Cristian",
  nickName: "Uselessguy22",
  age: 22,
  toString: function() {
    return `Hola, ${this.name} tu edad es: ${this.age} y te dicen ${this.nickName}`;
  }
};

console.log(obj.toString());
