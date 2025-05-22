//EJERCICIO 1
// let numero = 10;
// do {
//     let pedirNumero = parseInt(prompt('Numero: '));
// }while (pedirNumero != numero);
// console.log('Numero 10');

// EJERCICIO 2
// let contrasena = 'secreto123';
// let confirmarContrasena;
// do {
//         confirmarContrasena = prompt('Contraseña: ');
// }while (confirmarContrasena !== contrasena);
// console.log('Contraseña encontrado');

// EJERCICIO 3
// let letra = 'X';
// let pedirLetra;
// do {
//     pedirLetra = prompt('Letra: ');
// }while(pedirLetra.toUpperCase() != letra);
// console.log('Letra X');

// EJERCICIO 4
// let edad;
// const edades = [];
// do {
//     edad = parseInt(prompt('Edad: '));
//     if (edad > 0){
//         edades.push(edad);
//     }
// }while (edad > 0);
// console.log(edades);

// EJERCICIO 5
// let numero;
// let suma = 0;
// do {
//     numero = parseInt(prompt('Numero: '));
//     suma += numero;
// }while(numero !== 0);
// if (suma <= 0){
//     console.log('No se hizo una suma porque ingresaron el primer numero como 0');
// }else{
//     console.log(`El total de la suma es ${suma}`);
// };

// EJERCICIO 6
// let opcion;
// do {
//     opcion = prompt('Desea continuar');
// }while (opcion !== 'no');
// console.log('Gracias por usar este programa');

// EJERCICIO 7
// let palabra;
// do {
//     palabra = prompt ('Palabra: ');
//     if (palabra !== 'salir') {
//         let contador = 0;
//         for (let i = 0; i <= palabra.length; i ++){
//             let letra = palabra[i]
//             if (letra == 'a' ||letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//                 contador += 1;
//             };
//         }
//         console.log(`La palabra ${palabra} tiene ${contador} vocales`);
//     }

// }while(palabra !== 'salir');

// EJERCICIO 8
// let numero;
// let i = 1;
// do {
//     numero = parseInt(prompt('Numero: '));
//     if (numero > 0){
//         for (let i = 1; i <= 10; i++){
//         let operacion = numero * i;
//         console.log(`${numero} X ${i} = ${operacion}`);
//     }
// }
// }while (numero > 0);

// EJERCICIO 9
// let pin;
// do {
//     pin = parseInt(prompt('PIN: '));
//     if (pin == 1234){
//         console.log('Bienvenido');
//     }
// }while (pin !== 1234);

// EJERCICIO 10
// let letra; 
// do {
//     letra = prompt('letra').toLowerCase();
//     if (letra != '0'){
//         if (letra  == 'A' || letra  == 'E' || letra  == 'I' || letra  == 'O' || letra  == 'U'){
//             console.log(`La letra ${letra} es una vocal`);
//         }else {
//             console.log(`La letra ${letra} es una consonante`);
//         };
//     }
// }while (letra != '0');

// EJERCICIO 11
// let numero;
// do {
//     numero = prompt('numero: ');
//     if (numero != 'fin'){
//         if(numero % 2 == 0){
//             console.log(`el numero ${numero} es primo`);
//         }else{
//             console.log(`el numero ${numero} no es primo`)
//         };
//     }
// }while (numero != 'fin');

// EJERCICIO 12
// alert ('1. Carne \ 2. Pollo \ 3. Salir');
// let opcion;
// do {
//     opcion = prompt('Opcion: ');
//     if (opcion == 'salir'){
//         console.log('Gracias por usar nuestro menú');
//     }
// }while(opcion !== 'salir');

// EJERCICIO 13
// let numero;
// let contador1 = 0;
// let contador2 = 0;
// do {
//     numero = parseInt(prompt('Numero: '));
//     if (numero !== 0){
//         if (numero % 2 == 0){
//             contador1 ++;
//         }
//         else {
//             contador2 ++;
//         }
//     }
// }while (numero !== 0);
// console.log(`Hay ${contador1} numeros pares`);
// console.log(`Hay ${contador2} numeros impares`);

// EJERCICIO 14
// let num1;
// let num2;
// let operacion;
// do {
//     operacion = prompt('Operación: ');
//     if (operacion != 'n'){
//         num1 = parseInt(prompt('Numero: '));
//         num2 = parseInt(prompt('Numero: '));
//         if (operacion == '+'){
//             operacion = num1 + num2;
//             console.log(operacion);
//         }else if (operacion == '-'){
//             operacion = num1 - num2;
//             console.log(operacion);
//         }else if (operacion == 'x'){
//             operacion = num1 * num2;
//             console.log(operacion);
//         }else if (operacion == '/'){
//             if (num1 == 0 || num2 == 0){
//                 console.log('No se puede hacer una división por 0');
//             }else{
//                 operacion = num1 / num2;
//                 console.log(operacion);
//             }
//         }
//     }
// }while (operacion != 'n');

// EJERCICIO 15
// let nombre;
// do {
//     nombre = prompt('Nombre: ');
//     if(nombre != 'fin'){
//         console.log(`Hola ${nombre}`);
//     }
// }while(nombre != 'fin');

// EJERCICIO 16
// let numero;
// do {
//     numero = prompt('Numero: ');
//     if (numero != 'n'){
//         parseInt(numero)
//         if (numero > 0){
//             console.log('El numero es positivo');
//         }else if (numero < 0){
//             console.log('El numero es negativo');
//         }else {
//             console.log('El numero es 0')
//         }
//     }
// }while(numero != 'n');

// EJERCICIO 17
// let palabra;
// do {
//     palabra = prompt('Palabra: ');
//     if (palabra != 'stop'){
//         let contador = 1;
//         for (let i = 1; i < palabra.length; i++){
//             contador ++
//         }
//         console.log(`La palabra ${palabra} tiene ${contador} letras`);
//     }
// }while(palabra != 'stop');

// EJERCICIO 18
// let temperatura;
// do {
//     temperatura = parseFloat(prompt('Temperatura'));
//     if (temperatura != -100.0){
//         if (temperatura < 10){
//             console.log('Temperatura fria');
//         }else if (temperatura > 26){
//             console.log('Temperatura Caliente');
//         }else {
//             console.log('Temperatura ambiente');
//         }
//     }
// } while (temperatura != -100.0);

// EJERCICIO 19
// let contrasena;
// let contador = 1;
// do {
//     contrasena = prompt('Digita tu contraseña: ');
//     if (contrasena != 'camilo1234'){
//         console.log('contraseña incorrecta');
//         contador ++
//     }
//     else{
//         console.log('contraseña correcta');
//     }
// }while (contador <= 3);

// EJERCICIO 20
// let nombre;
// let edad;
// do {
//     nombre = prompt('Nombre: ').toUpperCase();
//     if (nombre != 'X'){
//         edad = parseInt(prompt('Edad: '));
//         if (edad >= 18){
//             console.log(`${nombre} tiene ${edad} años, es mayor de edad`);
//         }else{
//             console.log(`${nombre} tiene ${edad} años, es menor de edad`)
//         }
//     }
// }while(nombre != 'X');