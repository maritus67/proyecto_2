var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
})

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
})

/*funcional de crear cuenta*/
const botonRegistro = document.getElementById("boton")
const inputNombre = document.getElementById("nombreInput")
const inputApellido = document.getElementById("apellidoInput")
const inputEmail = document.getElementById("emailInput")
const inputTelefono = document.getElementById("telefonoInput")
const inputContraseña = document.getElementById("contraseñaInput")

let usuarioRegistrado = []
if (localStorage.getItem("user")) {
  usuarioRegistrado = JSON.parse(localStorage.getItem("user"))
}

class user {
    constructor( nombre, apellido, email, telefono, contraseña){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.telefono = telefono
        this.contraseña = contraseña
    }
}

botonRegistro.addEventListener("click", (e) => {
    alert("esto cargando un nuevo usuario")
    const nombre = nombreInput.value
    const apellido = apellidoInput.value
    const email = emailInput.value
    const telefono = telefonoInput.value
    const contraseña = contraseñaInput.value
    const nuevoUsuario = new user( nombre, apellido, email, telefono, contraseña)
    usuarioRegistrado.push(nuevoUsuario)
    localStorage.setItem('user', JSON.stringify(usuarioRegistrado))
    alert("Usuario registrado correctamente")
    overlay.classList.remove('active');
    popup.classList.remove('active');
  })

  /* log in */
  function loguear(){
    let user=document.getElementById("emailUsuario").value;
    let pass=document.getElementById("contraseña").value;

    if(user=="administrador@gmail.com" && pass=="1234")
    {
 
        window.location="administracion.html"
    }
    else{
        alert("datos incorrectos")
    }


  }
