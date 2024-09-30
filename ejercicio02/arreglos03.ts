/*
    Encontrar el elemento más grande del arreglo

    Dado el siguiente arreglo: 

    [4,7,9,3,1,45,67,23,29,78,11,16]

    - Crear un programa que encuentre cuál es el número
    más grande del arreglo e imprimirlo por consola
    - Almacenar el número más grande en una variable
    global y pasarlo a una función para determinar si el
    número es par o impar
*/

const arrNumeros: number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
let numeroMayor: number;

const mayorEsPar = (numero: number): boolean => numero % 2 === 0;

const determinarNumMayor = (): void => {
    let mayor: number = 0;

    arrNumeros.forEach( n => {
        if(n > mayor) {
            mayor = n;
        }
    })

    numeroMayor = mayor;

    if(mayorEsPar(numeroMayor)) {
        console.log(`${numeroMayor} es el numero mayor del arreglo [${arrNumeros}] y es un numero par`);
    } else {
        console.log(`${numeroMayor} es el numero mayor del arreglo [${arrNumeros}] y es un numero impar`);
    }
}

determinarNumMayor();