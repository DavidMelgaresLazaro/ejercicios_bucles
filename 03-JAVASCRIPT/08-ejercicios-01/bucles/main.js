// Bucle 1

for(i = 3; i<= 30; i=i+3){
    console.log(i);
}

//Bucle 2

for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}

//Bucle 3

for (let i = 1; i<=20;i++){
    if(i % 2 === 0){
        console.log(`${i} es par`);
    }
    else{
        console.log(`${i} es impar`);
    }
}


//Bucle 4

// Pedimos al usuario que ingrese una frase
const frase = prompt("Por favor, introduce una frase:");

// Inicializamos el contador para la letra "a"
let contadorA = 0;

// Bucle for...of para recorrer cada carácter de la frase
for (let letra of frase) {
    if (letra.toLowerCase() === 'a') {
        contadorA++;
    }
}

// Imprimimos el número total de letras "a"
console.log(`La frase tiene ${contadorA} letras "a".`);


//Bucle 5


// Bucle para recorrer los números del 1 al 50
for (let i = 1; i <= 50; i++) {
    // Si el número es múltiplo de 3 y 5, imprime "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Si el número es múltiplo de 3, imprime "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Si el número es múltiplo de 5, imprime "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Si no es múltiplo de ninguno, imprime el número
    else {
        console.log(i);
    }
}
