//1.-Seleccionar los elementos del DOM

const form = document.querySelector("#formulario")
const inputUsuario = document.querySelector("#nombre")
const inputAsunto = document.querySelector("#asunto")
const inputMensaje = document.querySelector ("#mensaje")
const botonEnviar = document.querySelector("button")



// Detectar el elemento submit del formulario
form.addEventListener("submit", (e) => {
    console.log("Procesando información") 
    e.preventDefault()  // Evitar que el formulario se envíe automáticamente
    
    // Almacenamiento de constantes
    const textUsuario = inputUsuario.value 
    const textAsunto = inputAsunto.value 
    const textMensaje = inputMensaje.value 

    let usuarioIngresado = 0 
    let asuntoIngresado = 0 
    let mensajeIngresado = 0 

    const regexUsuario = /[a-zA-Z]/gim 
    if (regexUsuario.test(textUsuario) === false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido" 
    } else {
        usuarioIngresado = 1 
    }

    const regexAsunto = /[a-zA-Z]/gim 
    if (regexAsunto.test(textAsunto) === false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido" 
    } else {
        asuntoIngresado = 1 
    }

    const regexMensaje = /[a-zA-Z]/gim 
    if (regexMensaje.test(textMensaje) === false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido" 
    } else {
        mensajeIngresado = 1 
    }

    if (usuarioIngresado === 1 && asuntoIngresado === 1 && mensajeIngresado === 1) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito" 
        document.querySelector("errorNombre").innerHTML = ""
        document.querySelector("errorAsunto").innerHTML = ""
        document.querySelector("errorMensaje").innerHTML = ""
    }
}) 

