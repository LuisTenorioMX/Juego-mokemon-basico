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
    let resultadoFinal = ""
    //Vidas
    let vidaJugador = 3
    let vidaEnemigo = 3
    //Deshabilitar elementos
    let eligeMascota = document.getElementById("seccion-elige-mascota")
    let buttonElegirMascota = document.getElementById("button-elige-mascota")
    let saludAtaqueHistorial = document.getElementById("seccion-salud-ataque-historial")
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
                let imgMokemon = document.createElement("img")
                imgMokemon.src = "../Assets/images/mokepons_mokepon_hipodoge_attack.webp"
                imgMokemon.alt = "hipodoge"
                document.getElementById("mokemon-salud-jugador").appendChild(imgMokemon)
            } else if (pokemon2.checked) {
                document.getElementById("mascota-jugador").innerHTML = "capipeo"
                let imgMokemon = document.createElement("img")
                imgMokemon.src = "../Assets/images/mokepons_mokepon_capipepo_attack.webp"
                imgMokemon.alt = "capipeo"
                document.getElementById("mokemon-salud-jugador").appendChild(imgMokemon)
            } else {
                document.getElementById("mascota-jugador").innerHTML = "ratigueya"
                let imgMokemon = document.createElement("img")
                imgMokemon.src = "../Assets/images/mokepons_mokepon_ratigueya_attack.webp"
                imgMokemon.alt = "ratigueya"
                document.getElementById("mokemon-salud-jugador").appendChild(imgMokemon)
            }
            //Del enemigo
            let pc = Math.ceil(Math.random() * 3)
            if (pc == 1) {
                document.getElementById("mascota-enemigo").innerHTML = "El hipodoge enemigo: "
                let imgMokemon = document.createElement("img")
                imgMokemon.src = "../Assets/images/mokepons_mokepon_hipodoge_attack.webp"
                imgMokemon.alt = "hipodoge"
                document.getElementById("mokemon-salud-enemigo").appendChild(imgMokemon)
            } else if (pc == 2) {
                document.getElementById("mascota-enemigo").innerHTML = "El capipeo enemigo: "
                let imgMokemon = document.createElement("img")
                imgMokemon.src = "../Assets/images/mokepons_mokepon_capipepo_attack.webp"
                imgMokemon.alt = "capipeo"
                document.getElementById("mokemon-salud-enemigo").appendChild(imgMokemon)
            } else {
                document.getElementById("mascota-enemigo").innerHTML = "La ratigueya enemiga: "
                let imgMokemon = document.createElement("img")
                imgMokemon.src = "../Assets/images/mokepons_mokepon_ratigueya_attack.webp"
                imgMokemon.alt = "ratigueya"
                document.getElementById("mokemon-salud-enemigo").appendChild(imgMokemon)
            }
            //Mostrar vidas
            document.getElementById("vida-jugador").innerHTML = vidaJugador
            document.getElementById("vida-enemigo").innerHTML = vidaEnemigo
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
    //Function algoritmo de batalla
    function algoritmoBatalla() {
        if (ataqueJugador == ataqueEnemigo) {
            resultadoBatalla = "Empate"
            parpadeoEmpate()
        } else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "AGUA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "FUEGO")) {
            vidaEnemigo--
            document.getElementById("vida-enemigo").innerHTML = vidaEnemigo
            resultadoBatalla = "Lo heriste -1 de vida"
            parpadeoVidasEnemigo()
        } else {
            vidaJugador--
            document.getElementById("vida-jugador").innerHTML = vidaJugador
            resultadoBatalla = "Te hirieron -1 de vida"
            parpadeoVidasJugador()
        }
        creacionHistorialAtaques()
        if (vidaEnemigo == 0) {
            resultadoFinal = "Ganaste"
            let colorFinal = "blue"
            creacionResultadoFinal(colorFinal)
        }
        if (vidaJugador == 0) {
            resultadoFinal = "Perdiste"
            let colorFinal = "red"
            creacionResultadoFinal(colorFinal)
        }
    }
    //Function para hacer parpadear y cambiar el color de las vidas
    function parpadeoVidasJugador() {
        if (vidaJugador > 0) {
            let parpadeoVidas = document.getElementById("p-salud-jugador")
            parpadeoVidas.style.color = "red"
            setTimeout(() => {
                parpadeoVidas.style.color = "white"
            }, 250)
        } else {
            document.getElementById("p-salud-jugador").style.color = "red"
        }
    }
    function parpadeoVidasEnemigo() {
        if (vidaEnemigo > 0) {
            let parpadeoVidas = document.getElementById("p-salud-enemigo")
            parpadeoVidas.style.color = "red"
            setTimeout(() => {
                parpadeoVidas.style.color = "white"
            }, 250)
        } else {
            document.getElementById("p-salud-enemigo").style.color = "red"
        }
    }
    function parpadeoEmpate() {
        let parpadeoEmpateJugador = document.getElementById("p-salud-jugador")
        let parpadeoEmpateEnemigo = document.getElementById("p-salud-enemigo")
        parpadeoEmpateJugador.style.color = "blue"
        parpadeoEmpateEnemigo.style.color = "blue"
        setTimeout(() => {
            parpadeoEmpateJugador.style.color = "white"
            parpadeoEmpateEnemigo.style.color = "white"
        }, 250)
    }
    //Functions para crear el historial de ataques
    function creacionHistorialAtaques() {
        //Historial de ataques jugador y enemigo
        let historialAtaqueJugador = document.createElement("p")
        historialAtaqueJugador.innerHTML = "El jugador atacó con " + ataqueJugador
        document.getElementById("creacion-historial-ataques").appendChild(historialAtaqueJugador)
        let historialAtaqueEnemigo = document.createElement("p")
        historialAtaqueEnemigo.innerHTML = "El enemigo atacó con " + ataqueEnemigo
        document.getElementById("creacion-historial-ataques").appendChild(historialAtaqueEnemigo)
        //resultado de batalla
        let historialResultadoBatalla = document.createElement("p")
        historialResultadoBatalla.innerHTML = resultadoBatalla
        historialResultadoBatalla.style.fontWeight = "bold"
        document.getElementById("creacion-historial-ataques").appendChild(historialResultadoBatalla)
    }
    function creacionResultadoFinal(colorFinal) {
        let historialResultadoFinal = document.createElement("p")
        historialResultadoFinal.innerHTML = resultadoFinal
        historialResultadoFinal.style.fontWeight = "bold"
        historialResultadoFinal.style.color = colorFinal
        document.getElementById("creacion-historial-ataques").appendChild(historialResultadoFinal)
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