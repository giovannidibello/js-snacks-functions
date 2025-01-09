/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali (stringa) {

    // inizializzo la variabile vocali
    let vocali = 0;
    
    // ciclo sulla stringa
    for (let i = 0; i < stringa.length; i++) {

        // prendo il carattere iesimo
        let carattere = stringa.charAt(i);   
        
        // se il carattere è una vocale
        if (["a", "e", "i", "o", "u"].includes(carattere)) {
            // conto la vocale
            vocali += 1;
        }
    }

    return vocali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log("Le vocali sono: ",contaVocali(word));
 

//Risultato atteso se si passa 'javascript': 3 (a, a, i)