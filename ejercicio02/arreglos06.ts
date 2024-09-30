/*
    Tipos de Números en Arreglo

    • Almacene en un arreglo de dimensión N números (la
    cantidad es ingresada por el usuario)
    • Muestre cuántos números son positivos, cuántos son
    negativos y cuántos ceros hay
*/

import * as rs from "readline-sync";

const pedirNumero = (): number => rs.questionInt(`Ingrese un numero positivo o negativo o un cero para llenar el arreglo: `);

const pedirLongitud = (): number => {
    let longitud = 0;

    while(longitud <= 0 || longitud > 15) {
        longitud = rs.questionInt(`Ingrese un numero entre 1 y 15 para la longitud del arreglo: `);

        if(longitud <= 0 || longitud > 15) {
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

const chequearNumeros = (): void => {
    const longitud: number = pedirLongitud();
    const arr: number[] = new Array(longitud);

    let cantCeros: number = 0;
    let cantNegativos: number = 0;
    let cantPostivos: number = 0;

    llenarArray(arr);

    arr.forEach(n => {
        if(n === 0) {
            cantCeros++;
        }

        if(n < 0) {
            cantNegativos++;
        }

        if(n > 0) {
            cantPostivos++;
        }
    })

    console.log(`Arreglo ingresado: [${arr}]`)
    console.log(`Contiene ${cantCeros} numero/s 0, ${cantNegativos} numero/s negativos y ${cantPostivos} numero/s positivos`);
}

chequearNumeros();