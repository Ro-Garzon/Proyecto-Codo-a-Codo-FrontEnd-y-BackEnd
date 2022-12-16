function validarlogins(){

    let t = document.getElementById("txtusuario").value
    let s = document.getElementById("txtcontraseña").value
    console.log(t)
    console.log(s)
    let u= "adm"
    let c= "123"

    if (t===u && s===c){
        window.open('./cargaproducto.html','_new', '');
    }else{
        alert ("Usuario o contraseña incorrecta");
    }
}
/*
http://127.0.0.1:5501/crud.html
window.location.href = "./crud.html";
*/
