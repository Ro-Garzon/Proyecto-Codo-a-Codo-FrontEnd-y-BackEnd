//Validación del formulario

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let Nombre = document.getElementById('Nombre').value;
    if(Nombre.length === 0) {
      alert('No has escrito tu nombre');
      return;
    }
    let Email = document.getElementById('Email').value;
    if (Email.length === 0) {
      alert('No has escrito tu email');
      return;
    }
    let Telefono = document.getElementById('Telefono').value;
    if (Telefono.length === 0) {
      alert('No has escrito tu telefono');
      return;
    }
    let IDdelpedido = document.getElementById('IDdelpedido').value;
    if (IDdelpedido.length === 0) {
      alert('No has escrito el ID del pedido');
      return;
    }
    let Mensaje = document.getElementById('Mensaje').value;
    if (Mensaje.length === 0) {
      alert('No has escrito el mensaje');
      return;
    }
    this.submit();
    alert("Su consulta fue enviada con éxito! Pronto lo contactaremos")
  }
  
  
  /*document.getElementById('myform').reset();*/
  
  