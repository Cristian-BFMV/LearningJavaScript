/**Teniendo la palabra async en el méteodo, lo que se retorna es una promesa */
/*async function Hola() {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("How you doing nigga"), 4000);
  });

  const response = await promesa;
  return response;
}

Hola().then(res => console.log(res));*/
/**La palabra reservada async hace que siempre se devuelva el resolve de una promesa */
async function getUsers() {
  /** La palabra reservada await hace que se devuelva el dato que contiene la promesa*/
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("Data dentro de la función", data);
  return data;
}

async function nose() {
  const response = await getUsers();
  console.log("Dentro de nose", response);
}

nose();
