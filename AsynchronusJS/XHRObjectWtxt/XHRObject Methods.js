/**Obteniendo el boton desde el documento HTML */
let button = document.getElementById("getData");

/**Declarando la función para obtener los datos */
const loadData = () => {
  /**Inicializando el objeto XMLHttpRequest */

  const xhr = new XMLHttpRequest();
  /**El método open configura el verbo de la petición, a que dirección va a hacer la petición y el último parametro define si la
   * petición se ejecuta de manera asincrona o no
   */
  xhr.open("GET", "data.txt", true);
  /**El método send, envia la petición que previamente fue configurada en el método open */
  xhr.send();

  /**Esta propiedad del objeto XMLHttpRequest se encarga de hacer algo que se estipule en la función, mientra que la
   * petición esta siendo procesada
   */
  xhr.onprogress = function() {
    console.log("Procesando los datos mi fai");
  };

  /**onload es una propiedad de la clase XMLHttpRequest, y lo que hace es que se encarga a través de una función
   * de la respuesta que envia el servidor
   */
  xhr.onload = function() {
    if (this.status === 200) {
      document.getElementById("output").innerHTML = `<h1>${this.responseText} hehe</h1>`;
    }
  };

  xhr.onerror = function() {
    console.log("Ha ocurrido un error perrito");
  };
};

button.addEventListener("click", loadData);
