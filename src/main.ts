// Elementos HTML
const mensajeElement = document.getElementById("mensaje");
const tableroElement = document.getElementById("tablero");
const puntuacionElement = document.getElementById("puntuacion");
const contenedorBotonesElement = document.getElementById("contenedor-botones");

// Elemento imagen carta HTML
const cartaImgElement = document.getElementById("carta");

// Botón pedir carta
const botonPedirCarta = document.getElementById("pedir_carta");

// Botón mePlanto
const botonMePlanto = document.getElementById("me_planto");

// Baraja de cartas
const cartas = [
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
]

document.addEventListener("DOMContentLoaded", () => {
    muestraCartaPorDefecto();
    muestraPuntuacion();
});

// Objeto Partida
interface Partida {
    puntuacion: number;
    carta: number;
    mensaje: string;
    partidaAcabada: boolean
}

// Nueva partida
const partida: Partida = {
    puntuacion: 0,
    carta: 0,
    mensaje: "",
    partidaAcabada: false
}


// Carpeta de imágenes
const cartas_folder = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";

const gameOver = () => {
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        deshabilitaBotonesPartida();
        creaBotonQueHabriaPasado();
        creaBotonNuevaPartida();
    };
    
    if (mensajeElement && !partida.partidaAcabada) {
        partida.partidaAcabada = true;
    }

};

// Suma la puntuación de la carta
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

        case 10: {
            puntuacionCarta = 0.5;
            break;
        }

        case 11: {
            puntuacionCarta = 0.5;
            break;
        }

        case 12: {
            puntuacionCarta = 0.5;
            break;
        }
    }

    partida.puntuacion += puntuacionCarta;
    muestraPuntuacion();
};


// Genera un número aleatorio y devuelve una carta
const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevoNumero = cartaAleatoria();

    mostrarCarta(nuevoNumero);
    sumarPuntuacion(nuevoNumero);

    if (mensajeElement && partida.puntuacion > 7.5 && !partida.partidaAcabada) {
        partida.mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        muestraMensaje(); 
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
const plantarse = () => {
    gameOver();

    if (partida.puntuacion === 7.5) {
        partida.mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if (partida.puntuacion === 6 || partida.puntuacion === 7) {
        partida.mensaje = "Casi casi ...";
    }

    if (partida.puntuacion === 5) {
        partida.mensaje = "Te ha entrado el canguelo eh?";
    }

    if (partida.puntuacion <= 4) {
        partida.mensaje = "Has sido muy conservador";
    }

    if (mensajeElement) {
        mensajeElement.innerHTML = partida.mensaje;
    }
};

// Generar carta aleatoria
const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (12 - 1));

    if (generarNumero != 0) {
        return generarNumero > 7
            ? generarNumero + 2
            : generarNumero;
    } else {
        return generarNumero + 1;
    }
};

// Crea una nueva partida
const creaNuevaPartida = () => {
    partida.puntuacion = 0,
    partida.carta = 0,
    partida.mensaje = "",
    partida.partidaAcabada = false
    
    muestraMensaje();
    reiniciaBotones();
    muestraPuntuacion();
    muestraCartaPorDefecto();
};

const eventos = () => {
    if (
        botonPedirCarta && botonPedirCarta != undefined && botonPedirCarta != null 
        && botonMePlanto && botonMePlanto != undefined && botonMePlanto != null
    ) {
        console.log("eventos cargados")
        botonPedirCarta.addEventListener("click", () => dameCarta());
        botonMePlanto.addEventListener("click", () => plantarse());
    }
}

// Muestra la parte trasera de las cartas
const muestraCartaPorDefecto = () => {
    if (cartaImgElement instanceof HTMLImageElement) {
        cartaImgElement.src = cartas[0];
    }
};

// Función mostrar puntuación
const muestraPuntuacion = () => {
    if (puntuacionElement) {
        puntuacionElement.innerHTML =  "Puntuación: "+ partida.puntuacion.toString();
    }
};

// Función mostrar puntuación
const muestraMensaje = () => {
    if (mensajeElement) {
        mensajeElement.innerHTML =  partida.mensaje;
    }
};


// Crea el botón nueva partida
const creaBotonNuevaPartida = () => {
    const nuevaPartidaBoton = document.createElement("button");
    nuevaPartidaBoton.innerText = "Nueva Partida";
    nuevaPartidaBoton.id = "boton-nueva-partida";
    nuevaPartidaBoton.className = "boton-nueva-partida";
    nuevaPartidaBoton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(nuevaPartidaBoton);
};


// Crea botón queHabriaPasado
const creaBotonQueHabriaPasado = () => {
    const queHabriaPasadoBoton = document.createElement("button");

    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => dameCarta();

    // Añadiendo el botón nueva partida en pantalla
    if ( contenedorBotonesElement && contenedorBotonesElement != undefined && contenedorBotonesElement != null ) {
        contenedorBotonesElement.appendChild(queHabriaPasadoBoton);
    } else {
        console.error("No se ha encontrado el elemento contenedorBotonesElement")
    }
};


// Muestra la carta actual
const mostrarCarta = (carta: number) : void => {
    const rutaCarta = cartas[carta];

    if (cartaImgElement instanceof HTMLImageElement) {
        cartaImgElement.src = rutaCarta;
    }
};

const deshabilitaBotonesPartida = () => {
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = true
        botonPedirCarta.className = "disabled-button";

        botonMePlanto.disabled = true
        botonMePlanto.className = "disabled-button";
    } else {
        throw new Error("Ha ocurrido un problema al terminar la partida.");
    }
}


const reiniciaBotones = () => {
    const botonNuevaPartidaElement = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasasdoElement = document.getElementById("boton-que-habria-pasado");

    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";
        
        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }
    
    // Elimina los botones nueva partida y que habria pasado
    if (botonNuevaPartidaElement instanceof HTMLButtonElement && botonQueHabriaPasasdoElement instanceof HTMLButtonElement) {
        console.log("eliminando botones extra");
        
        botonNuevaPartidaElement.remove();
        botonQueHabriaPasasdoElement.remove();
    }
}