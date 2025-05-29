// ==================
//Variables
// ==================
//Function escogeMascota
const pokemon1 = document.getElementById("hipodoge")
const pokemon2 = document.getElementById("capipeo")
const pokemon3 = document.getElementById("ratigueya")
const mascotaJugador = document.getElementById("mascota-jugador")
const mascotaEnemigo = document.getElementById("mascota-enemigo")
let imgMokemonJugador = document.createElement("img")
let imgMokemonEnemigo = document.createElement("img")
const mokemonSaludJugador = document.getElementById("mokemon-salud-jugador")
const mokemonSaludEnemigo = document.getElementById("mokemon-salud-enemigo")
const spanVidaJugador = document.getElementById("vida-jugador")
const spanVidaEnemigo = document.getElementById("vida-enemigo")
//Function ataqueJugadorEnemigo
let ataqueJugador = ""
let ataqueEnemigo = ""
// Function algoritmoBatalla
let vidaJugador = 3
let vidaEnemigo = 3
let resultadoBatalla = ""
let resultadoFinal = ""
let colorFinal = ""
// Funcion creacionHistorialAtaques
const varCreacionHistorialAtaques = document.getElementById("creacion-historial-ataques")
//Deshabilitar elementos
const eligeMascota = document.getElementById("seccion-elige-mascota")
const buttonElegirMascota = document.getElementById("button-elige-mascota")
const saludAtaqueHistorial = document.getElementById("seccion-salud-ataque-historial")
saludAtaqueHistorial.style.display = "none"
const buttonReiniciar = document.getElementById("button-reiniciar")
buttonReiniciar.style.display = "none"
// ==================
//Funciones
// ==================
// function escoger mascota del jugador y del enemigo
function escogeMascota() {
    if (pokemon1.checked || pokemon2.checked || pokemon3.checked) {
        // Del jugador
        if (pokemon1.checked) {
            mascotaJugador.innerHTML = "hipodoge"
            imgMokemonJugador.src = "../Assets/images/mokepons_mokepon_hipodoge_attack.webp"
            imgMokemonJugador.alt = "hipodoge"
            mokemonSaludJugador.appendChild(imgMokemonJugador)
        } else if (pokemon2.checked) {
            mascotaJugador.innerHTML = "capipeo"
            imgMokemonJugador.src = "../Assets/images/mokepons_mokepon_capipepo_attack.webp"
            imgMokemonJugador.alt = "capipeo"
            mokemonSaludJugador.appendChild(imgMokemonJugador)
        } else {
            mascotaJugador.innerHTML = "ratigueya"
            imgMokemonJugador.src = "../Assets/images/mokepons_mokepon_ratigueya_attack.webp"
            imgMokemonJugador.alt = "ratigueya"
            mokemonSaludJugador.appendChild(imgMokemonJugador)
        }
        //Del enemigo
        let pc = Math.ceil(Math.random() * 3)
        if (pc == 1) {
            mascotaEnemigo.innerHTML = "El hipodoge enemigo: "
            imgMokemonEnemigo.src = "../Assets/images/mokepons_mokepon_hipodoge_attack.webp"
            imgMokemonEnemigo.alt = "hipodoge"
            mokemonSaludEnemigo.appendChild(imgMokemonEnemigo)
        } else if (pc == 2) {
            mascotaEnemigo.innerHTML = "El capipeo enemigo: "
            imgMokemonEnemigo.src = "../Assets/images/mokepons_mokepon_capipepo_attack.webp"
            imgMokemonEnemigo.alt = "capipeo"
            mokemonSaludEnemigo.appendChild(imgMokemonEnemigo)
        } else {
            mascotaEnemigo.innerHTML = "La ratigueya enemiga: "
            imgMokemonEnemigo.src = "../Assets/images/mokepons_mokepon_ratigueya_attack.webp"
            imgMokemonEnemigo.alt = "ratigueya"
            mokemonSaludEnemigo.appendChild(imgMokemonEnemigo)
        }
        //Mostrar vidas
        spanVidaJugador.innerHTML = vidaJugador
        spanVidaEnemigo.innerHTML = vidaEnemigo
        //Quitar elemento de elige mascota
        eligeMascota.style.display = "none"
        buttonElegirMascota.style.display = "none"
        //Mostrar elementos
        saludAtaqueHistorial.style.display = "grid"
        buttonReiniciar.style.display = "block"
    } else {
        alert("Elige a tu mascota")
    }
}
//Function ataques jugador y enemigo
function ataqueJugadorEnemigo(ataque) {
    if (vidaJugador > 0 && vidaEnemigo > 0) {
        //ataque jugador
        if (ataque == "FUEGO") {
            ataqueJugador = "FUEGO"
        } else if (ataque == "AGUA") {
            ataqueJugador = "AGUA"
        } else {
            ataqueJugador = "TIERRA"
        }
        //ataque enemigo
        let pc = Math.ceil(Math.random() * 3)
        if (pc == 1) {
            ataqueEnemigo = "FUEGO"
        } else if (pc == 2) {
            ataqueEnemigo = "AGUA"
        } else {
            ataqueEnemigo = "TIERRA"
        }
        algoritmoBatalla()
        //Respuestas si intenta atacar muerto o si ya mataron al enemigo
    } else if (vidaJugador == 0) {
        alert("No puedes atacar, estas muerto")
    } else {
        alert("No puedes atacar, el enemigo está muerto ¡Deja al cadaver en paz!")
    }
}
//Function algoritmo de batalla y parpadeo de colores
function algoritmoBatalla() {
    if (ataqueJugador == ataqueEnemigo) {
        resultadoBatalla = "Empate"
        mokemonSaludJugador.style.backgroundColor = "blue"
        mokemonSaludEnemigo.style.backgroundColor = "blue"
        setTimeout(() => {
            mokemonSaludJugador.style.backgroundColor = "#b8b8b8"
            mokemonSaludEnemigo.style.backgroundColor = "#b8b8b8"
        }, 250)
    } else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "AGUA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "FUEGO")) {
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
        resultadoBatalla = "Lo heriste -1 de vida"
        if (vidaEnemigo > 0) {
            mokemonSaludEnemigo.style.backgroundColor = "red"
            setTimeout(() => {
                mokemonSaludEnemigo.style.backgroundColor = "#b8b8b8"
            }, 250)
        } else {
            mokemonSaludJugador.style.backgroundColor = "blue"
            mokemonSaludEnemigo.style.backgroundColor = "red"
        }
    } else {
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
        resultadoBatalla = "Te hirieron -1 de vida"
        if (vidaJugador > 0) {
            mokemonSaludJugador.style.backgroundColor = "red"
            setTimeout(() => {
                mokemonSaludJugador.style.backgroundColor = "#b8b8b8"
            }, 250)
        } else {
            mokemonSaludJugador.style.backgroundColor = "red"
            mokemonSaludEnemigo.style.backgroundColor = "blue"
        }
    }
    creacionHistorialAtaques()
    if (vidaEnemigo == 0) {
        resultadoFinal = "Ganaste"
        colorFinal = "blue"
        creacionResultadoFinal(colorFinal)
    }
    if (vidaJugador == 0) {
        resultadoFinal = "Perdiste"
        colorFinal = "red"
        creacionResultadoFinal(colorFinal)
    }
}
//Functions para crear el historial de ataques
function creacionHistorialAtaques() {
    let historialAtaqueJugador = document.createElement("p")
    historialAtaqueJugador.innerHTML = "El jugador atacó con " + ataqueJugador
    varCreacionHistorialAtaques.appendChild(historialAtaqueJugador)
    let historialAtaqueEnemigo = document.createElement("p")
    historialAtaqueEnemigo.innerHTML = "El enemigo atacó con " + ataqueEnemigo
    varCreacionHistorialAtaques.appendChild(historialAtaqueEnemigo)
    //resultado de batalla
    let historialResultadoBatalla = document.createElement("p")
    historialResultadoBatalla.innerHTML = resultadoBatalla
    historialResultadoBatalla.style.fontWeight = "bold"
    varCreacionHistorialAtaques.appendChild(historialResultadoBatalla)
}
function creacionResultadoFinal(colorFinal) {
    let historialResultadoFinal = document.createElement("p")
    historialResultadoFinal.innerHTML = resultadoFinal
    historialResultadoFinal.style.fontWeight = "bold"
    historialResultadoFinal.style.color = colorFinal
    varCreacionHistorialAtaques.appendChild(historialResultadoFinal)
}
// ==================
//Eventos
// ==================
// Evento para ejecutar la function EscogeMascota
document.getElementById("button-elige-mascota").addEventListener("click", escogeMascota)
// Evento para ejecutar la function ataqueJugadorEnemigo
document.getElementById("button-ataque-fuego").addEventListener("click", () => ataqueJugadorEnemigo("FUEGO"))
document.getElementById("button-ataque-agua").addEventListener("click", () => ataqueJugadorEnemigo("AGUA"))
document.getElementById("button-ataque-tierra").addEventListener("click", () => ataqueJugadorEnemigo("TIERRA"))
// Evento para reiniciar el juego
document.getElementById("button-reiniciar").addEventListener("click", () => location.reload())