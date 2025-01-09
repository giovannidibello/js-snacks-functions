/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
// imposto la lettera in una variabile
let lettera = "A";


// Dichiara la funzione qui.
function filtraStringhe (nomiArray, letteraDecisa) {
    // creo un nuovo array
    const nomiFiltrati = [];

    // ciclo sull'array dei nomi
    for (let i = 0; i < nomiArray.length; i++) {

        // prendo il nome iesimo
        let nome = nomiArray[i];

        if (nome.charAt(0) === letteraDecisa) {
            // metto il nome nel nuovo array
            nomiFiltrati.push(nome);
        }
    }

    return nomiFiltrati;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filtraStringhe(names,lettera));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]