function iniciarJs() {
    // ==================
    //Variables
    // ==================
    //Pokemon
    let pokemon1 = document.getElementById("hipodoge")
    let pokemon2 = document.getElementById("capipeo")
    let pokemon3 = document.getElementById("ratigueya")
    //Ataques
    let ataqueJugador = ""
    let ataqueEnemigo = ""
    let resultadoBatalla = ""
    //Vidas
    let vidaJugador = 3
    let vidaEnemigo = 3
    //Deshabilitar elementos
    let eligeMascota = document.getElementById("elige-mascota")
    let buttonElegirMascota = document.getElementById("button-elige-mascota")
    let saludAtaqueHistorial = document.getElementById("salud-ataque-historial")
    saludAtaqueHistorial.style.display = "none"
    let buttonReiniciar = document.getElementById("button-reiniciar")
    buttonReiniciar.style.display = "none"
    // ==================
    //Funciones
    // ==================
    // function escoger mascota del jugador y del enemigo
    function escogeMascota() {
        if (pokemon1.checked || pokemon2.checked || pokemon3.checked) {
            // Del jugador
            if (pokemon1.checked) {
                document.getElementById("mascota-jugador").innerHTML = "hipodoge"
                document.getElementById("vida-jugador").innerHTML = vidaJugador
            } else if (pokemon2.checked) {
                document.getElementById("mascota-jugador").innerHTML = "capipeo"
                document.getElementById("vida-jugador").innerHTML = vidaJugador
            } else {
                document.getElementById("mascota-jugador").innerHTML = "ratigueya"
                document.getElementById("vida-jugador").innerHTML = vidaJugador
            }
            //Del enemigo
            let pc = Math.ceil(Math.random() * 3)
            if (pc == 1) {
                document.getElementById("mascota-enemigo").innerHTML = "hipodoge"
                document.getElementById("vida-enemigo").innerHTML = vidaEnemigo
            } else if (pc == 2) {
                document.getElementById("mascota-enemigo").innerHTML = "capipeo"
                document.getElementById("vida-enemigo").innerHTML = vidaEnemigo
            } else {
                document.getElementById("mascota-enemigo").innerHTML = "ratigueya"
                document.getElementById("vida-enemigo").innerHTML = vidaEnemigo
            }
            //Quitar elemento de elige mascota
            eligeMascota.style.display = "none"
            buttonElegirMascota.style.display = "none"
            //Mostrar elementos
            saludAtaqueHistorial.style.display = "flex"
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
                creacionHistorialAtaquesJugador()
            } else if (ataque == "AGUA") {
                ataqueJugador = "AGUA"
                creacionHistorialAtaquesJugador()
            } else {
                ataqueJugador = "TIERRA"
                creacionHistorialAtaquesJugador()
            }
            //ataque enemigo
            let pc = Math.ceil(Math.random() * 3)
            if (pc == 1) {
                ataqueEnemigo = "FUEGO"
                creacionHistorialAtaquesEnemigo()
            } else if (pc == 2) {
                ataqueEnemigo = "AGUA"
                creacionHistorialAtaquesEnemigo()
            } else {
                ataqueEnemigo = "TIERRA"
                creacionHistorialAtaquesEnemigo()
            }
            algoritmoBatalla()
            //Respuestas si intenta atacar muerto o si ya mataron al enemigo
        } else if (vidaJugador == 0) {
            alert("No puedes atacar, estas muerto")
        } else {
            alert("No puedes atacar, el enemigo está muerto ¡Deja al cadaver en paz!")
        }
    }
    //Functions para crear el historial de ataques
    function creacionHistorialAtaquesJugador() {
        let historialAtaqueJugador = document.createElement("p")
        historialAtaqueJugador.innerHTML = "El jugador atacó con " + ataqueJugador
        document.getElementById("creacion-historial-ataques").appendChild(historialAtaqueJugador)
    }
    function creacionHistorialAtaquesEnemigo() {
        let historialAtaqueEnemigo = document.createElement("p")
        historialAtaqueEnemigo.innerHTML = "El enemigo atacó con " + ataqueEnemigo
        document.getElementById("creacion-historial-ataques").appendChild(historialAtaqueEnemigo)
    }
    function creacionHistorialResultadoBatalla() {
        let historialResultadoBatalla = document.createElement("p")
        historialResultadoBatalla.innerHTML = resultadoBatalla
        document.getElementById("creacion-historial-ataques").appendChild(historialResultadoBatalla)
    }
    //Function algoritmo de batalla
    function algoritmoBatalla() {
        //Transformación de los ataques del jugador a números
        if (ataqueJugador == "FUEGO") {
            ataqueJugador = 1
        } else if (ataqueJugador == "TIERRA") {
            ataqueJugador = 2
        } else {
            ataqueJugador = 3
        }
        //Transformación de los ataques del enemigo a números
        if (ataqueEnemigo == "FUEGO") {
            ataqueEnemigo = 1
        } else if (ataqueEnemigo == "TIERRA") {
            ataqueEnemigo = 2
        } else {
            ataqueEnemigo = 3
        }
        //Algoritmo de batalla
        if (ataqueJugador == ataqueEnemigo) {
            resultadoBatalla = "Empate"
            creacionHistorialResultadoBatalla()
        } else if (ataqueJugador - ataqueEnemigo == 1 || ataqueJugador - ataqueEnemigo == -2) {
            vidaEnemigo--
            document.getElementById("vida-enemigo").innerHTML = vidaEnemigo
            resultadoBatalla = "Dañaste al enemigo -1 de vida"
            creacionHistorialResultadoBatalla()
            if (vidaEnemigo == 0) {
                resultadoBatalla = "Ganaste"
                creacionHistorialResultadoBatalla()
            }
        } else {
            vidaJugador--
            document.getElementById("vida-jugador").innerHTML = vidaJugador
            resultadoBatalla = "El enemigo te dañó -1 de vida"
            creacionHistorialResultadoBatalla()
            if (vidaJugador == 0) {
                resultadoBatalla = "Perdiste"
                creacionHistorialResultadoBatalla()
            }
        }
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
}
// Evento para ejecutar la function iniciarJs
window.addEventListener("load", iniciarJs)