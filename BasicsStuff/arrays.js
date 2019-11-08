/**Se puede inicializar un arreglo de las siguientes dos formas */
let numbers = [1, 2, 3, 4, 5, 7, 5, 5, 7];
let numbers2 = new Array(120, 22, 25, 54, 66, 8, 37, 4, 3);
/**Modificando un elemento a través del index */
numbers[2] = 50;
/**Se puede agregar un elemento más al arreglo haciendolo de esta forma */
numbers[numbers.length] = 10000;
/**O mediante la función push() */
numbers.push(15203551);
/**El método unshift pone el nuevo número en la primera posición, mientras que push lo pone en la última */
numbers.unshift(120);
/**Removiendo el ultimo elemento del arreglo */
numbers.pop();
/**Removiendo el primer elemento del arreglo */
numbers.shift();
/**El método splice, elimina desde la posición pasada como primer parametro tantos elementos como el segundor parametro */
numbers.splice(1, 3);
/**Voltiando el arreglo */
numbers.reverse();
/**Concatenando los arreglos */
numbers.concat(numbers2);

numbers2.sort();
/**Organizando el arreglo de menor a mayor */
numbers2.sort((x, y) => {
  return x - y;
});
console.log("Hola", numbers2);
/**Organizando el arreglo de mayor a menor */
numbers2.sort((x, y) => {
  return y - x;
});

/**Obteniendo la posición dentro del arreglo del número 5 */
let val = numbers.indexOf(5);

console.log(val);
console.log(numbers);
console.log(numbers2);
