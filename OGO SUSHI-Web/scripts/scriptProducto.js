
///CONECTAR PAGINAS MENU CON PRODUCTO

let parametros = window.location.search

let idRecibido = new URLSearchParams(parametros).get("id")
idRecibido = Number(idRecibido)


let productoSeleccionado

obtengoProducto()
function obtengoProducto(){
    for(let i =0; i <arrayProductos.length; i++){
        if(arrayProductos[i].id == idRecibido){
         productoSeleccionado = arrayProductos[i]
        }
    }
}


//------------------------------------------------------------------------------
///ARMADO DE PRODUCTO
   //Imagenes:

let imagenPrincipal = document.querySelector ("#imagenPrincipal")
let miniaturaUno = document.querySelector ("#imagenMinuatura1")
let miniaturaDos = document.querySelector ("#imagenMinuatura2")
let miniaturaTres = document.querySelector ("#imagenMinuatura3")
let miniaturaCuatro = document.querySelector ("#imagenMinuatura4")


imagenPrincipal.setAttribute("src",productoSeleccionado.img[0])
miniaturaUno.setAttribute("src",productoSeleccionado.img[1])
miniaturaDos.setAttribute("src",productoSeleccionado.img[2])
miniaturaTres.setAttribute("src",productoSeleccionado.img[3])
miniaturaCuatro.setAttribute("src",productoSeleccionado.img[0])

miniaturaUno.addEventListener ("click", cambiarImagen)
miniaturaDos.addEventListener ("click", cambiarImagen)
miniaturaTres.addEventListener ("click", cambiarImagen)
miniaturaCuatro.addEventListener ("click", cambiarImagen)

function cambiarImagen(){
    let atributo = this.getAttribute("src")
    imagenPrincipal.setAttribute ("src",atributo)
}

//Textos:

let nombre = document.querySelector ("#nombre")
let descripcion = document.querySelector ("#descripcion")
let precio = document.querySelector ("#precio")

nombre.textContent = productoSeleccionado.nombre
descripcion.textContent = productoSeleccionado.descripcionCorta


if (productoSeleccionado.promo){
    precio.innerHTML = `
    <p class="primerPrecio">$${productoSeleccionado.precio}</p>
    <p class="segundoPrecio">$${Math.floor(productoSeleccionado.precio*0.70)}</p>`
}
else {
    precio.innerHTML = `
    <p>$${productoSeleccionado.precio}</p>
   `

}



//Lista (contiene):
let listaContiene = document.querySelector("#contiene")

for(let i=0; i<productoSeleccionado.contiene.length; i++){
listaContiene.innerHTML += `<li>${productoSeleccionado.contiene[i]}</li>`}


//Tabla: sumar
let masClasico = document.querySelector ("#mas-clasico")
masClasico.addEventListener ("click", agregarClasico)
let menosClasico = document.querySelector ("#menos-clasico")
let masClasicoContador = 1
let precioFinal = productoSeleccionado.precio

function agregarClasico (){
    menosClasico.removeAttribute ("disabled" ,"")
    precio.innerHTML = ""
    masClasicoContador ++
    masClasico.textContent= "+" + masClasicoContador
    precioFinal += 300
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
}
 

let masNikkei = document.querySelector ("#mas-nikkei")
masNikkei.addEventListener ("click", agregarNikkei)
let menosNikkei = document.querySelector ("#menos-nikkei")
let masNikkeiContador = 1

function agregarNikkei (){
    menosNikkei.removeAttribute ("disabled" ,"")
    precio.innerHTML = ""
    masNikkeiContador ++
    masNikkei.textContent= "+" + masNikkeiContador
    precioFinal += 180
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
}


let masNiguiri = document.querySelector ("#mas-niguiri")
masNiguiri.addEventListener ("click", agregarNiguiri)
let menosNiguiri = document.querySelector ("#menos-niguiri")
let masNiguiriContador = 1

function agregarNiguiri (){
    menosNiguiri.removeAttribute ("disabled" ,"")
    precio.innerHTML = ""
    masNiguiriContador ++
    masNiguiri.textContent= "+" + masNiguiriContador
    precioFinal += 250
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
}


let masSashimi= document.querySelector ("#mas-sashimi")
masSashimi.addEventListener ("click", agregarSashimi)
let menosSashimi = document.querySelector ("#menos-sashimi")
let masSashimiContador = 1

function agregarSashimi (){
    menosSashimi.removeAttribute ("disabled" ,"")
    precio.innerHTML = ""
    masSashimiContador ++
    masSashimi.textContent= "+" + masSashimiContador
    precioFinal += 425
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
}

//Tabla: restar

menosClasico.addEventListener ("click", restarClasico)

function restarClasico (){
    masClasicoContador --
    masClasico.textContent= "+" + masClasicoContador
    precioFinal -= 300
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
 if ( masClasicoContador <= 1 ){
    menosClasico.setAttribute ("disabled" ,"")
    masClasico.textContent= "+" + 1
    precio.innerHTML = `
    <p>$${precioFinal}</p>`
 }
}

menosNikkei.addEventListener ("click", restarNikkei)

function restarNikkei (){
    masNikkeiContador --
    masNikkei.textContent= "+" + masNikkeiContador
    precioFinal -= 180
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
 if ( masNikkeiContador <= 1 ){
    menosNikkei.setAttribute ("disabled" ,"")
    masNikkei.textContent= "+" + 1
    precio.innerHTML = `
    <p>$${precioFinal}</p>`
 }
}

menosNiguiri.addEventListener ("click", restarNiguiri)

function restarNiguiri (){
    masNiguiriContador --
    masNiguiri.textContent= "+" + masNiguiriContador
    precioFinal -= 250
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
 if (masNiguiriContador <= 1 ){
    menosNiguiri.setAttribute ("disabled" ,"")
    masNiguiri.textContent= "+" + 1
    precio.innerHTML = `
    <p>$${precioFinal}</p>`
 }
}
menosSashimi.addEventListener ("click", restarSashimi)

function restarSashimi (){
    masSashimiContador --
    masSashimi.textContent= "+" + masSashimiContador
    precioFinal -= 425
    precio.innerHTML = `
    <p>$${precioFinal}</p>
 `
 if (masSashimiContador <=1 ){
    menosSashimi.setAttribute ("disabled" ,"")
    masSashimi.textContent= "+" + 1
    precio.innerHTML = `
    <p>$${precioFinal}</p>`
 }
}


//------------------------------------------------------------------------------
///PRODUCTOS SIMILARES: filtrado por categoria

let divProductosSimilares = document.querySelector (".containSimilares") 

function mostrarProductosSiminales(){
   divProductosSimilares.innerHTML = ""
      for(let i=0; i<arraySimilares.length; i++){
      divProductosSimilares.innerHTML +=`
       <a href="producto.html?id=${arraySimilares[i].id}"><img style="display: inline; width: 230px" src="${arraySimilares[i].img[0]}">  </a> 
      `
     }
   
}

function productosSimilares (){
   arraySimilares =[]
      for(let i=0; i<arrayProductos.length; i++){
      if (arrayProductos[i].categoria == productoSeleccionado.categoria && productoSeleccionado!=arrayProductos[i]){
          arraySimilares.push (arrayProductos[i])
      }
}

mostrarProductosSiminales()

}

productosSimilares ()



//SLIDER: Botones

let btnSiguiente =  document.querySelector ("#siguiente")
btnSiguiente.addEventListener ("click", moverCarruselSiguiente)

function moverCarruselSiguiente(){
   divProductosSimilares.style.right= "100%"
   btnSiguiente.style.backgroundColor = "#434242"
   btnAtras.style.backgroundColor = "#efefef"
}

let btnAtras =  document.querySelector ("#atras")
btnAtras.addEventListener ("click", moverCarruselAtras)

function moverCarruselAtras(){
   divProductosSimilares.style.right= "0%"
   btnSiguiente.style.backgroundColor = "#efefef"
   btnAtras.style.backgroundColor = "#434242"
}

if(arraySimilares.length<=4){
   btnSiguiente.style.display = "none"
   btnAtras.style.display = "none"
 divProductosSimilares.style.width = "100%"
 divProductosSimilares.style.textAlign = "center"


}


//------------------------------------------------------------------------------
///AGREGAR AL CARRITO

let contadorCarrito = document.querySelector ("#contadorCarrito")
let btnCarrito = document.querySelector("#carrito-btn")
btnCarrito.addEventListener ("click", agregarAlCarrito)
contadorCarrito.textContent=0
let contador = 0
console.log (contadorCarrito.value)

function agregarAlCarrito (){

   contador++
   console.log (contador)
    contadorCarrito.textContent= contador
   contadorCarrito.style.display ="block"
   contadorCarrito.style.trasform ="scale(1.2)"
   
}


