/*  
    2) Dado un array con nombres de tamaño 5, pedir
    al usuario que ingrese un nombre y verificar si está
    en el arreglo. Imprimir el arreglo y si está o no en
    él. 
*/

import * as rs from "readline-sync";

const arrNombres: string[] = ["Juan", "Gonzalo", "Matias", "Luisina", "Martina"];

const mostrarArray = (arr: string[]): void => {
    console.log(`Arreglo de nombres: ${arr}`);
}

const solicitarNombre = (): string => {
    let nombre: string = "";

    while(nombre.trim() === "") {
        nombre = rs.question("Ingrese un nombre a buscar: ");

        if(nombre.trim() === "") {
            console.log("El nombre no puede estar vacio, intentelo nuevamente");
        }
    }

    return nombre;
}

const buscarNombre = (): void => {
    const nombreABuscar: string = solicitarNombre();
    let nombreEncontrado: boolean = false;

    arrNombres.forEach(nombre => {
        if(nombre.toLowerCase() === nombreABuscar.toLowerCase()) {
            nombreEncontrado = true;
        }
    })

    if(nombreEncontrado) {
        console.log(`El nombre ${nombreABuscar} se encuentra en el arreglo`);
    } else {
        console.log(`El nombre ${nombreABuscar} no se encuentra en el arreglo`);
    }

    mostrarArray(arrNombres);
}

buscarNombre();