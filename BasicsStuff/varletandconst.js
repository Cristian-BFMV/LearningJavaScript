/**Con la palabra reservada var, se inidica que esta cosa puede ser variable, es decir, puede cambiar el valor */
var nombre = "Cristian";
nombre = "Camilo";

/**Con la palabra reservada let, se inidica que esta cosa puede ser variable, es decir, puede cambiar el valor */
let nombre = "Cristian";
nombre = "Camilo";

/*Con la palabra reservada const, siginifica que no puede cambiar el valor de la cosa
Nota: cuando estamos declarando una constante, esta debe ser inicailizada de inmediato
*/
const pi = 3.141516;

/*A pesar de que la cosa no puede cambiar, si lo que contiene la cosa es mutable, esta si puede cambiar */
const persona = {
  nombre: "Cristian",
  edad: 22
};

persona.nombre = "Camilo";
