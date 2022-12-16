function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = document.getElementById("txtDesc").value
    let t = document.getElementById("txtImagen").value
 
    let dama = {
        nombre: n,
        precio: p,
        descripcion: s,
        imagen: t
    }
    let url = "http://romina.pythonanywhere.com/damas"
    var options = {
        body: JSON.stringify(dama),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
    document.getElementById('myform').reset();
}
