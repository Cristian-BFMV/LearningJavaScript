const post = [
  {
    id: 1,
    title: "Hola wey"
  },
  {
    id: 2,
    title: "Que más mi fai"
  }
];
/**Un callback es una fucnión que se pasa como parametro a otra función y dentro de esta se llama a la función que es pasada
 * como parametro(callback)
 */
function pushPost(newPost, callback) {
  setTimeout(function() {
    post.push(newPost);
    callback();
  }, 2000);
}

function getPost() {
  setInterval(function() {
    let output = "";
    post.forEach(post => {
      output += `
            <ul>
                <li>Id : ${post.id}</li>
                <li>Title : ${post.title}</li>
            </ul>
        `;
    });
    document.body.innerHTML = output;
  }, 1000);
}

pushPost({ id: "3", title: "Hola wey 2" }, getPost);
pushPost({ id: "4", title: "Hola wey 3" }, getPost);
