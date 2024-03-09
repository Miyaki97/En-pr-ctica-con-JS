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



//paleta botón

const boton1 = document.getElementById("btn-1")
const boton2 = document.getElementById("btn-2")
const boton3 = document.getElementById("btn-3")
const boton4 = document.getElementById("btn-4")
const boton5 = document.getElementById("btn-5")
const boton6 = document.getElementById("btn-6")
const caja = document.getElementById("caja")

// Agregar el event listener
boton1.addEventListener("click", () => {
   caja.style.backgroundColor = "#e53e3e"
})
boton2.addEventListener("click", () => {
   caja.style.backgroundColor = "#dd6b20"
})
boton3.addEventListener("click", () => {
   caja.style.backgroundColor = "#faf089"
})
boton4.addEventListener("click", () => {
   caja.style.backgroundColor = "#48bb78"
})
boton5.addEventListener("click", () => {
   caja.style.backgroundColor = "#81e6d9"
})
boton6.addEventListener("click", () => {
   caja.style.backgroundColor = "#d53f8c"
})


//Ejercicio tres

const sumar = document.getElementById("btn-sumar")
        const restar = document.getElementById("btn-restar")
        const input1 = document.getElementById("valor1")
        const input2 = document.getElementById("valor2")
        let resultadosuma = 0
        let resultadoresta = 0
        const resultado = document.getElementById("resultado")
        sumar.addEventListener("click",()=>{
            resultadosuma = Number(input1.value) + Number(input2.value)
            resultado.textContent = resultadosuma
        })
        restar.addEventListener("click",()=>{
            if(Number(input1.value) > Number(input2.value)) {
                resultadoresta = Number(input1.value) - Number(input2.value)
            } else {
                resultadoresta = 0
            }
            resultado.textContent = resultadoresta
        })