import * as rs from "readline-sync";

let cantParticipantes: number;
let sabor: number;
let presentacion: number;
let dificultad: number;

const pedirCantParticipantes = (): number => rs.questionInt(`Ingrese la cantidad de participantes: `);

const pedirPuntaje = (tipo: String, participante: number): number => {
    let puntaje: number = 0;
    while(puntaje < 1 || puntaje > 5) {
        puntaje = rs.questionInt(`Ingrese el puntaje entre 1 y 5 para ${tipo} de la torta del participante numero ${participante}: \n`);
    }
    return puntaje;
} 


const calcularPuntaje = (sabor: number, presentacion: number, dificultad: number): number => {
    return sabor + presentacion + dificultad;
}

const determinarGanador = (): void => {

    cantParticipantes = pedirCantParticipantes();
    let mayorPuntaje: number = 0;
    let ganador: number = -1;
    let empates: number = 0;

    for(let i = 0; i < cantParticipantes; i++) {
        sabor = pedirPuntaje("sabor", i + 1);
        presentacion = pedirPuntaje("presentacion", i + 1);
        dificultad = pedirPuntaje("dificultad", i + 1);

        const puntaje = calcularPuntaje(sabor, presentacion, dificultad);

        if(puntaje > mayorPuntaje) {
            mayorPuntaje = puntaje;
            ganador = i + 1;
            empates = 0;
        } else if(puntaje === mayorPuntaje) {
            empates++;
        }
    }

    if(ganador != -1 && empates > 0) {
        console.log(`Se registro ${empates} empate/s con un puntaje maximo de ${mayorPuntaje}`);
    } else if(ganador != -1) {
        console.log(`El ganador fue el participante numero ${ganador} con un puntaje de ${mayorPuntaje}.`);
    }
}

determinarGanador();