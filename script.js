// DOM - Document Object Modem
// lo que se puede ver del html y lo que se puede modificar con JS
// como puedo acceder desde JS a las etiquetas semanticas

//comandos no usamos hasta el modulo que viene porque falta conocimientos de arrays
//getElementByTagName()
//getElementByClassName()


// getElementById()
// me permite mostrar solamente id's y se escribe entre comillas 

// const h1 = document.getElementById("h1")
// console.log(h1)
//document es una palabra reservada de JS que muestra mi documento en consola

//querySelector()
//me permite acceder a los elementos por etiquetas, class, id, name
// const h1 = document.querySelector("h1") //llamo a una etiqueta

// const p = document.querySelector(".parrafo") //llamo a una clase

// const imputText = document.querySelector("#nombre") //llamo a un etiqueta

// console.log (p)

// innerHTML
// me petmite modificar texto e inyectar nuevos nodos, es decir, puedo añadir etiquetas semanticas
// no sobreescribe el html original sino como lo lee la consola

// console.log(p.innerHTML)
// p.innerHTML = "Soy el texto modificado desde JS"

// puedo añadir etiquetas semanticas:
// p.innerHTML = "<b>Soy el texto modificado desde JS</b>"

// innerText
// me permite modificar el texto pero no agregar nodos, es decir, me muestra el texto plano
// pisa el texto ya existente

// p.innerText = "Soy el texto modificado desde JS"

// si le agrego las etiquetas semanticas no me lo modifica (en este caso poder en negrita el texto), sino me lo muestra tal cual lo escribi
// p.innerText = "<b>Soy el texto modificado desde JS</b>"

//+=
// si en innerText no quiero pisar el texto existente utilizo el += que funciona como un concatenador

// const nombreDeUsuario = prompt('Ingrese su nombre:')

// p.innerText += ` ${nombreDeUsuario}`

//styles 
// puedo modificar estilos como en el css
// los estilos en linea tienen prioridad sobre los estilos en css
// solo hace las modificaciones al elemento que estoy llamando (en este caso el h1)

// h1.style.color = "red"
// h1.style.backgroundColor = "black"
// h1.style.fontFamily = "Arial"
// h1.style.display = "block"

// const meme = document.querySelector("#meme")

// meme.style.backgroundImage = "url('https://static.wikia.nocookie.net/doblaje/images/c/cb/SpongeBob.png/revision/latest?cb=20220925230116&path-prefix=es')"

// classList (add, remove, toggle, contains)

// const pinkBox = document.querySelector('.rosa')
// const orangeBox = document.querySelector('.naranja')

// console.log(pinkBox.classList)
// es una propiedad que tienen nuestros elementos que nos permite acceder a todas las clases que tiene el elemento
//gracias a eso se puede, agregar, sacar clases etc.

// add - adiciona a mis estilos ya predeterminados
// pinkBox.classList.add("grande")
// pinkBox.classList.add("visibility--hidden")

// en este caso la aplica esta propiedad con los estilos el tiqmpo que le indique 
// setTimeout(() => {
//     pinkBox.classList.add("visibility--hidden")
// }, 3000)

// remove - remueve los estilos que tengo predeterminados
// orangeBox.classList.remove("naranja")

//toggle - alterna 
// alterna la clase que le pido si la tiene la saca, sino la pone
// const cambiarTamanio = () => {
//     pinkBox.classList.toggle("grande")
// }

//contains 
//pregunta si contiene una clase y devuelve un booleano
//nos sirve para hacer condicionales if
// pinkBox.classList.contains ('pink') // true
// pinkBox.classList.contains ('orange') // false

//Modificando atributos

// const password = document.querySelector ('#passwordId')
// console.log(password.id)
// console.log(password.name)
// console.log(password.type)

//setAtribute - getAttribute - removeAttribute
// metodos nativos que nos permiten, agregar, obtener o remover atributos

// password.setAttribute('class', 'azul')
// password.removeAttribute("name")

// con setAttribute puedo cambiar mis atributos
// p.setAttribute('data-Id', s)

//Trick and Tip
//cuando programe voy a armar el codigo de JS de la siguiente manera: 

// Variables
// Funciones
// Eventos 

//Funcion que retorna elementos de html segun el argumento que recibe
// cada vez que quiera utilizar alguna clase, id, etiqueta etc.
// const $ = (selector) => document.querySelector(selector)
// $('#passwordId').type = 'text'
// $('#passwordId').type = 'password'

// $(".azul").classList.add("grande")

