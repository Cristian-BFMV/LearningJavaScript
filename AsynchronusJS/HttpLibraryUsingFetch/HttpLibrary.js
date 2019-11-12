/**Creación de la "libreria"*/

class HttpLibrary {
  /**Método GET que obtiene los datos de la API */
  get = URL => {
    /**Se retorna una promesa al archivo que use el método de la clase */
    return new Promise((resolve, reject) => {
      /**El método fect recibe como parametro al URL a la cual se le hara la solicitud y este método devuelve
       * una promesa.
       */
      /**Se envia los datos a través del resolve de la promesa y en caso de que haya un error se devuel el error con el reject */
      fetch(URL)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  };
  /**Método POST que "agrega" un usuario a JSONPlaceholder */
  post = (URL, data) => {
    /**Para hacer un petición de tipo POST con la API fetch, se necesita la URL y un objeto en el que se define
     * el tipo de método, los headers(objeto) que contiene el "Content-type" : "application/json" y finalmente el
     * body que seran los datos
     */
    const request = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      /**Para enviar los datos es necesario enviarlos como un string, es por esto que se usa el método
       * stringify de la clase JSON
       */
      body: JSON.stringify(data)
    };
    /**Se llama a fetch pasandole como parametros la URL a la cual hacer la petición, y los datos.
     * fetch siempre retorna una promesa que debe ser manejada a través del método .then
     */
    return new Promise((resolve, reject) => {
      fetch(URL, request)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  };

  put = (URL, data) => {
    /**Para hacer un petición de tipo PUT con la API fetch, se necesita la URL y un objeto en el que se define
     * el tipo de método, los headers(objeto) que contiene el "Content-type" : "application/json" y finalmente el
     * body que seran los datos a actualizar
     */
    const request = {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      /**Para enviar los datos es necesario enviarlos como un string, es por esto que se usa el método
       * stringify de la clase JSON
       */
      body: JSON.stringify(data)
    };
    return new Promise((resolve, reject) => {
      fetch(URL, request)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  };

  delete = URL => {
    /**Para hacer la petición DELETE, es necesario tener el objeto request en el cual se le indica el
     * método, los headers "Content-type": "application/json" y no se envia el body porque no se le envia
     * nada al servidor
     */
    const request = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    };
    return new Promise((resolve, reject) => {
      fetch(URL, request)
        .then(res => res.json())
        /**Como la petición DELETE delvuelve un objeto vacio, no es necesario enviar data, simplemente un
         * String indicando que se ha eliminado
         */
        .then(() => resolve("User deleted..."))
        .catch(err => reject(err));
    });
  };
}
