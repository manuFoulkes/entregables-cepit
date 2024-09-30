/*
    Invertir Arreglo

    • Almacene en un arreglo de tamaño N los números ingresados
    por el usuario
    • La dimensión N también es ingresada por el usuario
    • Muestre los números del arreglo pero del último al primero
*/

import * as rs from "readline-sync";

const pedirNumero = (): number => {
    let numero = 0;

    while(numero <= 0) {
        numero = rs.questionInt(`Ingrese un numero positivo para llenar el arreglo: `);

        if(numero <= 0) {
            console.log(`Debe ingresar un numero positivo, intentelo nuevamente...`);
        }
    }

    return numero;
}

const pedirLongitud = (): number => {
    let longitud = 0;

    while(longitud <= 0 || longitud > 10) {
        longitud = rs.questionInt(`Ingrese un numero entre 1 y 10 para la longitud del arreglo`);

        if(longitud <= 0 || longitud > 10) {
            console.log(`Longitud invalida, intente nuevamente...`);
        }
    }

    return longitud;
}

const llenarArray = (arr: number[]): void => {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = pedirNumero();
    }
}

const invertirArray = (): void => {
    const longitud = pedirLongitud();
    const arr: number[] = new Array(longitud);

    llenarArray(arr);

    console.log(`Arreglo antes de ser invertido: [${arr}]`)

    for(let i = 0, j = longitud - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    console.log(`Arreglo luego de ser invertido: [${arr}]`);
}

invertirArray();