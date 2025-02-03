let nomi = ['sandro', 'raimondo']

function saluta(a, b) {
    console.log(` ciao ${a}, ciao anche a te ${b}`);
}

/** sostanzialmente tramite lo spreed operator si vanno ad iterare singolaremnte i valori dell'array e ad assegnarli
 * ai parametri della funzione.
 * Quindi: @a: sandro     @b: raimondo */
saluta(...nomi);

/** Applichiamolo nella funzione max*/
var numb = [2, 543, 21, 5, 574321, 3417, 65438, 53412, 3412, 35356, 87, 34252, 143]
console.log(Math.max(...numb))


/** Combiniamo lo spreaad operatori con il psaaggio delle variabili arbitrarie in una funzione */
function salutaTwo(...a) {
    let str = "";
    for (let i = 0; i < a.length; i++) {
        str += `Ciao ${a[i]}, `
    }
    console.log(str);
}

salutaTwo(...nomi);

/** Combinazione delle stringhe */

let num1 = [12, 13, 14, 15];
let num2 = [16, 17, 18, 19];
let all = [...num1, ...num2]
console.log(all)

/** Utilizzo negli oggetti
 * Importare le key del primo nel secondo */

let objOne = {
    type: "One",
    color: "Red"
}

let objTwo = {
    ...objOne,
    long: 125
}

console.log(`Posso accedere dal secondo oggetto al valore del primo ->  ${objTwo.color}`);