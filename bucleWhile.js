// EJERCICIO 1
// let suma = 0;
// while(true){
//     let numero = parseInt(prompt('Numero: '));
//     if (numero !== 0){
//         suma = suma + numero
//     }
//     else if (numero === 0) {
//         console.log(suma);
//         break;
//     }
// };

// EJERCICIO 2
// let contador = 0
// while (contador <= 3){
//     let contraseña = prompt('Contraseña: ');
//     if (contraseña === '1234'){
//         console.log('contraseña correcta');
//         break;
//     };
//     contador ++
//     if (contador === 3){
//         console.log('Intentelo más tarde');
//         break;
//     } 
// }

// EJERCICIO 3
// let numero = 1;
// while (numero <= 10){
//     console.log(numero);
//     numero ++
// };

// EJERCICIO 4
// let numero = 0
// while (numero <= 20){
//     if (numero % 2 === 0){
//         console.log(numero);
//     }
//     numero ++
// }

// EJERCICIO 5
// let numero = parseInt(prompt('Numero: '));
// let i = 1;
// while(i <= 10){
//     let total = numero * i;
//     console.log(`${numero} x ${i} = ${total}`);
//     i ++
// };

// EJERCICIO 6
// let contador = 1;
// let promedio = 0; 
// while (contador <= 5){
//     let numero = parseInt(prompt('Numero: '));
//     numero += numero;
//     promedio = numero / 5;
//     contador ++
//     if(contador === 5){
//         console.log(promedio)
//     }
// }

// EJERCICIO 7
// let numero = parseInt(prompt('Numero: '));
// while (true){
//     let cadena = numero.toString();
//     console.log(cadena.length)
//     break;
// }

// EJERCICIO 8
// let divisores = 0;
// while (true){
//     let numero = parseInt(prompt('Numero: '));
//     let divisores = 0;
//     for (let i = 0; i <= numero; i++){
//         if (numero % i === 0){
//             divisores ++
//         }
//     }
//     if (divisores === 2){
//         console.log('Numero primo');
//         break;
//     }
//     else {
//         console.log('Numero no primo');
//     }
// };

// EJERCICIO 9
// let num1 = 0;
// let num2 = 1;
// let i = 0;
// console.log(num1);
// console.log(num2);
// while (true){
//     let siguiente = num1 + num2;
//     console.log(siguiente);
//     num1 = num2;
//     num2 = siguiente;
//     i ++
//     if (i === 8){
//         break;
//     }
// }

// EJERCICIO 10
// while (true){
//     let letra = prompt('Letra');
//     if (letra === 'x' || letra === 'X'){
//         break;
//     }
// };

// EJERCICIO 11
// let numeroPositivos = [];
// while (true){
//     let numero = parseInt(prompt('Numero: '));
//     if (numero > 0){
//         numeroPositivos.push(numero);
//     }
//     else if (numero < 0){
//         break;
//     }
// }
// console.log(numeroPositivos);

// EJERCICIO 12
// let numero = parseInt(prompt('Numero: '));
// let factorial = 1;
// let i = 1
// while (i <= numero){
//     factorial *= i;
//     i ++
// };
// console.log(factorial);

// EJERCICIO 13
// let palabra = prompt('Palabra: ');
// let i = 0;
// while (i <= palabra.length){
//     console.log(palabra[i]);
//     i ++
// };

// EJERCICIO 14
// let numeroSecreto = 2;
// while (true){
//     let numero = parseInt(prompt('Numero: '));
//     if (numero === numeroSecreto){
//         console.log('Numero secreto encontrado');
//         break;
//     }
// };

// EJERCICIO 15
// let frase = prompt('Frase: ');
// frase = frase.toLowerCase();
// let contador = 0;
// for (let i = 0; i <= frase.length; i++){
//     let letra = frase[i];
//     if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//         contador ++
//     };
// }
// console.log(contador);

// EJERCICIO 16
// while (true){
//     let operacion = prompt ('¿Qué operación desea realizar?: ');
//     let resultado = 0
//     if (operacion == '+'){
//         let num1 = parseInt(prompt('Numero1: '));
//         let num2 = parseInt(prompt('Numero2:'));
//         resultado = num1 + num2;
//         console.log(resultado);
//     }
//     else if (operacion == '-'){
//         let num1 = parseInt(prompt('Numero1: '));
//         let num2 = parseInt(prompt('Numero2:'));
//         resultado = num1 - num2;
//         console.log(resultado);
//     }
//     else if (operacion == '*'){
//         let num1 = parseInt(prompt('Numero1: '));
//         let num2 = parseInt(prompt('Numero2:'));
//         resultado = num1 * num2;
//         console.log(resultado);
//     }
//     else if (operacion == '/'){
//         if (num1 == 0 || num2 == 0){
//             console.log('No se puede dividir ')
//         }
//         else {
//             let num1 = parseInt(prompt('Numero1: '));
//             let num2 = parseInt(prompt('Numero2:'));
//             resultado = num1 / num2;
//             console.log(resultado);
//         }
//     }
//     else{
//         console.log('Gracias por usar la calculadora');
//         break;
//     }
// };

// EJERCICIO 17
// let numero = prompt('Numero: ');
// let suma = 0;
// for (let i = 0; i < numero.length; i++){
//     suma += parseInt(numero[i]);
// }
// console.log(suma);

// EJERCICIO 18
// while (true){
//     let palabra = prompt('Palabra: ');
//     if (palabra.length >= 10){
//         console.log('Palabra con más de 10 palabras');
//         break;
//     }
// };

// EJERCICIO 19
// let contador = 1;
// while (contador <= 3){
//     let pregunta = prompt ('¿Quieres Seguir?');
//     contador ++
// };

// EJERCICIO 20
// let numero = parseInt(prompt('Numero: '));
// while (true){
//     for (let i = 1; i <= numero; i++){
//         if (i % 3 === 0){
//             console.log(i)
//         }
//     }
//     break;
// };