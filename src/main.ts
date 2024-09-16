

let puntuacion = 0;
let carta = 0;

// Cartas del juego
// AS de copas
const asCopas = "1s-copas.jpg"

// 2 de copas
const dosCopas = "2os-copas.jpg"

// 3 de copas
const tresCopas = "3res-copas.jpg"

// 4 de copas
const cuatroCopas = "4Cuatro-copas.jpg"

// 5 de copas
const cincoCopas = "5Cinco-copas.jpg"

// 6 de copas
const seisCopas = "6eis-copas.jpg"

// 7 de copas
const sieteCopas = "7iete-copas.jpg"

// Sota de copas
const sotaCopas = "10ota-copas.jpg"

// Caballo de copas
const caballoCopas = "11Caballo-copas.jpg"

// Rey de copas
const reyCopas = "12ey-copas.jpg";

// CartaBocabajo
const cartaBocaAbajo = "back.jpg";

// Elemento imagen carta HTML
const cartaImgElement = document.getElementById("carta");

// Carpeta de imágenes
const cartasFolder = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/";


// Elementos HTML
const mensajeElement = document.getElementById("mensaje");
const tableroElement = document.getElementById("tablero");
const puntuacionElement = document.getElementById("puntuacion");
const contenedorBotonesElement = document.getElementById("contenedor-botones");


const muestraCartaPorDefecto = () => {
    if (cartaImgElement instanceof HTMLImageElement) {
        cartaImgElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + cartaBocaAbajo;
    }
};

document.addEventListener("DOMContentLoaded", muestraCartaPorDefecto);


// Función mostrar puntuación
const muestraPuntuacion = () => {  
    if (puntuacionElement) {
        puntuacionElement.innerHTML =  "Puntuación: "+ puntuacion.toString();
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
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = true
        botonPedirCarta.className = "disabled-button";
        
        botonMePlanto.disabled = true
        botonMePlanto.className = "disabled-button";
        creaBotonQueHabriaPasado();
        creaBotonNuevaPartida();
        partidaAcabada = true;
    };  
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
    const queHabriaPasadoBoton = document.createElement('button');

    queHabriaPasadoBoton.innerText = "¿Qué habría pasado?";
    queHabriaPasadoBoton.id = "boton-que-habria-pasado";
    queHabriaPasadoBoton.className = "boton-que-habria-pasado";
    queHabriaPasadoBoton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    contenedorBotonesElement?.appendChild(queHabriaPasadoBoton);
};

// Función para ver las siguientes cartas tras terminar la partida
const queHabriaPasado = () => {
    dameCarta();
}

// Muestra la carta actual
const mostrarCarta = (carta: number) : void => {
    let rutaCarta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            rutaCarta = cartasFolder + asCopas;
            break;
        }

        case 2: {
            rutaCarta = cartasFolder + dosCopas;
            break;
        }

        case 3: {
            rutaCarta = cartasFolder + tresCopas;
            break;
        }

        case 4: {
            rutaCarta = cartasFolder + cuatroCopas;
            break;
        }

        case 5: {
            rutaCarta = cartasFolder + cincoCopas;
            break;
        }

        case 6: {
            rutaCarta = cartasFolder + seisCopas;
            break;
        }

        case 7: {
            rutaCarta = cartasFolder + sieteCopas;
            break;
        }

        case 10: {
            rutaCarta = cartasFolder + sotaCopas;
            break;
        }

        case 11: {
            rutaCarta = cartasFolder + caballoCopas;
            break;
        }

        case 12: {
            rutaCarta = cartasFolder + reyCopas;
            break;
        }

        default: {
            rutaCarta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + cartaBocaAbajo;
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (cartaImgElement instanceof HTMLImageElement) {
            cartaImgElement.src = rutaCarta;
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
    let nuevoNumero = cartaAleatoria();

    mostrarCarta(nuevoNumero);
    sumarPuntuacion(nuevoNumero);

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

    if (mensajeElement) {
        mensajeElement.innerHTML = mensaje;
    }
};

// Crea una nueva partida
const creaNuevaPartida = () => {

    // Habilita y cambia de nuevo la clase a "button" a los botones Pedir carta y me planto
    if (botonPedirCarta instanceof HTMLButtonElement && botonMePlanto instanceof HTMLButtonElement) {
        botonPedirCarta.disabled = false;
        botonPedirCarta.className = "button";
        
        botonMePlanto.disabled = false;
        botonMePlanto.className = "button";
    }
    
    const botonNuevaPartida = document.getElementById("boton-nueva-partida");
    const botonQueHabriaPasasdo = document.getElementById("boton-que-habria-pasado");
    
    // Elimina los botones nueva partida y que habria pasado
    if (botonNuevaPartida instanceof HTMLElement && botonQueHabriaPasasdo instanceof HTMLElement) {
        botonQueHabriaPasasdo.remove();
        botonNuevaPartida.remove();
    }

    // Vacía el campo del mensaje
    if (mensajeElement instanceof HTMLDivElement){
        mensajeElement.innerHTML = "";
    }

    puntuacion = 0;
    muestraPuntuacion();
    muestraCartaPorDefecto();
    partidaAcabada = false;
};

// Gestionar click
const handleClick = (boton: string) => {
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
const botonPedirCarta = document.getElementById("pedirCarta");
botonPedirCarta?.addEventListener("click", () => handleClick("pedirCarta"));

// Botón mePlanto
const botonMePlanto = document.getElementById("mePlanto");
botonMePlanto?.addEventListener("click", () => handleClick("mePlanto"));