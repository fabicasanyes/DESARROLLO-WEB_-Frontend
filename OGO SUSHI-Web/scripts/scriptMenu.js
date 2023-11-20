/// CUENTA REGRESIVA

let futuro = new Date(2022,(12-1),21)
console.log ( futuro)

let divCuentaRegresiva = document.querySelector ("#cuenta-regresiva")

function crearContador(){
let hoy = new Date()
console.log(hoy)

let diferencia = futuro - hoy

let segundosRestantes = Math.floor(diferencia / 1000)
let minutosRestantes = Math.floor (segundosRestantes / 60)
let horasRestantes = Math.floor (minutosRestantes / 60)
let diasRestantes = Math.floor (horasRestantes / 24)


let dias = diasRestantes
let hora = horasRestantes -(24*diasRestantes)
let minutos =  minutosRestantes - (60*horasRestantes) 
let segundos = (segundosRestantes - (60*minutosRestantes)) 
  
    let diasContador = dias
    let segundosContador = segundos
    let minutosContador = minutos
    let horaContador = hora
   
    if(diasContador < 10){
        diasContador = "0" + diasContador
    }
    if(segundosContador < 10){
        segundosContador = "0" + segundosContador
    }
    if(minutosContador < 10){
        minutosContador = "0" + minutosContador
    }
    if(horaContador < 10){
        horaContador = "0" + horaContador
    }

    if (diasContador == 1){
     divCuentaRegresiva.innerHTML = `
    <div id="dias">${dias}<p>Día</p></div>
    <div id="horas">${horaContador}<p>Horas</p></div>
    <div id="minutos">${minutosContador}<p>Minutos</p></div>
    <div id="segundos">${segundosContador}<p>Segundos</p></div>`

    }
    else{
        divCuentaRegresiva.innerHTML = `
        <div id="dias">${dias}<p>Días</p></div>
        <div id="horas">${horaContador}<p>Horas</p></div>
        <div id="minutos">${minutosContador}<p>Minutos</p></div>
        <div id="segundos">${segundosContador}<p>Segundos</p></div>` 
    }
    }

crearContador()
setInterval(crearContador, 1000)


//------------------------------------------------------------------------------
/// MOSTRAR CATALOGO COMPLETO

let divPorductos = document.querySelector ("#div-productos")

mostrarProductos(arrayProductos)

function mostrarProductos(arrayRecibido){
    divPorductos.innerHTML = ""

    for(let i=0; i<arrayRecibido.length; i++){

        if (arrayRecibido[i].nuevo){
        divPorductos.innerHTML += `
        <article>
          
        <figure><img src="${arrayRecibido[i].img[0]}" alt="${arrayRecibido[i].nombre}"></figure>
         
        <div>
        <span>Nuevo</span>
        <h3>${arrayRecibido[i].nombre}</h3>
        <p>${arrayRecibido[i].descripcionCorta}</p>
        <br>
         <p><b>$${arrayRecibido[i].precio}</b></p>
         <a href="producto.html?id=${arrayRecibido[i].id}"  class="botonSecundario">Ver más</a>
        </div>
        </article>
      `
    }
    else if (arrayRecibido[i].promo){
    divPorductos.innerHTML += `
    <article>
      
    <figure><img src="${arrayRecibido[i].img[0]}" alt="${arrayRecibido[i].nombre}"></figure>
     
    <div>
    <span style="background: red;color: black;">Promo 30%OFF</span>
    <h3>${arrayRecibido[i].nombre}</h3>
    <p>${arrayRecibido[i].descripcionCorta}</p>
    <br>
    <div class= "precios">
    <p class="primerPrecio">$${arrayRecibido[i].precio}</p>
    <p class="segundoPrecio">$${Math.floor(arrayRecibido[i].precio*0.70)}</p>
    </div>
    <a href="producto.html?id=${arrayRecibido[i].id}"  class="botonSecundario">Ver más</a>
    </div>
    </article>
  `
}

else if (arrayRecibido[i].masVendidos){
divPorductos.innerHTML += `
<article>
  
<figure><img src="${arrayRecibido[i].img[0]}" alt="${arrayRecibido[i].nombre}"></figure>
 
<div>
<span style="background:var(--var-primary1);color: white"> <img src="img/estrella.png" alt="Estrella">Más vendidos</span>
<h3>${arrayRecibido[i].nombre}</h3>
<p>${arrayRecibido[i].descripcionCorta}</p>
<br>
<p><b>$${arrayRecibido[i].precio}</b></p>
   
<a href="producto.html?id=${arrayRecibido[i].id}"  class="botonSecundario">Ver más</a>
</div>
</article>
`
}

else {
divPorductos.innerHTML += `
<article>
  
<figure><img src="${arrayRecibido[i].img[0]}" alt="${arrayRecibido[i].nombre}"></figure>
 
<div>
<span style="background: transparent;"> </span>
<h3>${arrayRecibido[i].nombre}</h3>
<p>${arrayRecibido[i].descripcionCorta}</p>
<br>
<p><b>$${arrayRecibido[i].precio}</b></p>
   
<a href="producto.html?id=${arrayRecibido[i].id}"  class="botonSecundario">Ver más</a>
</div>
</article>
`}
}
}




//------------------------------------------------------------------------------
/// FILTROS

//Contador Productos:
let pContador = document.querySelector ("#contador")
pContador.textContent = "Productos ("+arrayProductos.length+")"


//Limpiar Filtros:
let btnLimpiarFiltros = document.querySelector ("#limpiar-filtros")
btnLimpiarFiltros.addEventListener ("click",limpiarFiltros)

function limpiarFiltros(){
    window.location.reload()
}


//Buscar
let buscar= document.querySelector ("#buscar")
buscar.addEventListener("keyup",buscarProductos)

function buscarProductos(){
    console.log(arrayProductosBuscados)
    let productoIngresado = buscar.value.toLowerCase()
    arrayProductosBuscados = []
    for(let i=0; i<arrayProductos.length; i++){
    
        if(arrayProductos[i].nombre.toLowerCase().includes(productoIngresado)){
               arrayProductosBuscados.push(arrayProductos[i])
        }
    }
    mostrarProductos(arrayProductosBuscados)
    pContador.textContent = "Productos ("+arrayProductosBuscados.length+")"
    if (arrayProductosBuscados.length < 1){
        pContador.textContent = '¡Lo siento! No hay coincidencias para "'+ productoIngresado + '"'
    }
}




//Filtro desplegable:
  //desplegar

let radioDesplegable =  document.querySelector (".radioDesplegable")
radioDesplegable.addEventListener ("click", desplegarRadio)
let diveDesplegable = document.querySelector (".desplegable")

function desplegarRadio (){
  diveDesplegable.style.display= "flex"
}
//Filtro desplegable:
  //radios
let radioButton = document.querySelectorAll(`input[name="veggieSalmon"]`)
let radioA = document.querySelector ("#a")

for(let i = 0; i < radioButton.length; i++){
    radioButton[i].addEventListener("change",filtrarPreferencia)
}

function filtrarPreferencia(){
    selectCategorias.value = "Seleccione una categoria"
    buscar.value = ""

    arrayPreferencias = []
    let valorRadioButton = document.querySelector(`input[name="veggieSalmon"]:checked`).value


    for(let i = 0; i < arrayProductos.length; i++){
        if(arrayProductos[i].preferencia == valorRadioButton){
           arrayPreferencias.push (arrayProductos[i])
        }
    }
    mostrarProductos(arrayPreferencias)
    radioA.textContent = valorRadioButton
    diveDesplegable.style.display= "none"
    pContador.textContent = "Productos ("+arrayPreferencias.length+")"


//Filtro Combinados:
    selectCategorias.addEventListener("change",filtrarCategoriasCombinadas)

    function filtrarCategoriasCombinadas(){
        let valorSelectCategorias = selectCategorias.value
        arrayFiltrosCombinados =[]
    
        for(let i =0; i< arrayPreferencias.length; i++){
            if(arrayPreferencias[i].categoria == valorSelectCategorias || valorSelectCategorias == "todas"){
                arrayFiltrosCombinados.push(arrayPreferencias[i])
            }
        }
        mostrarProductos( arrayFiltrosCombinados)
        pContador.textContent = "Productos ("+arrayFiltrosCombinados.length+")"
    }
    }


//Select: 
  //armar  
let selectCategorias= document.querySelector ("#select-categorias")

armarSelectCategorias()
function armarSelectCategorias(){
    
 
    for(let i=0; i < arrayCategorias.length; i++){
        selectCategorias.innerHTML+= `<option value="${arrayCategorias[i]}">${arrayCategorias[i]}</option>`
        
    }
}

//Select:
 //filtrar
selectCategorias.addEventListener("change",filtrarCategorias)

function filtrarCategorias(){
    buscar.value = ""
    let valorSelectCategorias = selectCategorias.value
    arraySelect =[]

    for(let i =0; i< arrayProductos.length; i++){
        if(arrayProductos[i].categoria == valorSelectCategorias || valorSelectCategorias == "todas"){
            arraySelect.push(arrayProductos[i])
        }
    }
    mostrarProductos(arraySelect)
    pContador.textContent = "Productos ("+arraySelect.length+")"

}





