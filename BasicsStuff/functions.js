//Declaración de una función en JS

/**Para declarar una función, es necesario la palabra reservada function, luego de esto se nombra la función
 * se le "asignan sus parametros"
 * nota: la asignación de los parametros es la función, hace referencia en el caso en que se no se le pase ningún valor
 * al momento de llamar la función, son como valores predeterminados
 */

function Hello(firstName = "Cristian", lastName = "Mendoza") {
  return "Hello, " + firstName + " " + lastName;
}

console.log(Hello("Jaime", "Mendoza"));

/** También se le puede asignar a un variable una función, el nombre es opcional y si no se coloca un nombre, se le considera
 * una función anonima
 */
let square = function(x = 5) {
  return x * x;
};

console.log("El cuadrado de 62 es: ", square(62));

/**Existe otro tipo de función en JS y consiste es que se invocan inmediatamente
 * la sintaxis es la siguiente, parantesis es los cuales se define la function, esta función es anonima
 * luego de esto, se invoca mediante parentesis.
 * nota: esta función también puede recibir parametros
 */
console.log(
  (function(name = "Cristian") {
    return "Hola, " + name + " esto es una función de invocación inmediata";
  })("Jaime Mendoza")
);

/**Se pueden declarar funciones dentro de un objeto de JS, como propiedad de este. */
const funciones = {
  primeraFuncion: function(primerParametro) {
    return "Hola, " + primerParametro + " esta función esta dentro de un objeto de JS ";
  }
};

funciones.segundaFuncion = function() {
  return "Hola wey";
};

console.log(funciones.primeraFuncion("Woooow"));
console.log(funciones.segundaFuncion());
