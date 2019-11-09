/**Obteniendo el boton y creando el evento de click para el boton */
document.getElementById("getData").addEventListener("click", () => {
  /**Creando la instancia del objeto XMLHttpRequest */
  const xhr = new XMLHttpRequest();
  /**Creando la petición a la API */
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onprogress = function() {
    console.log("Procesando la petición");
  };

  /**Una vez los datos sean cargados en la aplicación se ejecuta la función */
  xhr.onload = function() {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      let output = "";

      users.forEach(user => {
        output += `
            <ul>
                <li>${user.id}</li>
                <li>${user.title}</li>
                <li>${user.userId}</li>
            </ul>
        `;
      });
      document.getElementById("user").innerHTML = output;
    }
  };
  xhr.onerror = function() {
    console.log("Hay un error");
  };
  xhr.send();
});
