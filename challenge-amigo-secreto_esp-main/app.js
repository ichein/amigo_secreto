let amigos = [];

// Función para cambiar el contenido de una etiqueta HTML
function cambiarContenidoDeEtiquetas(idElemento, texto) {
    let elementoHtml = document.getElementById(idElemento);
    if (elementoHtml) {
        elementoHtml.innerHTML = texto;
    } else {
        console.error(`Error: No se encontró el elemento con ID '${idElemento}'`);
    }
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); 
    const listaAmigosUl = document.getElementById("listaAmigos");
    const resultadoDiv = document.getElementById("resultado"); 
    // Validaciones
    if (nombreAmigo === "") {
        cambiarContenidoDeEtiquetas("resultado", "Por favor, ingresa un nombre válido");
        inputAmigo.focus();
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        cambiarContenidoDeEtiquetas("resultado", "Ese nombre ya ha sido añadido a la lista!");
        inputAmigo.value = "";
        inputAmigo.focus();
        return;
    }
    // Añadir el amigo al array
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    listaAmigosUl.innerHTML = ''; 
    cambiarContenidoDeEtiquetas("listaAmigos",amigos)
    // Limpiar mensajes de resultado previos
    cambiarContenidoDeEtiquetas("resultado", "");
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    let numeroDeAmigos = amigos.length
    //let ResultadoDelSorteo = numeroDeAmigos + 1 
    let escojerNumero = Math.floor(Math.random()*numeroDeAmigos)
    let ganador = amigos[escojerNumero]
    console.log(numeroDeAmigos, escojerNumero, ganador)
    cambiarContenidoDeEtiquetas("resultado",ganador)
    cambiarContenidoDeEtiquetas("listaAmigos",amigos)
}