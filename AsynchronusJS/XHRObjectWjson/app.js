let state1 = true;
let state2 = true;

/**Obteniendo el boton desde el DOM, y creando el evento de click */
document.getElementById("getCustomer").addEventListener("click", () => {
  if (state1) {
    /**Creando una instancia del Objeto  XMLHttpRequest*/
    const xhr = new XMLHttpRequest();
    /**Configurando el tipo de petición, la URI donde se hara */
    xhr.open("GET", "customer.json", true);
    /**Envia la petición */
    xhr.send();
    /**Configurando la propieda onload con una función la cual se ejecutara una vez se carguen los datos */
    xhr.onload = function() {
      /**Verificando si el status es correcto */
      if (this.status === 200) {
        /**Parsenado el texto de la respuesta en un JSON */
        const customer = JSON.parse(this.responseText);
        /**Creando el output que se vera en el DOM */
        const output = `
        <ul>
            <li>Id: ${customer.id}</li>
            <li>Name: ${customer.Name}</li>
            <li>Phone: ${customer.Phone}</li>            
        </ul>
      `;
        /**Pintando el output en el div customer del DOM */
        document.getElementById("customer").innerHTML = output;
        state1 = !state1;
      }
    };
  } else {
    document.getElementById("customer").innerHTML = "Customer data";
    state1 = !state1;
  }
});

/**Obteniendo el boton desde el DOM, y creando el evento de click */
document.getElementById("getCustomers").addEventListener("click", () => {
  if (state2) {
    /**Creando una instancia del Objeto  XMLHttpRequest*/
    const xhr = new XMLHttpRequest();
    /**Configurando el tipo de petición, la URI donde se hara */
    xhr.open("GET", "customers.json", true);
    /**Envia la petición */
    xhr.send();
    /**Configurando la propieda onload con una función la cual se ejecutara una vez se carguen los datos */
    xhr.onload = function() {
      /**Verificando si el status es correcto */
      if (this.status === 200) {
        /**Parsenado el texto de la respuesta en un array de JSONs */
        const customers = JSON.parse(this.responseText);
        let output = "";
        /**Iterando por cada objeto del array de JSONs*/
        customers.forEach(customer => {
          /**Creando el output que se vera en el DOM */
          output += `
            <ul>
                <li>Id: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Phone: ${customer.Phone}</li>            
            </ul>`;
        });
        /**Pintando el output en el div customer del DOM */
        document.getElementById("customers").innerHTML = output;
        state2 = false;
      }
    };
  } else {
    document.getElementById("customers").innerHTML = "Customers' data";
    state2 = true;
  }
});
