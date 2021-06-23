let fecha = '22-06-2021'
//console.log(fecha);

// boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

// console.log(miNumero, miNumero2, miNumero3, miBoolean)

let undef
/* console.log(undef); */

// Objeto
// Es una agrupacion de datos, estos datos hacen sentido entre sí

//ejemplo de objeto vacio
//const miPrimeroObjeto = {}

//objeto
const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}
//console.log(miObjeto.unaCondicion);

//Arreglos
const arrVacio = []
const arr = [1, 3, 'Hola', 'Mundo']
//console.log(arrVacio, arr)
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push('adios')
arrVacio.push(fecha)
//console.log(arrVacio);

const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3
const division = 9 / 3
//console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3
//console.log(modulo);

/* const num = 5
let incremento = num
incremento++
console.log(incremento); */

let num = 5
num++
num++
//console.log(num);

//operadores de asignacion
num += 5
num -= 5
num += 5
num /= 2
//console.log(num);

//operadores de comparación
const resultado1 = 5 === 6 //comparación estricta
const resultado2 = 5 == 5 //comparación no estricta
//console.log(resultado2);

const resultado3 = 5 < 6
const resultado4 = 5 < 5
//console.log(resultado3, resultado4);

//operadores lógicos
// or ||, and &&, not !

//Controles de flujo
// IF
const edad = 20
if (edad > 5 && edad < 18) {
    console.log('el niño puede jugar');
} else {
    console.log('Fuera de rango de edad');
}
// WHILE
// siempre evalua en verdadero la condición
let x = 0
while (x < 5) {
    console.log(x);
    x++
}
// SWITCH
let y = 3
switch (y) {
    case 1: {
        console.log('yo soy el caso 1');
        break;
    }
    case 2: {
        console.log('caso 2');
        break;
    }
    case 3:
        console.log('caso 3');
        break;
    default:
        console.log('por defecto');
        break;
}

// FOR
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('fin ciclo for');

//const numeros = [1, 2, 'Hola', 4, 5]
/* console.log(numeros[0]);
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
} */

// Funciones
function iterar(arg1) {
    for (let i = 0; i < arg1.length; i++) {
        console.log(arg1[i]);
    }
}
const numeros = [1, 2, 'Hola', 4, 5]
const nombres = ['Pedro', 'Juan', 'Felipe', 'Diego', 'Sofia']

iterar(numeros)
iterar(nombres)

function suma2(a,b){
    return a + b;
}
const resultadoSuma = suma2(1,2)
console.log('resultado de a + b:',resultadoSuma);


//funcion callback
function sumar1(a, b, cb){
    const r = a + b;
    cb(r)
}

function callback(result){
    console.log('resultado', result);
}
//sumar1(2, 3, callback)

// fat arow functions
const miFatArrowFunction = (a, b) => a + b //forma 1 de declarar una fat arrow function
const otraFAF = (a, b) => { //forma 2 de declarar una fat arrow function
    return a + b
}
const r = miFatArrowFunction(10,2)
console.log(r);