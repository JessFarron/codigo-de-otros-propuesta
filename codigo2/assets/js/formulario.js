// Todo el programa esta en inglés y así lo manejar formulario --> form
const form = document.querySelector('form');

function displayGuest() {
  const guestDiv = document.getElementById('lista-invitados');
  const user= JSON.parse(localStorage.getItem('user')) || [];

  guestDiv.innerHTML = '';

  user.forEach(guest => {
    const button = document.createElement('button');
    button.classList.add("btn", "btn-primary", "btn-lg", "mb-3", "btn-secondary");
    button.textContent = guest;
    guestDiv.appendChild(button);
  });
}

form.addEventListener('submit', Register);

function Register (e) {
  e.preventDefault();
  // agrege los valores que va a recibir directo a variables 
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let nationality = document.getElementById('nationality').value;

  let data = {
    name: name,
    age: age,
    nationality: nationality
  };
  
  // guardar el objeto en el almacenamiento local
  localStorage.setItem('user', JSON.stringify(data));
}



var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}