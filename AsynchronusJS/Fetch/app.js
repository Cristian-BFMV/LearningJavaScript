document.getElementById("button1").addEventListener("click", () => {
  /**Para crear una petición GET mediante el Feth API, se hace a través del método fetch, el cual recibe
   * como parametro la dirección a la cual hacer la petición. Este métdo devuelve una promesa la cual es manejada
   * por el métdo .then(), dentro de este método si estamos trabajando con un archivo de texto plano, usamos el
   * método res.text() el cual es una promesa que devolvemos y sera manejada a través de otro .then() en el cual
   * recibiremos los datos que se encuentran en archivo de texto plano
   *  */

  fetch("Sample.txt")
    .then(res => res.text())
    .then(data => (document.getElementById("txt-output").innerHTML = data))
    .catch(err => {
      console.log(err);
    });
});

document.getElementById("button2").addEventListener("click", () => {
  fetch("posts.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      let output = "";
      data.forEach(post => {
        output += `
            <ul>
                <li>Id: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>
          `;
      });
      document.getElementById("json-output").innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
});

document.getElementById("button3").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      let output = "";
      data.forEach(user => {
        output += `
              <ul>
                  <li>Id: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>Username: ${user.username}</li>
                  <li>Email: ${user.email}</li>
                  <li>Address:
                    <ul>
                        <li>Street: ${user.address.street}</li>
                        <li>Suite: ${user.address.suite}</li>
                        <li>City: ${user.address.city}</li>
                    </ul>
                  </li>
              </ul>
            `;
      });
      document.getElementById("api-output").innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
});
