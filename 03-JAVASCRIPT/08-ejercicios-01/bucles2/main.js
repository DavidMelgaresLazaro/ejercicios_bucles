//Bucle 5

let numero;

// Bucle que se ejecuta hasta que el usuario ingrese un número válido
do {
    // Solicita al usuario que introduzca un número
    numero = parseInt(prompt("Introduce un número entre 50 y 100:"));
    
    // Verifica si el número no está en el rango y alerta si es inválido
    if (numero < 50 || numero > 100 || isNaN(numero)) {
        alert("Número inválido. Debes introducir un número entre 50 y 100.");
    }
} while (numero < 50 || numero > 100 || isNaN(numero));

// Mensaje cuando se introduce un número válido
alert(`Has introducido el número correcto: ${numero}`);



//Ejercicio 10


const readline = require('readline');

// Creamos la interfaz para la entrada y salida en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generamos un número secreto aleatorio entre 1 y 100
const numeroSecreto = Math.floor((Math.random() * 100) + 1);

// Número máximo de intentos
let intentos = 6;

// Función para pedir el número al usuario y verificar si es correcto
function jugar() {
    rl.question('Adivina el número secreto (entre 1 y 100): ', (respuesta) => {
        const numero = parseInt(respuesta);

        if (numero === numeroSecreto) {
            console.log(`¡Felicidades! Has adivinado el número secreto: ${numeroSecreto}`);
            rl.close();
        } else {
            intentos--;

            if (intentos === 0) {
                console.log(`Lo siento, has agotado todos tus intentos. El número secreto era: ${numeroSecreto}`);
                rl.close();
            } else {
                if (numero < numeroSecreto) {
                    console.log(`El número secreto es mayor que ${numero}. Te quedan ${intentos} intentos.`);
                } else {
                    console.log(`El número secreto es menor que ${numero}. Te quedan ${intentos} intentos.`);
                }

                jugar(); // Volvemos a pedir el número si no se ha adivinado
            }
        }
    });
}

// Iniciamos el juego
jugar();
