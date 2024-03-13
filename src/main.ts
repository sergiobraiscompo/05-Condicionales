let puntuacion = 0;
let carta = 0;

// Cartas del juego
// AS de copas
const as_copas = "1_as-copas.jpg"

// 2 de copas
const dos_copas = "2_dos-copas.jpg"

// 3 de copas
const tres_copas = "3_tres-copas.jpg"

// 4 de copas
const cuatro_copas = "4_cuatro-copas.jpg"

// 5 de copas
const cinco_copas = "5_cinco-copas.jpg"

// 6 de copas
const seis_copas = "6_seis-copas.jpg"

// 7 de copas
const siete_copas = "7_siete-copas.jpg"

// Sota de copas
const sota_copas = "10_sota-copas.jpg"

// Caballo de copas
const caballo_copas = "11_caballo-copas.jpg"

// Rey de copas
const rey_copas = "12_rey-copas.jpg";

// Carta_boca_abajo
const carta_boca_abajo = "back.jpg";

// Elemento imagen carta HTML
const carta_img_element = document.getElementById("carta");

// Carpeta de imágenes
const cartas_folder = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";


// Elementos HTML
const mensaje_element = document.getElementById("mensaje");
const tablero_element = document.getElementById("tablero");
const body_element = document.body;

// Botones de la web
const nueva_partida_boton = document.getElementById("nueva_partida");

const boton_pedir_carta = document.getElementById("pedir_carta");


const muestraCartaPorDefecto = () => {
    if (carta_img_element instanceof HTMLImageElement) {
        carta_img_element.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
    }
};

document.addEventListener("DOMContentLoaded", muestraCartaPorDefecto);


// Función mostrar puntuación
const muestraPuntuacion = () => {
    const puntuacion_element = document.getElementById("puntuacion");
    
    if (puntuacion_element) {
        puntuacion_element.innerHTML =  "Puntuación: "+ puntuacion.toString();
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);


// Suma la puntuación de la carta
const sumarPuntuacion = (carta: number) => {
    let puntuacionCarta = 0;

    // Gestiona la puntuación en base a la carta
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
    
    puntuacion += puntuacionCarta;
    muestraPuntuacion();
};


const gameOver = () => {
    let  mensaje = "";
    
    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = true
        mePlantoBoton.disabled = true
    };
    
    if (mensaje_element) {
        mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        mensaje_element.innerHTML = mensaje;
    }

    creaBotonNuevaPartida();
    
};


// Crea el botón nueva partida
const creaBotonNuevaPartida = () => {
    const nueva_partida_boton = document.createElement("button");

    nueva_partida_boton.innerText = "Nueva Partida";
    nueva_partida_boton.id = "boton_nueva_partida";
    nueva_partida_boton.className = "boton_nueva_partida";
    nueva_partida_boton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    body_element?.appendChild(nueva_partida_boton);
};


// Muestra la carta actual
const mostrarCarta = (carta: number) : void => {

    let ruta_carta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            ruta_carta = cartas_folder + as_copas;
            break;
        }

        case 2: {
            ruta_carta = cartas_folder + dos_copas;
            break;
        }

        case 3: {
            ruta_carta = cartas_folder + tres_copas;
            break;
        }

        case 4: {
            ruta_carta = cartas_folder + cuatro_copas;
            break;
        }

        case 5: {
            ruta_carta = cartas_folder + cinco_copas;
            break;
        }

        case 6: {
            ruta_carta = cartas_folder + seis_copas;
            break;
        }

        case 7: {
            ruta_carta = cartas_folder + siete_copas;
            break;
        }

        case 10: {
            ruta_carta = cartas_folder + sota_copas;
            break;
        }

        case 11: {
            ruta_carta = cartas_folder + caballo_copas;
            break;
        }

        case 12: {
            ruta_carta = cartas_folder + rey_copas;
            break;
        }

        default: {
            ruta_carta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;;
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (carta_img_element instanceof HTMLImageElement) {
            carta_img_element.src = ruta_carta;
    }
};


// Generar carta aleatoria
const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (12 - 1));
    if (generarNumero != 0){
        return generarNumero > 7
            ? generarNumero + 2
            : generarNumero;
    } else {
        return generarNumero + 1;
    }
};


// Genera un número aleatorio y devuelve una carta
const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevo_numero = cartaAleatoria();

    mostrarCarta(nuevo_numero);
    sumarPuntuacion(nuevo_numero);
    if (puntuacion > 7.5){
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
const plantarse = () => {
    let mensaje = "";
    gameOver();

    if (puntuacion === 7.5){
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    if (puntuacion === 6 || puntuacion === 7){
        mensaje = "Casi casi ...";
    }

    if (puntuacion === 5){
        mensaje = "Te ha entrado el canguelo eh?";
    }

    if (puntuacion <= 4){
        mensaje = "Has sido muy conservador";
    }

    if (mensaje_element) {
        mensaje_element.innerHTML = mensaje;
    }

    creaBotonNuevaPartida;
};


const creaNuevaPartida = () => {

    
    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = false;
        mePlantoBoton.disabled = false;
    }

    puntuacion = 0;
    muestraPuntuacion();
    muestraCartaPorDefecto();
};

// Gestionar click
const handle_click = (boton: string) => {
    switch (boton) {
        case "pedirCarta": {
            dameCarta();
            break;
        }
        case "mePlanto": {
            plantarse();
        }
    }
};

// Botón pedir carta
const pedirCartaBoton = document.getElementById("pedir_carta");
pedirCartaBoton?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
const mePlantoBoton = document.getElementById("me_planto");
mePlantoBoton?.addEventListener("click", () => handle_click("mePlanto"));