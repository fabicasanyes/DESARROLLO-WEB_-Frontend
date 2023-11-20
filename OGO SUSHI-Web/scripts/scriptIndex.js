///SLIDER

let headerBackImg = document.querySelector (".headerBackImg")

setInterval(mostrarImagen,8000)

function randomizar(min,max){
    let resultado = Math.floor(Math.random() * (max - min + 1) + min)
    return resultado
}
function mostrarImagen (){
  
    let posicion = randomizar(0,5)
  
    headerBackImg.style.backgroundImage = "url(img/slider/"+ arraySlider[posicion]+")"
    console.log (posicion)


}

//------------------------------------------------------------------------------
///VALIDACION FORMULARIO


// Nombre:
let nombre = document.querySelector ("#id-name")
nombre.addEventListener("blur",validarNombre)

const msgValidacionNombre = document.querySelector("#validacionNombre")

function validarNombre (){
    let nombreIngresado = nombre.value
    msgValidacionNombre.textContent=""
    if(nombreIngresado.length == 0){
        msgValidacionNombre.textContent = "Debe ingresar su nombre"
        msgValidacionNombre.style.color = "red"
        nombre.style.borderColor = "red"
    }
    else{
       msgValidacionNombre.textContent = "¡Correcto!"
        msgValidacionNombre.style.color = "green"
        nombre.style.borderColor = "green"
    }

}

// Mail:
const email = document.querySelector ("#id-email")
email.addEventListener("blur",validarMail)
const msgValidacionMail = document.querySelector("#validacionMail")

function validarMail(){
    let mailIngresado = email.value
    msgValidacionNombre.textContent=""
    
    let indexArroba = mailIngresado.indexOf("@")
    let indexPunto = mailIngresado.lastIndexOf(".")

    msgValidacionMail.textContent = ""

    if(mailIngresado.length == 0){
        msgValidacionMail.textContent = "Debe ingresar un email"
        msgValidacionMail.style.color = "red"
        email.style.borderColor = "red"}

    else if(indexArroba == -1){
       msgValidacionMail.textContent = "Mail Incorrecto: Falta un @."
       msgValidacionMail.style.color = "red"
        email.style.borderColor = "red"}
        
        
    else if(mailIngresado.charAt(indexArroba + 1) == ""|| indexPunto == -1 ||mailIngresado.charAt(indexPunto + 1) == "") {
        msgValidacionMail.textContent = "Mail Incompleto"
        msgValidacionMail.style.color = "red"
        email.style.borderColor = "red"}
        
   
    else{
 
        msgValidacionMail.textContent = "¡Correcto!"
        msgValidacionMail.style.color = "green"
        email.style.borderColor = "green"
    }
}

// Barrio:
const barrio = document.querySelector ("#barrio")
barrio.addEventListener("blur",validarBarrio)
barrio.addEventListener("change",validarBarrio)
const msgValidacionBarrio = document.querySelector("#validacionBarrio")

function validarBarrio (){
   
    console.log (barrio.value)
    if (barrio.value == "" ){
        msgValidacionBarrio.textContent = "Seleccione un barrio"
        msgValidacionBarrio.style.color = "red"
        barrio.style.borderColor = "red"
       
    }
    else{
        msgValidacionBarrio.textContent = "¡Correcto!"
        msgValidacionBarrio.style.color = "green"
        barrio.style.borderColor = "green"
    
    }
}


// Preferencias: radiobuttons
let radioButtonVeggie = document.querySelector ("#id-veggie")
let radioButtonSalmon = document.querySelector ("#id-salmon")
radioButtonVeggie.addEventListener( "click", radioVeggieChequeado)
radioButtonSalmon.addEventListener( "click", radioSalmonChequeado)

function radioVeggieChequeado (){
    radioButtonVeggie.checked = true
    msgValidacionPreferencias.textContent = "¡Gracias!"
    msgValidacionPreferencias.style.color = "green"
}
function radioSalmonChequeado (){
    radioButtonSalmon.checked = true
    msgValidacionPreferencias.textContent = "¡Gracias!"
    msgValidacionPreferencias.style.color = "green"
}



// Terminos y condiciones: Checkbox---ENVIAR FORM
let terminosYcondiciones = document.querySelector ("#id-terminosycondiciones")
let msgValidacionCondiciones = document.querySelector ("#validacionCondiciones")

let btnEnviar = document.querySelector ("#enviar")
btnEnviar.addEventListener ("click", enviarForm)

let msgValidacionPreferencias = document.querySelector("#validacionPreferencias")


function enviarForm(){
    
   if (radioButtonVeggie.checked == fals && radioButtonSalmon.checked ==false){
        msgValidacionPreferencias.textContent = "Cuentanos tu preferencia"
        msgValidacionPreferencias.style.color = "red"
}
  if (terminosYcondiciones.checked == false){
    msgValidacionCondiciones.textContent = "Confirme Terminos y Condiciones"
    msgValidacionCondiciones.style.color = "red"
 
  }
  else {
    formulario.style.display= "flex"
  }

}



// Preferencias: Text area
let mensaje = document.querySelector ("#id-mensaje")
mensaje.addEventListener ("keyup", validacionMensaje)
let msgValidacionMensaje = document.querySelector("#validacionMensaje")
let contadorLetras = 0

function validacionMensaje (){
    let mensajeIngresado = mensaje.value
    let contadorLetras= mensajeIngresado.length

    if (mensajeIngresado.length > 32){
        msgValidacionMensaje.textContent = "Maximo 32 caracteres"
        msgValidacionMensaje.style.color = "red"
        btnEnviar.setAttribute("disabled","")
        mensaje.style.borderColor = "red"

    }
    else {
        let caracteresRestantes= 32 - contadorLetras 
    msgValidacionMensaje.textContent = "Caracteres restantes: " + caracteresRestantes
    msgValidacionMensaje.style.color = "green" 
    mensaje.style.borderColor = "green"
    btnEnviar.removeAttribute ("disabled")
   
}
  
}


// Display Form
let formulario = document.querySelector (".fondoSeccionForm")

setTimeout(mostrarForm,5000)
function mostrarForm (){
formulario.style.display= "block"
}


// Cerrar Form
let btncerrarForm = document.querySelector (".cerrarForm")
btncerrarForm.addEventListener("click", cerrarFromulario)

function cerrarFromulario (){
    formulario.style.display= "none"
}






//------------------------------------------------------------------------------
/// MOSTRAR PRODUCTOS NUEVOS

let divPorductosNuevos = document.querySelector ("#div-productos-nuevos")

function mostrarProductosNuevos(){
    divPorductosNuevos.innerHTML = ""

    for(let i=0; i<arrayProductosNuevos.length; i++){
        divPorductosNuevos.innerHTML += `
        <article>
          
        <figure><img src="${arrayProductosNuevos[i].img[0]}" alt="${arrayProductosNuevos[i].nombre}"></figure>
         
        <div>
        <span>Nuevo</span>
        <h3>${arrayProductosNuevos[i].nombre}</h3>
        <p>${arrayProductosNuevos[i].descripcionCorta}</p>
        <br>
       <p><b>$${arrayProductosNuevos[i].precio}</b></p>
           
       <a href="producto.html?id=${arrayProductosNuevos[i].id}" class="botonSecundario">Ver más</a>
        </div>
        </article>
      `
}
}

function productosNuevos (){
    arrayProductosNuevos= []
    for(let i=0; i<arrayProductos.length; i++){
        if (arrayProductos[i].nuevo){
            arrayProductosNuevos.push (arrayProductos[i])
}
}
mostrarProductosNuevos()
}

productosNuevos ()



