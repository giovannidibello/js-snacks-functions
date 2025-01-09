/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function creaSalutoOrario(stringa) {

    // ottengo la data e l'ora corrente
    const oggi = new Date();
    let ora = oggi.getHours();
    console.log("Sono le ore: ", ora);

    // ora = 18;

    if (ora <= 13) {
        return "Buongiorno " + stringa;
    } else if (ora <= 17) {
        return "Buon pomeriggio " + stringa;
    } else {
        return "Buonasera " + stringa;
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log( creaSalutoOrario(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.