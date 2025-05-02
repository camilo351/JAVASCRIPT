// EJERCICIO 1
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// };

//EJERCICIO 2
// for (let i = 10; i > 0; i--){
//     console.log(i);
// };

//EJERCICIO 3
// for (let i = 0; i <= 20; i += 2){
//     console.log(i);
// };

//EJERCICIO 4
// let suma = 0;
// for (let i = 1; i <= 5; i ++){
//     suma += i;
// };
// console.log(suma);

// EJERCICIO 5
// let numero = parseInt(prompt('Numero: '))
// for (let i = 1; i <= 10; i++){
//     let resultado = numero * i
//     console.log(`${numero} X ${i} = ${resultado}`);
// }

// EJERCICIO 6
// let suma = 0;
// for (let i = 0; i <= 20; i += 2){
//     suma += i;
// }
// console.log(suma);

//EJERCICIO 7
// let contador = 0;
// for (let i = 1; i <= 100; i ++){
//     if(i % 3 === 0){
//         contador ++;
//     }
// }
// console.log(contador);

//EJERCICIO 8
// let contador = 0;
// for (let i = 1; i <= 100; i++){
//     if(i % 5 === 0){
//         contador ++;
//     }
// }
// console.log(contador);

//EJERCICIO 9
// let contador = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 7 === 0){
//         contador ++;
//     }
// }
// console.log(contador);

//EJERCICIO 10
// let contador = 0;
// let numero = parseInt(prompt('Numero: '));
// for (let i = 1; i <= 100; i ++){
//     if (i % numero === 0){
//         contador ++;
//     }
// }
// console.log(contador);

//EJERCICIO 11
// let numeros = [];
// let numero = parseInt(prompt('Numero: '))
// for (let i = 1; i <= numero; i++){
//     if(numero % i === 0){
//         numeros.push(i)
//     }
// }
// console.log(numeros);

//EJERCICIO 12
// let numero = parseInt(prompt('Numero: '));
// let divisores = 0;
// for (let i = 1; i <= numero; i++){
//     if(numero % i === 0){
//         divisores ++
//     }
// }
// if (divisores === 2) {
//     console.log('El numero es primero');
// }else {
//     console.log('El numero no es primo');
// };

//EJERCICIO 13
// let num1 = 0;
// let num2 = 1;
// let veces = parseInt(prompt('Numero: '));
// console.log(num1);
// console.log(num2);
// for (let i = 3; i <= veces; i++){
//     let siguiente = num1+num2;
//     console.log(siguiente);
//     num1 = num2;
//     num2 = siguiente;
// };

//EJERCICIO 14
// let num1 = 0;
// let num2 = 1;
// console.log(num1);
// console.log(num2);
// for (let i = 3; i <= 100; i++){
//     let siguiente = num1 + num2;
//     if (siguiente < 100){
//         console.log(siguiente);
//         num1 = num2;
//         num2 = siguiente;}
// }

//EJERCICIO 15
// let numero = parseInt(prompt('Numero: '))
// let num1 = 0;
// let num2 = 1;
// let siguiente;
// let pertenece = false;

// for(let i = 0; i <= numero; i++){
//     siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
    
//     if(siguiente === numero || numero === 0 || numero === 1){
//         pertenece = true;
//         break;
//     }
//     if (siguiente > numero){
//         break;
//     }
// };

// if (pertenece){
//     console.log('El numero pertene a un numero de la serie fibonacci');
// }else{
//     console.log('No pertenece');
// }

// EJERCICIO 16
// let numero = parseInt(prompt('Número:'));
// let num1 = 0;
// let num2 = 1;
// let suma = 0;

// for (let i = 0; ; i++) {
//     if (num1 >= numero) {
//         break;
//     }

//     suma += num1;

//     let siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
// }

// console.log(`La suma de los números de Fibonacci menores a ${numero} es: ${suma}`);

// EJERCICIO 17
// let num1 = 0;
// let num2 = 1;
// let numero = parseInt(prompt('Numero: '));
// if (num2 <= numero){
//     console.log(num1);
//     console.log(num2);
// }
// for (let i = 0; i <= numero; i++){
//     let siguiente = num1 + num2;
//     if (siguiente <= numero){
//         num1 = num2;
//         num2 = siguiente;
//         console.log(siguiente);
//     }
// };

// EJERCICIO 18
// let num1 = 0;
// let num2 = 1;
// let numero = parseInt(prompt('Numero: '));
// let contador = 0;

// if (num1 <= numero){
//     contador ++
// };

// if (num2 <= numero){
//     contador ++
// };

// for(let i = 0; i < numero; i++){
//     let siguiente = num1 + num2;
//     if (siguiente < numero){
//         num1 = num2;
//         num2 = siguiente;
//         contador ++
//     };
// }

// console.log(contador);

// EJERCICIO 19
// let num1 = 0;
// let num2 = 1;
// let numero = parseInt(prompt('Numero: '));
// for (let i = 0; ; i ++){
//     if (num1 >= numero){
//         break;
//     };

//     if (num1 % 2 === 0) {
//         console.log (num1);
//     };

//     let siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
// };

// EJERCICIO 20
// let num1 = 0;
// let num2 = 1;
// let numero = parseInt(prompt('numero: '));
// let suma = 0;
// for (let i = 0; ; i ++){
//     if (num1 >= numero){
//         break;
//     };
//     if (num1 % 2 !== 0){
//         suma += num1;
//     };
//     let siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
// };
// console.log(suma);

// EJERCICIO 21
// let num3 = 0;
// let num4 = 1;
// let numero1 = parseInt(prompt('Numero: '));
// let suma = 0;
// let encontrado = false;
// for(let i = 0; suma <= numero1 ; i ++){
//     suma = num3 + num4;
//     if(suma === numero1) {
//         encontrado = true;
//         break;
//     }

//     let siguiente = num3 + num4;
//     num3 = num4;
//     num4 = siguiente;
// }

// if (encontrado){
//     console.log('El numero es la suma de dos numeros conseucutivos de la serie fibonacci');
// }else {
//     console.log('El numero no es la suma de dos numeros consecutivos de la serie fibonacci');
// };

//EJERCICIO 22
// let numero = parseInt(prompt('Numero: '))
// let num1 = 0;
// let num2 = 1;
// if (num2 <= numero){
//     console.log(num2);
// };
// for (; num1 < numero;){
//         if (num1 % 2 !== 0){
//             console.log(num1);
//         }
//         let siguiente = num1 + num2;
//         num1 = num2;
//         num2 = siguiente;
// }

//EJERCICIO 23
// let numero = parseInt(prompt('Numero: '));
// let num1 = 0;
// let num2 = 1;
// let encontro = 0;
// if (num1 === 0){
//     encontro ++
// }
// for (let i = 0; i <= numero; i++){
//     let siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
//     if (siguiente <= numero){
//         if (siguiente % 5 === 0 || siguiente % 5 === 5){
//             encontro ++
//         }
//     }
// };
// console.log(encontro);

// let numA = 0;
// let numB = 1;
// console.log (numA);
// console.log (numB);
// for (let i = 0; i <= 10; i ++){
//     siguienteD = numA + numB;
//     numA = numB;
//     numB = siguienteD;
//     console.log(siguienteD);
// }

//EJERCICIO 24
// let numero = parseInt(prompt('Numero: '));
// let num1 = 0;
// let num2 = 1;
// let num3 = 1;
// let suma = 0;
// let encontro = false;
// for(let i = 0; suma <= numero; i++){
//     suma = num1 + num2 + num3;
//     if (suma === numero){
//         encontro = true;
//     }

//     let siguiente = num2 + num3;
//     num2 = num3;
//     num3 = siguiente;
// };

// if (encontro){
//     console.log('El numero si es el resultado de una suma de 3 numeros seguidos del fibonacci');
// }else{
//     console.log('El numero no es el resultado de una suma de 3 numeros seguidos del fibonacci');
// };

//EJERCICIO 25
// let num1 = 0;
// let num2 = 1;
// let numero = parseInt(prompt('Numero: '));
// let suma = 0;
// for (let i = 0; i <= numero; i++){
//     let siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
//     if (siguiente <= numero){
//         if (siguiente % 2 === 0){
//             suma += siguiente
//         }
//     }
// }
// console.log(suma);

//EJERCICIO 26
// let num1 = 0;
// let num2 = 1;
// let fibonacci = [];
// fibonacci.push(num1);
// for (let i = 0; i <= 10; i++){
//     let siguiente = num1 + num2;
//     num1 = num2;
//     num2 = siguiente;
//     fibonacci.push(num1);
// }

// console.log(fibonacci);

//EJERCICIO 27
// for (let i = 1; i <= 10; i++){
//     console.log (i * i)
// };

// EJERCICIO 28
// for (let i = 1; i <= 50; i ++ ){
//     if (i % 3 === 0 && i % 5 === 0 || i % 5 === 5){
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0){
//         console.log('Fizz');
//     }
//     else if (i % 5 === 0 || i % 5 === 5){
//         console.log('Buzz');
//     }
//     else {
//         console.log(i)
//     }
// };

// EJERCICIO 29
// let numero = parseInt(prompt('Numero: '));
// for (let i = 1; i <= 10; i++){
//     let resultado = numero * i;
//     console.log(`${numero} X ${i} = ${resultado}`);
// };

// EJERCICIO 30
// for (let i = 1; i <= 100; i++){
//     if (i % 2 !== 0 || i % 7 === 0){
//         console.log(i)
//     }
// }

// EJERCICIO 31
// let contador = 0;

// for (let i = 1; i <= 1000; i++) {
//     let suma = 0;
//     let cadena = i.toString();

//     for (let j = 0; j < cadena.length; j++) {
//         suma += parseInt(cadena[j]);
//     }

//     if (suma === 10) {
//         contador++;
//     }
// }

// console.log("Cantidad de números cuya suma de dígitos es 10:", contador);

// EJERCICIO 32
// let Lineas = parseInt(prompt('Lineas: '));
// for (let i = 0; i <= Lineas; i++){
//     let fila = '';
//     for(let j = 0; j <= i; j++){
//         fila += '*'
//     }
//     console.log(fila);
// }

// EJERCICIO 33
// for (let i = 1; i <= 10; i++){
//     for (let j = 1; j <= 10; j++){
//         let resultado = i * j
//         console.log(`${i} X ${j} = ${resultado}`)
//     }
// };

// EJERCICIO 34
// let lista = parseInt(prompt('Lista: '));
// for (let i = lista; i >= 1; i --){
//     let fila = '';
//     for (let j = 1; j <= i; j ++){
//         fila += '*'
//     }
//     console.log(fila)
// }

// let filas = parseInt(prompt('Filas: '));
// for(let i = 1; i <= filas; i ++){
//     let lista = '';
//     for (let j = 1; j <= i; j++){
//         lista += j
//     }
//     console.log(lista);
// };

// EJERCICIO 35
// let filas = parseInt(prompt('Filas'));
// for (let i = 1; i <= filas; i ++){
//     let fila = '';
//     for (let j = 1; j <= i; j ++){
//         fila += (i * j) + '';
//     }
//     console.log(fila.trim())
// }