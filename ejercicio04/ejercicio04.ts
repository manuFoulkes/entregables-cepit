/** 
 * Implemente un algoritmo de
 * ordenamiento con el método Bubble
 * Sort, para que ordene un arreglo de
 * longitud N en orden descendente. 
 */

const LENGTH: number = 10;
const arr: number[] = new Array(LENGTH);

const getNumeroRandom = (): number => { 
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}

const llenarArray = (arr: number[]) => {
    for(let i = 0; i < LENGTH; i++) {
        arr[i] = getNumeroRandom();
    }
}

const cumpleCondicion = (arr: number[], i: number, j: number): boolean => {
    return arr[i] < arr[j];
}

const intercambiar = (arr: number[], i: number, j: number): void => {
    let aux: number = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}

const ordenarDescendente = (arr: number[]) => {
    for(let i = 2; i < LENGTH; i++) {
        for(let j = 0; j < (LENGTH - 1); j++) {
            if(cumpleCondicion(arr, j, j + 1)) {
                intercambiar(arr, j, j + 1);
            }
        }
    }
}

llenarArray(arr);
console.log("Arreglo antes de ser ordenado: ");
console.log(arr);
ordenarDescendente(arr);
console.log("Arreglo despues de ser ordenado: ");
console.log(arr);``

