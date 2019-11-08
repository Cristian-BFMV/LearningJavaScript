let nombre = "Cristian";
let apellido = "Mendoza";

/*En ecs6, se incorporta esta nueva funcionalidad de colocar los `` y poder usar expresiones de JS dentro del }
    string con la expresión ${JS code} */
hmtl = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Apellido: ${apellido}</li>
    </ul>
`;

console.log(hmtl);
