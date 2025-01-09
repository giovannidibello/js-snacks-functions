/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function inizialiParole (nomiArray) {
    // creo un nuovo array
    const nomiIniziali = [];

    // ciclo sull'array dei nomi
    for (let i = 0; i < nomiArray.length; i++) {

        // prendo il nome iesimo
        let nome = nomiArray[i];

        // prendo l'iniziale del nome e la converto in maiuscolo
        let iniziale = nome.charAt(0).toUpperCase();

        // metto le iniziali nel nuovo array
        nomiIniziali.push(iniziale);

    }

    return nomiIniziali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(inizialiParole(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


