/*
    completar la funcion "howManyTextInPara()" para que devuelva la 
    cantidad de veces que searchTerm aparece dentro de fullText
*/

import * as rs from "readline-sync";

const paragraph: string =
  "Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.";

function getSearchTerm(): string {
    let term: string = "";

    while(term === "") {
        term = rs.question(`Enter a term to look for: `).trim();
        if(term == "") {
            console.log(`The saerch term cannot be empty, try again...`)
        }
    }
    return term;
}

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
  return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

// Devuelve el texto convertido en array de palabras y sin los signos de puntacion usando split + la regex "/\W+/" 
function textToArray(text: string) {
    return text.toLowerCase().split(/\W+/);
}

function howManyTextInPara(fullText: string, searchTerm: string): void {
    if(!isTextInPara(fullText, searchTerm)) { 
        console.log(`The searched term "${searchTerm}" is not found in the text`);
        return;
    }
    
    const textArray: string[] = textToArray(fullText);
    let wordCount: number = 0;

    textArray.forEach(word => {
        if(word === searchTerm) {
            wordCount++;
        }
    })

    console.log(`The searched term ${searchTerm} was found "${wordCount}" times in the text.`);
}

const searchTerm: string = getSearchTerm();

howManyTextInPara(paragraph, searchTerm);