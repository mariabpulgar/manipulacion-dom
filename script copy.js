const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'Patito <br> Feo'; // insterta texto en el elemnto h1 en caso que previamente haya texto se cambia. Permite usar mas elementos de html

h1.innerText = 'Patito <br> Feo';// insterta texto en el elemnto h1 en caso que previamente haya texto se cambia. Todo lo que inserta lo convierte a texto

console.log(h1.getAttribute('class'));//Nos ayuda a leer algunos de los atributos)

//h1.setAttribute('class', 'rojo');//Nos ayuda a escribir atributos

h1.classList.add('rojo')// anade clases a un elemento
h1.classList.remove('rojo')//remueve clases de un elemento

const img= document.createElement('img');

img.setAttribute('src', 'https://i0.wp.com/actualidadpanamericana.com/wp-content/uploads/2017/10/gaticos.jpg?w=1200&ssl=1');

console.log(img);

pid.append(img);//se inserta la inmagen dentro del elememento p de id pid enn html

//append y append child funcionan igual y agregan el elemento debajo del elemento dado en el codigo pero si se utiliza inner.html se reescribe el codigo

//ESCUCHANDO EVENTOS DESDE JS

