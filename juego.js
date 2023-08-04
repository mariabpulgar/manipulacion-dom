var a = "tijera"
var b = "papel"

function myFunction(a,b) {
    if (a === "piedra" && b === "tijera"){
        console.log("Ganaste");
    } else if (a === "tijera" && b === "papel"){
        console.log("Ganaste");
    }else if (a === "papel" && b === "piedra"){
        console.log("Ganaste");
    } else {
        console.log("Perdiste");
    }
}

myFunction()

switch(article) {
    case "computadora":
      return "Con mi computadora puedo programar usando JavaScript"
      break;
    case "celular":
      return "En mi celular puedo aprender usando la app de Platzi"
      break;
    
    case "cable":
        return "¡Hay un cable en mi bota!"
        break;
    default:
      return "Artículo no encontrado"
}
//CICLO FOR
var estudiantes = ["Maria", "Pedro", "Ramon", "Alejandro", "Daniel", "Sandra"];

function saludarEstudiantes(estudiante){
        console.log(`Hola, ${estudiante}`);
}
estudiantes.push("Ramiro");

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

var estudiantes = ["Maria", "Pedro", "Ramon", "Alejandro", "Daniel", "Sandra"];
for(var pedazo of estudiantes){
    saludarEstudiantes(pedazo);
}


//CICLO WHILE
var estudiantes = ["Maria", "Pedro", "Ramon", "Alejandro", "Daniel", "Sandra"];

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}

while (estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//OBJETOS

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalleDelAuto()

//FUNCION CONSTRUCTORA DE OBJETOS

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Modelo de tesla", 2020);
var autoNuevo2 = new auto("Toyota", "Camry", 2023);
var autoNuevo3 = new auto("Tesla", "modelo 2", 2023);

//METODOS DE RECORRIDOS DE ARRAYS

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo:2500},
    { nombre: "Libro", costo:320}, 
    { nombre: "Celular", costo:10000}, 
    { nombre: "Laptop", costo:20000}, 
    { nombre: "Teclado", costo:500}, 
    { nombre: "Audifonos", costo:1700}, 
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

articulosFiltrados 

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo:2500},
    { nombre: "Libro", costo:320}, 
    { nombre: "Celular", costo:10000}, 
    { nombre: "Laptop", costo:20000}, 
    { nombre: "Teclado", costo:500}, 
    { nombre: "Audifonos", costo:1700}, 
]

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo:2500},
    { nombre: "Libro", costo:320}, 
    { nombre: "Celular", costo:10000}, 
    { nombre: "Laptop", costo:20000}, 
    { nombre: "Teclado", costo:500}, 
    { nombre: "Audifonos", costo:1700}, 
]

var costoArticulos = articulos.map(function(articulo){
    return articulo.costo
})


var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo:2500},
    { nombre: "Libro", costo:320}, 
    { nombre: "Celular", costo:10000}, 
    { nombre: "Laptop", costo:20000}, 
    { nombre: "Teclado", costo:500}, 
    { nombre: "Audifonos", costo:1700}, 
]

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo:2500},
    { nombre: "Libro", costo:320}, 
    { nombre: "Celular", costo:10000}, 
    { nombre: "Laptop", costo:20000}, 
    { nombre: "Teclado", costo:500}, 
    { nombre: "Audifonos", costo:1700}, 
]

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//some devuelve un verdadero y falso de acuerdo al criterio
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo:2500},
    { nombre: "Libro", costo:320}, 
    { nombre: "Celular", costo:10000}, 
    { nombre: "Laptop", costo:20000}, 
    { nombre: "Teclado", costo:500}, 
    { nombre: "Audifonos", costo:1700}, 
]

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos 

var estudiante = [
    nombre, apellido, nombreDeUsuarioEnPlatzi, 
]

//CICLO FOR

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 0; i < 5; i++) {
    if ((i%2)==0){
        console.log(i + " es un valor par" );
    }  else{
        console.log(i + (" es impar"))
    }     
} 

//CICLO WHILE, una de las diferencias con el ciclo for es que el ciclo for nos permite crear la variable en el argumento, con el ciclo while hay que definirla antes

let i=0;
while (i<5){
    console.log("El valor de i es " + i);
    i++;// es importante incrementar i porque si no se hace el ciclo queda infinito porque i se declaro en cero y seguira siendo cero si no se incrementa.
}

let respuesta; //se declara la variable
while (respuesta != '4') { 
    let pregunta = prompt("Cuanto es 2+2?")
    respuesta = pregunta; // esto es lo que finaliza el codigo para que no se ejecute un ciclo infinito
    
}

//Escribe una funcion quedado un arreglo esta funcion imprima cada elemento del arreglo por separado no se vale imprimir el arreglo completo
let comidas = ["pan", "pera", "manzana", "uvas"]

function imprimirElArreglo (arr){
    for(i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

imprimirElArreglo(comidas)

// Dado un Objeto imprime todos sus elementos por separado no se vale imprimir el objeto completo

const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ["pollo", "compota", "vegetales"]
}

//para resolver esto el profesor sugiere convertir el objeto en un array

let sample = Object.values(obj);

function imprimirElArreglo (arr){
    for(i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

imprimirElArreglo(sample)

//Validar una condicion usando un objeto

const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
}

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("este tipo de suscripcion no existe")
}
conseguirTipoSuscripcion("free")

//COMO CONECTAR JS CON HTML 