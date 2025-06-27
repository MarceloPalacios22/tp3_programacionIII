const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

function mostrarPalabras(lista) {
    const listaFrutas = document.getElementById("listado")
    listaFrutas.innerHTML="";
    lista.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra ;
        listaFrutas.appendChild(li);
    });
}

function filtrarPalabras (event) {
    event.preventDefault();
    const input = document.getElementById("filtro").value.trim().toLowerCase();
    const mensajeError = document.getElementById("mensaje");

    if(input === ""){
        mensajeError.textContent="ERROR";
        return
    }
mensajeError.textContent="";

const palabrasFiltradas = palabras.filter(palabra => palabra.toLowerCase().includes(input));

document.getElementById("filtro").value = "";

mostrarPalabras(palabrasFiltradas);

}

mostrarPalabras(palabras);
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", filtrarPalabras);