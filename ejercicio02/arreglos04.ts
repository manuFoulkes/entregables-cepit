/*
    Sumar Dos Arreglos

    • Sumar los elementos de cada una de las posiciones
    de dos arreglos y guardar el resultado en otro arreglo
    • El arreglo tiene dimensión 6 y los números de los dos
    vectores los carga el usuario
*/

import * as rs from "readline-sync";

const LONG: number = 6;

const arr1: number[] = new Array(LONG);
const arr2: number[] = new Array(LONG);
const arr3: number[] = new Array(LONG);

const pedirNumero = (): number => {
    let numero = 0;

    while(numero <= 0) {
        numero = rs.questionInt(`Ingrese un numero positivo para llenar el arreglo`);

        if(numero <= 0) {
            console.log(`Debe ingresar un numero positivo, intentelo nuevamente...`);
        }
    }

    return numero;
}

const llenarArray = (arr: number[]): void => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = pedirNumero();
    }
}

const sumarArrays = (): void => {
    for(let i = 0; i < LONG; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
}

const mostrarResultado = (): void => {
    console.log(`Primer arreglo: [${arr1}]`);
    console.log(`Segundo arreglo: [${arr2}]`);
    console.log(`Tercer arreglo con la suma: [${arr3}]`);
}

llenarArray(arr1);
llenarArray(arr2);
sumarArrays();
mostrarResultado();