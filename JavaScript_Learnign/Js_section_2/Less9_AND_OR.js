/** In JS data un'operazione di OR || ad es. A || B
 * se 'A' è true non si esamina 'B'
 * Mentre in AND && ad es A && B
 * se 'A' è false ritorna A perché è inutile analizzare B
 *
 * Nella funzione @fizzBuzz possiamo vedere la logica dietro OR
 * se la stringa @output: è assegnata ritorna la stringa altrimenti la variabile @i*/


(function fizzBuzz(value) {
    for (let i = 1; i <= value; i++) {
        let output = "";
        if ((i % 3) === 0) {
            output += "FIZZ"
        }
        if ((i % 5) === 0) {
            output += "BUZZ"
        }
        console.log(output || i);
    }
})(50);

/** Possiamo sfruttare il linguaggio per l'assegnazione delle variabili
 * oppure per evitare di avere errori nel chiamare le funzioni e le variabili
 */


let obj = {
    doSomething: function (a = 0, b = 8) {
        a = a || 0 //controllo sulla variabile
        console.log()
        console.log(a + b);
    }
}
//Controllo sulla funzione se la funzione senza () non esiste significa che non è dichirate e quidni si evita in questo modo di ottenre un errore dall'interprete
obj.doSomething && obj.doSomething(9)