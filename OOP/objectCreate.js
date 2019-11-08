/**Creamos un objeto que contendra todos los métodos que contendra el objeto que queramos crear y estos son
 * "almacenados" como prototypes
 */

const personPrototype = {
  greeting: function() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
};
/**Se crea el objeto a través de la función Object.create() la cual recibe el objeto que contiene los prototypes*/
const cristian = Object.create(personPrototype);
/**Asignando las propiedades a el objeto cristian */
cristian.firstName = "Cristian";
cristian.lastName = "Mendoza";

console.log(cristian.greeting());

/**También se puede asignar las propiedades del "objeto" en la función Object.create(), como segundo parametro*/
const camilo = Object.create(personPrototype, {
  firstName: { value: "Camilo" },
  lastName: { value: "Mejia" }
});

console.log(camilo.greeting());
