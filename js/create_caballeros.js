
function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = document.getElementById("txtDesc").value
    let t = document.getElementById("txtImagen").value
 
    let caballero = {
        nombre: n,
        precio: p,
        descripcion: s,
        imagen: t
    }
    let url = "http://romina.pythonanywhere.com/caballeros"
    var options = {
        body: JSON.stringify(caballero),
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
        .then(document.getElementById('myform').reset())
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
    document.getElementById('myform').reset();
}

