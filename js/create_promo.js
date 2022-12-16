function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let d = parseFloat(document.getElementById("txtDescuento").value)
    let s = document.getElementById("txtDesc").value
    let t = document.getElementById("txtImagen").value
 
    let promo = {
        nombre: n,
        precio: p,
        descuento: d,
        descripcion: s,
        imagen: t
    }
    let url = "http://romina.pythonanywhere.com/promos"
    var options = {
        body: JSON.stringify(promo),
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

