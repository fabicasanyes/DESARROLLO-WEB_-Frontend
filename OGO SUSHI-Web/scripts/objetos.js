

/// OBJETOS: Productos

let combinadosHot1 = {
    id: 1,
    img:["img/productos/combinadosHot1.jpg","img/productos/combinadosHot-mini1.jpg","img/productos/combinadosHot-mini2.jpg","img/productos/combinadosHot-mini3.jpg"],
    nombre: "Combinados HOT 12 piezas",
    descripcionCorta: "Variedad de hot rolls, nigiris y sashimis.",
    contiene:["8 rollos", "2 nigiris", "2 sashimi"],
    nuevo: false,
    masVendidos: true,
    promo: false,
    precio: 700,
    categoria: "Combinados",
    preferencia: "Langostino",
}

let combinadosHot2 = {
    id: 2,
    img:["img/productos/combinadosHot2.jpg","img/productos/combinadosHot-mini1.jpg","img/productos/combinadosHot-mini2.jpg","img/productos/combinadosHot-mini3.jpg"],
    nombre: "Combinados HOT 36 piezas",
    descripcionCorta: "Variedad de hot rolls, nigiris y sashimis.",
    contiene:["24 rollos", "6 nigiris", "6 sashimi"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 1800,
    categoria: "Combinados",
    preferencia: "Langostino",
}

let combinadosSoloSalmon1 = {
    id: 3,
    img:["img/productos/combinadosSalmon1.jpg","img/productos/combinadosSalmon-mini1.jpg","img/productos/combinadosSalmon-mini2.jpg","img/productos/combinadosSalmon-mini3.jpg" ],
    nombre: "Combinado de Salmon 12 piezas",
    descripcionCorta: "Variedad de rolls al estilo nikkei y clásico solo salmon, nigiris y sashimis.",
    contiene:["1 rol nikkei", "2 nigiris", "2 sashimi"],
    nuevo: false,
    masVendidos: false,
    promo: true,
    precio: 650,
    categoria: "Combinados",
    preferencia: "Salmón",
}

let combinadosSoloSalmon2 = {
    id: 4,
    img:["img/productos/combinadosSalmon2.jpg","img/productos/combinadosSalmon-mini1.jpg","img/productos/combinadosSalmon-mini2.jpg","img/productos/combinadosSalmon-mini3.jpg" ],
    nombre: "Combinado de Salmon 36 piezas",
    descripcionCorta: "Variedad de rolls al estilo nikkei y clásico solo salmon, nigiris y sashimis.",
    contiene:["1 rol nikkei","1 roll clásico","1 hot roll", "6 nigiris", "5 sashimi"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 1700,
    categoria: "Combinados",
    preferencia: "Salmón",
}

let combinadosPremium1 = {
    id: 5,
    img:["img/productos/combinadosPremium1.jpg","img/productos/combinadosPremium-mini1.jpg","img/productos/combinadosPremium-mini2.jpg","img/productos/combinadosPremium-mini3.jpg"],
    nombre: "Combinado premium 12 piezas",
    descripcionCorta: "Variedad de rolls al estilo nikkei y clásicos, nigiris y sashimis con extra toppings.",
    contiene:["1 roll clásico", "2 nigiris", "2 sashimi"],
    nuevo: false,
    masVendidos: true,
    promo: false,
    precio: 650,
    categoria: "Combinados",
    preferencia: "Salmón",
}
let combinadosPremium2 = {
    id: 6,
    img:["img/productos/combinadosPremium2.jpg","img/productos/combinadosPremium-mini1.jpg","img/productos/combinadosPremium-mini2.jpg","img/productos/combinadosPremium-mini3.jpg"],
    nombre: "Combinado premium 36 piezas",
    descripcionCorta: "Variedad de rolls al estilo nikkei y clásicos, nigiris y sashimis, con toppings.",
    contiene:["1 rol nikkei","2 roll clásico","2 hot roll", "6 nigiris", "6 sashimi"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 1750,
    categoria: "Combinados",
    preferencia: "Salmón",
}

let rollNikkei1 = {
    id: 7,
    img:["img/productos/rollNikkei1.jpg","img/productos/rollNikkei1-mini1.jpg","img/productos/rollNikkei1-mini2.jpg","img/productos/rollNikkei1-mini3.jpg"],
    nombre: "Acevichado Roll",
    descripcionCorta: "Roll relleno de langostino en panko y queso crema, cubierto de salmón, salsa acevichada e hilos de boniato crujiente.",
    contiene:["Langostino","Queso crema","Salmon"],
    nuevo: true,
    masVendidos: false,
    promo: false,
    precio: 440,
    categoria: "Rolls",
    preferencia: "Langostino",
}

let rollNikkei2 = {
    id: 8,
    img:["img/productos/rollNikkei2.jpg","img/productos/rollNikkei2-mini1.jpg","img/productos/rollNikkei2-mini2.jpg","img/productos/rollNikkei2-mini3.jpg"],
    nombre: "Fire Roll",
    descripcionCorta: "Roll relleno de vegetales grillados, salmón y jengibre, cubierto de queso de fruto secos flameado, ralladura de lima y salsa teriyaki.",
    contiene:["Vegetales","Salmon","Jengibre"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 440,
    categoria: "Rolls",
    preferencia: "Salmón",
}

let rollClasico1 = {
    id: 9,
    img:["img/productos/rollClasico1.jpg","img/productos/rollClasico1-mini1.jpg","img/productos/rollClasico1-mini2.jpg","img/productos/rollClasico1-mini3.jpg"],
    nombre: "Alaska Roll",
    descripcionCorta: "Roll con arroz por fuera, relleno de salmón, queso crema y pepino, cubierto de semillas de sésamo.",
    contiene:["Arroz","Salmon","Pepino","Queso Crema"],
    nuevo: false,
    masVendidos: false,
    promo: true,
    precio: 415,
    categoria: "Rolls",
    preferencia: "Salmón",
}

let rollClasico2 = {
    id: 10,
    img:["img/productos/rollClasico2.jpg","img/productos/rollClasico2-mini1.jpg","img/productos/rollClasico2-mini2.jpg","img/productos/rollClasico2-mini3.jpg"],
    nombre: "Ebi Roll",
    descripcionCorta: "Roll con arroz por fuera, relleno de langostinos panko, queso crema y palta, cubierto con semillas de sésamo.",
    contiene:["Arroz","Langostinos","Palta","Queso Crema"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 415,
    categoria: "Rolls",
    preferencia: "Langostino",
}
let rollHot1 = {
    id: 11,
    img:["img/productos/rollHot1.jpg","img/productos/rollHot1-mini1.jpg","img/productos/rollHot1-mini2.jpg","img/productos/rollHot1-mini3.jpg"],
    nombre: "Salmón hot roll",
    descripcionCorta: "Roll relleno de salmón, queso crema y ciboullet, empanado en panko y frito con salsa nikkei",
    contiene:["Salmon","Queso crema","Ciboullete"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 460,
    categoria: "Rolls",
    preferencia: "Salmón",
}

let rollHot2 = {
    id: 12,
    img:["img/productos/rollHot2.jpg","img/productos/rollHot2-mini1.jpg","img/productos/rollHot2-mini2.jpg","img/productos/rollHot2-mini3.jpg"],
    nombre: "White hot roll",
    descripcionCorta: "Roll relleno de pesca blanca en pankon y palta, empanado en panko y frito con salsa de ají amarillo.",
    contiene:["Pesca Blanca","Palta"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 460,
    categoria: "Rolls",
    preferencia: "Salmón",
}
let rollVeggie1 = {
    id: 13,
    img:["img/productos/rollVeggie1.jpg","img/productos/rollVeggie1-mini1.jpg","img/productos/rollVeggie1-mini2.jpg","img/productos/rollVeggie1-mini3.jpg"],
    nombre: "Yasai roll",
    descripcionCorta: "Roll relleno con grillada de vegetales, tempura de cebolla y escarola, cubiertos de queso crema rostizado con salsa de maracuyá.",
    contiene:["Vegetales","Cebolla", "Escarola"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 420,
    categoria: "Rolls",
    preferencia: "Veggie",
}
let rollVeggie2 = {
    id: 14,
    img:["img/productos/rollVeggie2.jpg","img/productos/rollVeggie2-mini1.jpg","img/productos/rollVeggie2-mini2.jpg","img/productos/rollVeggie2-mini3.jpg"],
    nombre: "Camote coconut roll",
    descripcionCorta: "Roll relleno de boniato glaseado, mango y berro crispy. Cubierto de palta, salsa de coco y crocante de tortilla de maiz.",
    contiene:["Boniato","Mango", "Berro"],
    nuevo: false,
    masVendidos: true,
    promo: false,
    precio: 415,
    categoria: "Rolls",
    preferencia: "Veggie",
}
let entrada1= {
    id: 15,
    img:["img/productos/entrada1.jpg","img/productos/entrada1-mini1.jpg","img/productos/entrada1-mini2.jpg","img/productos/entrada1-mini3.jpg"],
    nombre: "Pops shunchs fish (5 unidades)",
    descripcionCorta: "Bolita de pesca crunchy acompañadas con salsa tártara.",
    contiene:["Pesca Blanca","Ciboulete"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 350,
    categoria: "Entradas",
    preferencia: "Pesca Blanca",
}

let entrada2= {
    id: 16,
    img:["img/productos/entrada2.jpg","img/productos/entrada2-mini1.jpg","img/productos/entrada2-mini2.jpg","img/productos/entrada2-mini3.jpg"],
    nombre: "Pankkuzza (3 unidades)",
    descripcionCorta: "Dedo de muzarella rebozado en panko con salsa de mostaza y miel.",
    contiene:["Muzzarella","Panko"],
    nuevo: true,
    masVendidos: false,
    promo: false,
    precio: 325,
    categoria: "Entradas",
    preferencia: "Salmón",
}
let entrada3= {
    id: 17,
    img:["img/productos/entrada3.jpg","img/productos/entrada3-mini1.jpg","img/productos/entrada3-mini2.jpg","img/productos/entrada3-mini3.jpg"],
    nombre: "Brochetitas (2 unidades)",
    descripcionCorta: "Brocheta de langostinos glaseado con salsa de maracuyá y muzzarella en panko.",
    contiene:["Langostinos","Panko","Maracuya"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 420,
    categoria: "Entradas",
    preferencia: "Langostino"
}
let tiradita1= {
    id: 18,
    img:["img/productos/tiradita1.jpg","img/productos/tiradita1-mini1.jpg","img/productos/tiradita1-mini2.jpg","img/productos/tiradita1-mini3.jpg"],
    nombre: "Tiraditos de pesca blanca",
    descripcionCorta: "Sal rosa, jugo de lima, salsa de ceviche nikkei, tomate cherry, ciboullet, cilantro y crocante de boniato",
    contiene:["Ceviche nikkei","Tomates Cherry","Boniato", "Ciboullet"],
    nuevo: true,
    masVendidos: false,
    promo: false,
    precio: 440,
    categoria: "Tiraditos",
    preferencia: "Pesca Blanca",
}
let tiradita2= {
    id: 19,
    img:["img/productos/tiradita2.jpg","img/productos/tiradita2-mini1.jpg","img/productos/tiradita2-mini2.jpg","img/productos/tiradita2-mini3.jpg"],
    nombre: "Tiraditos de salmón grillé",
    descripcionCorta: "Sal marina, jugo de lima,chimichurri y cebolla crispy",
    contiene:["Salmon","Chimichurru","Cebolla"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 440,
    categoria: "Tiraditos",
    preferencia: "Salmón",
}
let tiradita3= {
    id: 20,
    img:["img/productos/tiradita3.jpg","img/productos/tiradita3-mini1.jpg","img/productos/tiradita3-mini2.jpg","img/productos/tiradita3-mini3.jpg"],
    nombre: "Tiraditos de salmón fruit passion",
    descripcionCorta: "Sal marina, jugo de lima, salsa de maracuyá, polco de aji semi picante, y crocante de almendra",
    contiene:["Salmon","Aji","Almendras"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 440,
    categoria: "Tiraditos",
    preferencia: "Salmón",
}
let tiradita4= {
    id: 21,
    img:["img/productos/tiradita4.jpg","img/productos/tiradita4-mini1.jpg","img/productos/tiradita4-mini2.jpg","img/productos/tiradita4-mini3.jpg"],
    nombre: "Tiraditos de veggie acevichada",
    descripcionCorta: "Sal rosa, jugo de lima, salsa de mango, palta, maiz inflado y cilantro.",
    contiene:["Cilantro","Palta","Maiz"],
    nuevo: false,
    masVendidos: false,
    promo: false,
    precio: 440,
    categoria: "Tiraditos",
    preferencia: "Veggie",
  

}


/// ARRAYS

let arraySlider= [ "slider-1.jpg","slider-2.jpg","slider-3.jpg","slider-4.jpg","slider-5.jpg","slider-6.jpg",]
console.log (arraySlider)

let arrayProductos = [combinadosHot1,combinadosHot2, combinadosSoloSalmon1, combinadosSoloSalmon2,combinadosPremium1,combinadosPremium2,rollNikkei1,rollNikkei2, rollClasico1, rollClasico2, rollHot1,rollHot2,rollVeggie1, rollVeggie2, entrada1,entrada2,entrada3, tiradita1,tiradita2,tiradita3,tiradita4]

let arrayProductosNuevos= []

let arrayCategorias= ["Entradas","Tiraditos","Combinados", "Rolls"]

let arrayProductosBuscados = []

let arrayPreferencias = []

let arraySelect =[]

let arrayFiltrosCombinados =[]

let arrayFiltrosCombinados2 =[]

let arraySimilares =[]