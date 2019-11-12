const http = new HttpLibrary();

const data = {
  name: "Cristian",
  username: "Uselessguy22",
  email: "useless@gmail.com"
};
//http.get("https://jsonplaceholder.typicode.com/users").then(data => console.log(data));

//http.post("https://jsonplaceholder.typicode.com/users", data).then(data => console.log(data));

//http.put("https://jsonplaceholder.typicode.com/users/9", data).then(response => console.log(response));

http.delete("https://jsonplaceholder.typicode.com/users/9").then(response => console.log(response));
