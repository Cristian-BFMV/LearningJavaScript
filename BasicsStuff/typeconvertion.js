let val;

/*Conviertiendo un number a string */
val = 2;
String(val);
/**Con el método(constructor) String y pasandole como parametro la variable number, lo cambiaremos a un string */

/**Boolean to string, lo podemos hacer a través del mismo método */
val = true;
String(val);
/**Date to string, a través del mismo método */
val = new Date();
String(val);

/**Array to string, a través del mismo método */
val = [1, 2, 3, 4, 5];
String(val);

/**También se puede hacer con la función toString() */
val = (5).toString();

/**String to number, se puede lograr esto a través de la función Number */
val = Number("5");
val = Number(false);
val = Number(null);
/**Esto nos retorna NaN, lo que significa not a number */
val = Number("Hello");
val = Number([1, 2, 3, 3]);
/**Con el parseInt, solo nos devuelve la parte entera del número, no la parte decimal */
val = parseInt("100.2");
/**Con el parseFloat, nos retorna todo como un Number*/
val = parseFloat("100.223");

console.log(val);
console.log(typeof val);
console.log(val);
