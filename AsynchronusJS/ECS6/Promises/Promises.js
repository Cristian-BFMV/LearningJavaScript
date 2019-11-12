class Persona {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const funcion1 = (name, lastName) => {
  /**Las promesas son un objeto de JS, el cual recibe como parametro una función, la cual a su vez recibe
   * dos parametros, resolve y reject, el parametro resolve sirve para devolver los datos cuando todo trancurre
   * correctamente, el reject es cuando algún error ocurre y se devuelve mediante este metodo
   * nota: el método resolve puede devolver cualquier cosa, se un dato primitivo, objetos, funciones
   */
  return new Promise((resolve, reject) => {
    let objeto = {
      name: name,
      lastName: lastName
    };
    resolve(objeto);
  });
};

const funcion2 = (name, lastName) => {
  return new Promise((resolve, reject) => {
    if (name === "Cristian") {
      reject("Cristian, es una hdpta");
    } else {
      resolve(() => {
        return new Persona(name, lastName);
      });
    }
  });
};
/**Para ejecutar una función la cual devuelve una promesa, se hace a través del método .then() el cual recibe
 * lo que devuelve el resolve de la promesa y para capturar los posibles errores del reject se hace a través del
 * .catch
 */
funcion1("Steve", "Mendoza")
  .then(mjs => funcion2(mjs.name, mjs.lastName))
  .then(person => console.log(person()))
  .catch(err => console.log(err));

/*async function Promises() {
    cuando se tienen que ejecutar varias funciones que devuelven una promesa, se puede hacer a través del método
    Promise.all([func1,..., funcn]) al cual se le pasa un arreglo con las funciones y este devuelve un arreglo con 
    las respuestas
  const responses = await Promise.all([funcion1("Cristian", "Mendoza"), funcion2("Steve", "Blandon")]);
  console.log(responses[1]());
}
Promises();*/
