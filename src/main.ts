interface Partida {
    puntuacion: number;
    carta: number;
    mensaje: string;
    partidaAcabada: boolean
}

const partida: Partida = {
    puntuacion: 0,
    carta: 0,
    mensaje: "",
    partidaAcabada: false
}

const handlePedirCarta = () => {
    const nuevaCarta = dameCarta();
    mostrarCarta(nuevaCarta);
    muestraPuntuacion();
    gameOver();

    if (partida.partidaAcabada) {
        gestionaBotonesPartidaTerminada()
        muestraMensaje();
    }
}

const handlePlantarse = () => {
    plantarse();
    muestraMensaje();
    gestionaBotonesPartidaTerminada();
};

const handleCreaNuevaPartida = () => {
    reiniciaElementosPartida();
    creaNuevaInterfazPartida();
}

const handleQueHabriaPasado = () => {
    const nuevaCarta = dameCarta();
    mostrarCarta(nuevaCarta);
    muestraPuntuacion();
}

const gameOver = () => {
    if (partida.puntuacion > 7.5 && !partida.partidaAcabada) {
        partida.mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        partida.partidaAcabada = true;
    }
};

const sumarPuntuacion = (carta: number) => {
    let puntuacionCarta = 0;

    // Devualve el valor de la carta
    switch (carta) {
        case 1: {
            puntuacionCarta = 1;
            break;
        }

        case 2: {
            puntuacionCarta = 2;
            break;
        }

        case 3: {
            puntuacionCarta = 3;
            break;
        }

        case 4: {
            puntuacionCarta = 4;
            break;
        }

        case 5: {
            puntuacionCarta = 5;
            break;
        }

        case 6: {
            puntuacionCarta = 6;
            break;
        }

        case 7: {
            puntuacionCarta = 7;
            break;
        }

        case 8: {
            puntuacionCarta = 0.5;
            break;
        }

        case 9: {
            puntuacionCarta = 0.5;
            break;
        }

        case 10: {
            puntuacionCarta = 0.5;
            break;
        }
    }

    partida.puntuacion += puntuacionCarta;
};


// Genera un número aleatorio y devuelve una carta
const dameCarta = () => {
    // Llamada a la función recibir número aleatorio
    let nuevoNumero = cartaAleatoria();
    sumarPuntuacion(nuevoNumero);

    return nuevoNumero;
};


// Llama a gameover y muestra un mensaje en pantalla
const plantarse = () => {
    if (partida.puntuacion === 7.5) {
        partida.mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if (partida.puntuacion >= 6 && partida.puntuacion <= 7.4) {
        partida.mensaje = "Casi casi ...";
    }

    if (partida.puntuacion === 5) {
        partida.mensaje = "Te ha entrado el canguelo eh?";
    }

    if (partida.puntuacion <= 4) {
        partida.mensaje = "Has sido muy conservador";
    }
};

export const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return generarNumero;
};

export const reiniciaElementosPartida = () => {
    partida.puntuacion = 0;
    partida.carta = 0;
    partida.mensaje = "";
    partida.partidaAcabada = false;
}

export const events = () => {
    if (
        botonMePlanto && botonMePlanto != undefined && botonMePlanto != null &&
        botonPedirCarta && botonPedirCarta != undefined && botonPedirCarta != null
    ) {
        botonPedirCarta.addEventListener("click", handlePedirCarta);
        botonMePlanto.addEventListener("click", handlePlantarse)
    }
}

document.addEventListener("DOMContentLoaded", () => { creaNuevaInterfazPartida(), events() });

const creaBotonNuevaPartida = () => {
    const nuevaPartidaBoton = document.createElement("button");
    nuevaPartidaBoton.innerText = "Nueva Partida";
    nuevaPartidaBoton.id = "boton-nueva-partida";
    nuevaPartidaBoton.className = "boton-nueva-partida";
    nuevaPartidaBoton.onclick = () => handleCreaNuevaPartida();

    contenedorBotonesElement?.appendChild(nuevaPartidaBoton);
};


const creaBotonQueHabriaPasado = () => {
    const queHabriaPasadoBoton = document.createElement("button");
    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => handleQueHabriaPasado();

    contenedorBotonesElement?.appendChild(queHabriaPasadoBoton);
};

export const muestraPuntuacion = () => {
    if (puntuacionElement) {
        puntuacionElement.innerHTML = "Puntuación: " + partida.puntuacion.toString();
    }
};

export const muestraMensaje = () => {
    if (mensajeElement) {
        mensajeElement.innerHTML = partida.mensaje;
    }
};


export const mostrarCarta = (carta: number): void => {
    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (cartaImgElement && cartaImgElement != null && cartaImgElement != undefined) {
        cartaImgElement.src = cartas[carta];
    }
};


export const gestionaBotonesPartidaTerminada = () => {
    // Habilita botones "pedir carta" y "plantarse"
    if (
        botonPedirCarta && botonPedirCarta != null && botonPedirCarta != undefined &&
        botonMePlanto && botonMePlanto != null && botonMePlanto != undefined
    ) {

        botonPedirCarta.disabled = true;
        botonPedirCarta.className = "disabled-button";

        botonMePlanto.disabled = true;
        botonMePlanto.className = "disabled-button";
    }

    // Crea los botones "nueva partida" y "que habría pasado"
    try {
        creaBotonNuevaPartida();
        creaBotonQueHabriaPasado();
    } catch (error) {
        console.error(error);
    }
}

const reiniciaBotones = () => {
    // Deshabilita botones "pedir carta" y "plantarse"
    if (
        botonPedirCarta && botonPedirCarta != null && botonPedirCarta != undefined &&
        botonMePlanto && botonMePlanto != null && botonMePlanto != undefined
    ) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";

        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }

    // Elimina botones "nueva partida" y "que habría pasado"
    const botonNuevaPartidaElement = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasadoElement = document.getElementById("boton-que-habria-pasado");

    if (
        botonNuevaPartidaElement && botonNuevaPartidaElement != null && botonNuevaPartidaElement != undefined &&
        botonQueHabriaPasadoElement && botonQueHabriaPasadoElement != null && botonQueHabriaPasadoElement != undefined
    ) {
        botonNuevaPartidaElement.remove();
        botonQueHabriaPasadoElement.remove();
    }
}

export const creaNuevaInterfazPartida = () => {
    reiniciaBotones();
    muestraPuntuacion();
    mostrarCarta(partida.carta)
    muestraMensaje();
}

