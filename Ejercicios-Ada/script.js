// DOM
// Ejercicios
/**************************/
// saludo
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

// const nombreDeUsuario = prompt('Ingresa tu nombre')
// const h1 = document.querySelector('.saludo')
// h1.innerText += ` ${nombreDeUsuario}`
/**************************/
// color
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.
// const nombreColor = prompt ('Ingresa el color que quieras en ingles')
// const body = document.querySelector ('body')
// body.style.backgroundColor = nombreColor

/**************************/
// rgb
// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

// const colorUno = prompt('Ingresa el pimer numero del 0 al 255')
// const colorDos = prompt('Ingresa el segundo numero del 0 al 255')
// const colorTres = prompt('Ingresa el tercer numero del 0 al 255')

// const body = document.querySelector("body")
// body.style.backgroundColor = `rgb(${colorUno},${colorDos},${colorTres})`

/**************************/
// imagen
// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px
// const question = prompt('Ingresa si el tamaño de tu imagen es chica, mediana o grande')

// const imagen = document.querySelector('.img')

// if (question === 'chica'){
//     imagen.style.width = '200px'
// } else if (question === 'mediana'){
//     imagen.style.width = '500px'
// } else if (question === 'grande'){
//     imagen.style.width = '800px'
// }else {
//     alert ('Opción invalida')
// }

/**************************/
// temperatura
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

// const question = parseInt(prompt('Ingrese la temperatura actual'))
// const temperatura = document.querySelector('h1')

// if (question < 0){
//     temperatura.style.color = "blue"
// } else if (question >= 0 && question < 15){
//     temperatura.style.color = "lightblue"
// } else if (question >= 15 && question < 25){
//     temperatura.style.color = "green"
// } else if (question >= 25 && question < 30){
//     temperatura.style.color = "yellow"
// } else if (question >= 30 && question < 35){
//     temperatura.style.color = "orange"
// } else {
//     temperatura.style.color = "red"
// }

// temperatura.innerText += ` ${question}`

/**************************/
// progreso
// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

// const percentage = parseInt(prompt('Ingrese un porcentaje de progreso de 0 al 100'));

// const progressBar = document.querySelector('.progress-bar');

// if (percentage >= 0 && percentage <= 100) {
//   progressBar.style.width = `${percentage}%`;
// } else {
//   alert('Ingrese un porcentaje válido');
// }

/**************************/
// reacciones
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

// const like = parseInt(prompt('Ingresa la cantidad de me gusta'))
// const heart = parseInt(prompt('Ingresa la cantidad de me encanta'))
// const wonder = parseInt(prompt('Ingresa la cantidad de me asombra'))

// const reacciones = document.querySelector('.me_gusta')
// const reacciones1 = document.querySelector('.me_encanta')
// const reacciones2 = document.querySelector('.me_asombra')

// reacciones.innerText += ` ${like}` 
// reacciones1.innerText += ` ${heart}`
// reacciones2.innerText += ` ${wonder}`

/**************************/
// card
// Hacer un programa que al iniciarse pregunte mediante prompts por

// un título
// una url de una imagen
// una url a un artículo
// Utilizar esos datos para completar en el html una card que tenga

// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado
// Dar algunos estilos mínimos a la card:

// centrarla con respecto a la pantalla
// agregarle un borde
// agregarle un sombreado
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto

const title = prompt ('Ingresa un título')
const url = prompt ('Ingresa la url de una imagen')
const article = prompt ('Ingresa el enlace de tu artículo')

const h1 = document.querySelector('h1')
h1.innerText += `${title}`

const img = document.createElement ('img')
img.src = url

const imgContainer = document.querySelector ('.imagen_container')
const imgDiv = imgContainer.querySelector ('img')

if (imgDiv) {
  imgDiv.src = url
} 

const a = document.createElement ('a')
a.href = article
a.textContent = article

const aContainer = document.querySelector ('.imagen_container')
aContainer.appendChild(a)


// document.body.appendChild(a)





/**************************/
// animales
// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

/**************************/
// paises
// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

/**************************/
// comidas
// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.

/**************************/
// busqueda
// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.