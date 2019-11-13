class Httplibrary {
  /**Método GET que obtiene todos los usuarios de la API JSONPlaceholder */
  getUser = async () => {
    /**La palabra clave async hace que SIEMPRE se devuelva una promesa, incluso si el dato devuelto no es una promesa
     * nota: devuelve el resolve de la promesa
     */
    /**La palabra clase await devuelve el dato del resolve de la promesa que se devuelve en el método fetch */
    /**En el método fetc tiene como parametro el endpoint a la cual hace la petición */
    const response = await fetch(URL);
    /**En esta linea de código, se obtiene el dato devuelto en el resolve de la promesa devuelta por el método response.json();*/
    const data = await response.json();
    return data;
  };
  /**Método UPDATE */
  updateUser = async (URL, userUpdate) => {
    /**Para hacer una petición diferente al método GET, se tiene que configurar un objeto
     * en el cual se le indica el método, el "Content-type" : "application/json" y el body : JSON.stringify(userUpdate)
     */
    const request = {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userUpdate)
    };
    /**La palabra clave async hace que SIEMPRE se devuelva una promesa, incluso si el dato devuelto no es una promesa
     * nota: devuelve el resolve de la promesa
     */
    /**La palabra clase await devuelve el dato del resolve de la promesa que se devuelve en el método fetch */
    /**En el método fetc tiene como parametro el endpoint a la cual hace la petición */
    const response = await fetch(URL, request);
    /**En esta linea de código, se obtiene el dato devuelto en el resolve de la promesa devuelta por el método response.json();*/
    const data = await response.json();
    return data;
  };

  postUser = async (URL, newUser) => {
    /**Para hacer una petición diferente al método GET, se tiene que configurar un objeto
     * en el cual se le indica el método, el "Content-type" : "application/json" y el body : JSON.stringify(userUpdate)
     */
    const request = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    };
    /**La palabra clave async hace que SIEMPRE se devuelva una promesa, incluso si el dato devuelto no es una promesa
     * nota: devuelve el resolve de la promesa
     */
    /**La palabra clase await devuelve el dato del resolve de la promesa que se devuelve en el método fetch */
    /**En el método fetc tiene como parametro el endpoint a la cual hace la petición */
    const response = await fetch(URL, request);
    /**En esta linea de código, se obtiene el dato devuelto en el resolve de la promesa devuelta por el método response.json();*/
    const data = await response.json();
    return data;
  };

  deleteUser = async URL => {
    /**Para hacer la petición DELETE al servidor, solo es necesario indicarle el método */
    const request = {
      method: "DELETE"
    };
    /**La palabra clave async hace que SIEMPRE se devuelva una promesa, incluso si el dato devuelto no es una promesa
     * nota: devuelve el resolve de la promesa
     */
    /**La palabra clase await devuelve el dato del resolve de la promesa que se devuelve en el método fetch */
    /**En el método fetc tiene como parametro el endpoint a la cual hace la petición */
    await fetch(URL, request);
    /**En el caso de DELETE, como la API JSONPlaceholder envia un objeto vacio, enviamos un string que indique que se
     * ha eliminado el usuario
     */
    return "Se ha eliminado el usuario";
  };
}
