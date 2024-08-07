

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
const puntuacion_element = document.getElementById("puntuacion");
const contenedor_botones_element = document.getElementById("contenedor-botones");


const muestraCartaPorDefecto = () => {
    if (carta_img_element instanceof HTMLImageElement) {
        carta_img_element.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
    }
};

document.addEventListener("DOMContentLoaded", muestraCartaPorDefecto);


// Función mostrar puntuación
const muestraPuntuacion = () => {  
    if (puntuacion_element) {
        puntuacion_element.innerHTML =  "Puntuación: "+ puntuacion.toString();
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);


// Suma la puntuación de la carta
const sumarPuntuacion = (carta: number) => {
    let puntuacionCarta: number = 0;

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

let partidaAcabada: boolean = false;

const gameOver = () => {
    console.log("Entrando en game over");
    
    if (boton_pedir_carta instanceof HTMLButtonElement && boton_me_planto instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = true
        boton_pedir_carta.className = "disabled-button";
        
        boton_me_planto.disabled = true
        boton_me_planto.className = "disabled-button";
        creaBotonQueHabriaPasado();
        creaBotonNuevaPartida();
        partidaAcabada = true;
    };  
};


// Crea el botón nueva partida
const creaBotonNuevaPartida = () => {
    const nueva_partida_boton = document.createElement("button");

    nueva_partida_boton.innerText = "Nueva Partida";
    nueva_partida_boton.id = "boton-nueva-partida";
    nueva_partida_boton.className = "boton-nueva-partida";
    nueva_partida_boton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    contenedor_botones_element?.appendChild(nueva_partida_boton);
};


// Crea botón queHabriaPasado
const creaBotonQueHabriaPasado = () => {
    const que_habria_pasado_boton = document.createElement('button');

    que_habria_pasado_boton.innerText = "¿Qué habría pasado?";
    que_habria_pasado_boton.id = "boton-que-habria-pasado";
    que_habria_pasado_boton.className = "boton-que-habria-pasado";
    que_habria_pasado_boton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    contenedor_botones_element?.appendChild(que_habria_pasado_boton);
};

// Función para ver las siguientes cartas tras terminar la partida
const queHabriaPasado = () => {
    dameCarta();
}

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
            ruta_carta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
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
    console.log("Puntuación actual = ", puntuacion)
    console.log("la puntuación es mayor a 7.5", puntuacion>7.5)

    //  Mientras la partida siga en curso se ejectua gameOver
    if (puntuacion > 7.5 && !partidaAcabada) {
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
const plantarse = () => {
    gameOver();
    let mensaje = "";

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
    
};

// Crea una nueva partida
const creaNuevaPartida = () => {

    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (boton_pedir_carta instanceof HTMLButtonElement && boton_me_planto instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = false;
        boton_pedir_carta.className = "button";
        
        boton_me_planto.disabled = false;
        boton_me_planto.className = "button";
    }
    
    const boton_nueva_partida = document.getElementById("boton-nueva-partida");
    const boton_que_habria_pasasdo = document.getElementById("boton-que-habria-pasado");
    
    // Elimina los botones nueva partida y que habria pasado
    if (boton_nueva_partida instanceof HTMLElement && boton_que_habria_pasasdo instanceof HTMLElement) {
        boton_que_habria_pasasdo.remove();
        boton_nueva_partida.remove();
    }

    // Vacía el campo del mensaje
    if (mensaje_element instanceof HTMLDivElement){
        mensaje_element.innerHTML = "";
    }

    puntuacion = 0;
    muestraPuntuacion();
    muestraCartaPorDefecto();
    partidaAcabada = false;
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
            break;
        }
        case "queHabriaPasado": {
            queHabriaPasado();
            break;
        }
    }
};

// Botón pedir carta
const boton_pedir_carta = document.getElementById("pedir_carta");
boton_pedir_carta?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
const boton_me_planto = document.getElementById("me_planto");
boton_me_planto?.addEventListener("click", () => handle_click("mePlanto"));