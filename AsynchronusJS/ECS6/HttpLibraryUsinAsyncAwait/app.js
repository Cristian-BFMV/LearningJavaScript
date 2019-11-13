const http = new Httplibrary();

/*http
  .getUser('"https://jsonplaceholder.typicode.com/users"')
  .then(data => console.log(data));*/

const User = {
  name: "Cristian",
  username: "Uselessguy",
  email: "useless@gmail.com"
};
/*http
  .updateUser("https://jsonplaceholder.typicode.com/users/3", User)
  .then(res => console.log(res));*/

/*http
  .postUser("https://jsonplaceholder.typicode.com/users", User)
  .then(res => console.log(res));*/

http
  .deleteUser("https://jsonplaceholder.typicode.com/users/5")
  .then(res => console.log(res));
