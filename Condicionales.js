//EJERCICIO 1
// let numero = parseInt(prompt("Número: "));
// if (numero > 0) {
//     console.log("Su numero es positivo");
// }else if (numero < 0) {
//     console.log("Su numero es negativo");
// }else {
//     console.log("Se numero es cero")
// };

//EJERCICIO 2
// let num1 = parseInt(prompt("numero1: "));
// let num2 = parseInt(prompt("numero2: "));
// if (num1 > num2) {
//     console.log ("numero 1 es mayor");
// }else if (num1 < num2) {
//     console.log ("numero 2 es mayor");
// }else {
//     console.log("los numeros son iguales");
// };

//EJERCICIO 3
// let numero = parseInt(prompt("numero1: "));
// if (numero % 5 == 0){
//     console.log(numero + " es divisible por 5");
// }else {
//     console.log(numero + " no es divisible por 5");
// };

//EJERCICIO 4
// let contraseña = "Camilo1234";
// let verificarContraseña = prompt("Digite la contraseña: ");
// if (contraseña == verificarContraseña){
//     console.log("Contraseña correcta");
// }else {
//     console.log("Contraseña incorrecta");
// };

//EJERCICIO 5
// let edad = parseInt(prompt("edad: "))
// if (edad >= 18){
//     console.log("Es mayor de edad");
// }else {
//     console.log("Es menor de edad")
// };

//EJERCICIO 6
// let num1 = parseInt(prompt("Numero 1: "));
// let num2 = parseInt(prompt("Numero 2: "));
// let num3 = parseInt(prompt("Numero 3: "));
// if (num1 > num2 || num1 > num3){
//     console.log(num1, "es mayor")
// } else if (num2 > num3 || num2 > num1) {
//     console.log(num2, "es mayor")
// }else if (num3 > num2 || num3 > num1) {
//     console.log(num3, "es mayor")
// }else {
//     console.log("todos los numeros son iguales")
// };

//EJERCICIO 7
// numero = parseInt(prompt("numero"));
// if (numero % 2 == 0){
//     console.log("numero par")
// }else {
//     console.log("numero impar")
// };

//EJERCICIO 8
// alert("Su calificacion debe de estar entre 1.0 al 10.0");
// let calificacion = parseFloat(prompt("numero: "));
// if (calificacion >= 5.0){
//     console.log("aprobado")
// }else if (calificacion <= 5.0){
//     console.log("reprobado")
// };

//EJERCICIO 9
// let dia = prompt('Dia: ')
// if (dia == 'lunes' || dia == 'martes' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes') {
//     console.log('Es dia laboral');
// }else {
//     console.log('Es fin de semana');
// };

//EJERCICIO 10
// let mes = parseInt(prompt('mes en numero: '));
// if (mes === 1){
//     console.log('Enero');
// }else if (mes === 2) {
//     console.log('Febrero');
// }else if (mes === 3) {
//     console.log('Marzo'); 
// }else if (mes === 4) {
//     console.log('Abril'); 
// }else if (mes === 5) {
//     console.log('Mayo'); 
// }else if (mes === 6) {
//     console.log('Junio'); 
// }else if (mes === 7) {
//     console.log('Julio'); 
// }else if (mes === 8) {
//     console.log('Agosto'); 
// }else if (mes === 9) {
//     console.log('Septiembre'); 
// }else if (mes === 10) {
//     console.log('Octubre'); 
// }else if (mes === 11) {
//     console.log('Noviembre'); 
// }else if (mes === 12) {
//     console.log('Diciembre'); 
// };

// EJERCICIO 11
// let anio = parseInt(prompt('Año: '));
// if (anio % 4 === 0 || (anio % 400 === 0 && anio % 100 !== 0))  {
//     console.log ('El año es bisiesto')
// }
// else {
//     console.log('El año no es bisiesto')
// };

//EJERCICIO 12
// let estado = false;
// let lampara = prompt('Quiere prender o apagar la lampara: ');
// if (estado == false){
//     if (lampara == 'encender') {
//         console.log('La lampara se encendio');
//         estado = true;
//     }else {
//         console.log('la lampara ya esta apagada')
//     }
// }else if (estado == true) {
//     if (lampara == 'apagar'){
//         console.log('La lampara se apago');
//         estado = false;
//     }else {
//         console.log ('La lampara ya esta encendida')
//     }
// };

//EJERCICIO 13
// let numero = parseInt(prompt('Numero: '))
// if (numero >= 1 && numero <= 50) {
//     console.log('El numero esta entre 50')
// }else if (numero === 0){
//     console.log ('El numero es 0')
// }else {
//     console.log(' El numero es mayor de 50')
// };

//EJERCICIO 14
// let letra = prompt('Letra: ')
// if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
//     console.log('La letra es una vocal')
// }else {
//     console.log('La letra es Consonante')
// };

//EJERCICIO 15
// let temperatura = parseInt(prompt('temperatura: '));
// if (temperatura >= 27) {
//     console.log('caluroso')
// }else if (temperatura <= 10){
//     console.log('Frio')
// }else {
//     console.log ('Templado')
// };

//EJERCICIO 16
// let lado1 = parseInt(prompt('Lado 1: '));
// let lado2 = parseInt(prompt('Lado 2: '));
// let lado3 = parseInt(prompt('Lado 3: '));
// if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
//     console.log('Es un triangulo equilatero')
// }else if (lado1 !== lado2 && lado1 !== lado3 && lado3 !== lado2){
//     console.log('Es un triangulo escaleno')
// }else {
//     console.log('Es un triangulo isósceles')
// }

//EJERCICIO 17
// let saldo = parseInt(prompt('Dinero: '))
// if (saldo >= 100000){
//     console.log('puedes comprar un producto que custa 100000')
// }else {
//     console.log ('no puedes comprar un producto que cuesta 100000')
// };

// EJERCICIO 18
// let num1 = parseInt(prompt('Numero1: '));
// let num2 = parseInt(prompt('Numero2: '));
// let operacion = prompt('Que operacion quieres hacer: ');
// if (operacion == '+') {
//     console.log(num1+num2)
// }else if (operacion == '-'){
//     console.log(num1-num2)
// }else if (operacion == '*'){
//     console.log(num1*num2)
// }else if (operacion == '/'){
//     if (num1 === 0  || num2 === 0){
//         console.log('No puedes hacer una division por 0')
//     }
//     else {
//         console.log (num1 / num2)
//     }
// }

// EJERCICIO 19
// let edad = parseInt(prompt('Edad: '));
// if (edad < 12){
//     console.log ('Es un niño')
// }else if (edad >= 12 && edad <= 18){
//     console.log('Es un adolescente')
// }else if (edad > 18 && edad <= 40){
//     console.log ('Es un adulto')
// }else {
//     console.log ('Es un anciano')
// };

// EJERCICIO 20
// let salir = prompt('Quieres salir del programa?');
// if (salir == 'si'){
//     console.log ('Adios')
// }else {
//     console.log ('Sigamos')
// };

// EJERCICIO 21
// let num1 = parseInt(prompt('Numero1: '));
// let num2 = parseInt(prompt('Numero2: '));
// let operacion = parseInt(prompt('Qué operacion deseas hacer: '));
// switch (operacion){
//     case 1:
//         console.log(num1 + num2);
//         break;
//     case 2:
//         console.log(num1 - num2);
//         break;
//     case 3:
//         console.log(num1 * num2);
//         break;
//     case 4:
//         if (num1 == 0 || num2 == 0){
//             console.log('No se puede hacer division por 0');
//         }
//         else {
//             console.log (num1 / num2)
//         };
//         break;
//     default:
//         console.log ('Operacion invalida');
// };

//EJERCICIO 22
// let numeroDia = parseInt(prompt('Numero Dia semana'));
// let diaSemana;
// switch (numeroDia){
//     case 1:
//         diaSemana = 'Lunes';
//         break;
//     case 2:
//         diaSemana = 'Martes';
//         break;
//     case 3:
//         diaSemana = 'Miercoles';
//         break;
//     case 4:
//         diaSemana = 'Jueves';
//         break;
//     case 5:
//         diaSemana = 'Viernes';
//         break;
//     case 6:
//         diaSemana = 'Sabado';
//         break;
//     case 7:
//         diaSemana = 'Domingo';
//         break;
//     default:
//         console.log('El dia no existe');
// }
// console.log(diaSemana);

//EJERCICIO 23
// let edad = parseInt(prompt('Edad: '));
// let grupo;
// if (edad == 0) {
//     grupo = 'cero';
// } else if (edad <= 14){
//     grupo = 'infantil';
// } else if (edad >= 15 && edad <= 26){
//     grupo = 'Adolecentes';
// } else{
//     grupo = 'Adulto';
// };
// switch (grupo){
//     case 'infantil':
//         console.log('peliculas infantiles');
//         break;
//     case 'Adolecentes':
//         console.log('Peliculas adolecentes');
//         break;
//     case 'Adulto':
//         console.log('Peliculas de adultos');
//         break;
//     case 'cero':
//         console.log('No puedes tener 0 años');
//         break;
//     default:
//         console.log('ERROR');
// };

// EJERCICIO 24
// let conversion = prompt('De Celsius a Fahrenheit o de Fahrenheit a Celsius: ');
// let grados = parseInt(prompt('Grados: '))
// switch (conversion){
//     case 'Celsius':
//         console.log((grados * 1.8) + 32);
//         break;
//     case 'Fahrenheit':
//         console.log((grados - 32) * 5/9);
//         break;
//     default:
//         console.log('No existe esa conversión');
// };

// EJERCICIO 25
// let nota = parseInt(prompt('Nota: '));
// let estado;
// if (nota < 5) {
//     estado = 'bajo';
// }else if (nota >= 5 && nota <= 7){
//     estado = 'Regular';
// }else if (nota >= 8 && nota <= 9){
//     estado = 'bueno';
// }else{
//     estado = 'Excelente';
// };
// switch (estado){
//     case 'bajo':
//         console.log('Reprobado');
//         break;
//     case 'Regular':
//         console.log('Regular');
//         break;
//     case 'bueno':
//         console.log('Bueno');
//         break;
//     case 'Excelente':
//         console.log('Excelente');
//         break;
// };
