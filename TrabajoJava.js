

console.log('Hola Mundo'); //Imprimir en consola

console.log(Math.random());

let edad;
let age = 20;
let year = 2023;
let mensaje = 'Hoy es 01 de Marzo';
var mensaje2 = 'del';
let verdadero = true; 
let vacio = null;

console.log(mensaje + ' ' + mensaje2 + ' ' + year); 
console.log(age + age);

const moneda = 'COP';
const numeroColumnas = 4;

//Funciones normales en otros programas
function sumar (numero1, numero2){
    return numero1+numero2;
}

//Función anónima
const hola = function(){
    return 'Hola';
}

//Función de flecha, con paréntesis si recibe dos o más parámetros, o también se 
// deben usar los paréntesis si la función no recibe ningún parámetro
const sum = (numero1, numero2) => {
    return numero1 + numero2;
}

//Función de flecha, sin parénteis si solo recibe un parámetro
const multiplicarDos = numero =>{
    return numero * 2;
}

//Llamar las funciones
let resultado = sumar(3, 5);
console.log('El resultado de la suma es: ' + resultado);

let result = multiplicarDos(5);
console.log('El resultado de la multiplicación es: ' + result);

//Funciones
const holaMundo = () =>{
    return 'Hola mundo, está es una función sin parámetros';
}

console.log(holaMundo());

const saludarNombre = (nombrePersona) =>{
    return 'Hola' + ' ' + nombrePersona + ', ' + '¿cómo estás?';
}

let nombrePersona = saludarNombre('Martha');
console.log(nombrePersona)

const promedioNota = (notaUno, notaDos, notaTres, notaCuatro, notaCinco) =>{
    let calcularPromedio = (notaUno + notaDos + notaTres + notaCuatro + notaCinco) / 5
    return calcularPromedio;
}

let notaFinal = promedioNota(4.3, 2.5, 3.2, 2.4, 4.6);
console.log('La nota final de' + ' ' + 'estudiante es: ' + notaFinal);

//Array
let numero = [1,2,3,4,5,6];

//Ingresar un dato adicional al final del arreglo
numero.push(7);

//Saca el último elemento del arreglo
numero.pop();