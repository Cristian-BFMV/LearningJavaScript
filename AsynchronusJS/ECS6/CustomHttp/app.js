const xhr = new HttpLibrary();

xhr.get("https://jsonplaceholder.typicode.com/users", users => {
  console.log(users);
});
