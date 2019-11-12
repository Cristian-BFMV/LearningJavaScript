/**Para crear una función flecha, se hace a través de colocar los parentesis y simular una flecha =>
 * Nota: en caso de que la función solo tenga una linea de código no es necesario colocar las llaves {}
 */

const sayHello = () => console.log("Hello wey :V");

/**Cuando se quiere retornar algo y es solo una linea de código, no se colocan las llaves y tampoco la palabra return */
const sayHello2 = () => "Hello";

/**Cuando se tiene que devolver un objeto, se tiene que colocar dentro de parentesis, porque en el caso de no
 * llevarlos, JS identifica como si las llaves del objeto fueran las llaves de la función
 */
const sayHello3 = () => ({ msg: "Hello" });

/**Cuando se requiere pasar UN solo parametro no es necesario colocar los parentesis, pero si se tiene más de un parametro
 * si es necesario los parentesis
 */
const sayHello4 = name => console.log(`Hello ${name}`);
