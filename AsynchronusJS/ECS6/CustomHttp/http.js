function HttpLibrary() {
  this.http = new XMLHttpRequest();
}
/**Lo callbacks son funciones que se ejecutan en otra función y que se envian como parametro a la función */
HttpLibrary.prototype.get = function(URL, callback) {
  this.http.open("GET", URL, true);
  this.http.send();

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(self.http.responseText);
    }
  };
};

/*xhr = new HttpLibrary();
xhr.get("https://jsonplaceholder.typicode.com/users");*/
