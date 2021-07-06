let name = "dagg"
let play = ["same", "Jon", name, true]; //possiamo inserire qualsiasi tipo di dato negli array non essendo tipizzato


console.log(play.length);
console.log(play[play.length - 1]);

/*Remove last and first*/
play.pop()
console.log(play);

play.shift()
console.log(play);

/* adding in queue a multi value subarray*/
play.push([32, "abc", false])
console.log(play);
console.log(play[play.length - 1][1])


/** DESTRUCTURING */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let [a, b, c, d, e, f, g, h, i] = arr
console.log(e)
console.log(f)

/************************************************ Functional methods *******************************************/


/**
 * MAP - Funzione che crea una copa dell'array originale alla quale possimo passare dei parametri e svolgere delle operazioni
 *
 * Tramite map, per ogni elemento dell'array si esegue una funzione che ne eleva il valore al quadrato.
 * Possiamo vedere come sia possibile accedere al valore, all aposizione e all'intero array. */

let arrOrg = [1, 2, 3, 4, 5]

let mappedArray = arrOrg.map(function (value, index, array) {
    console.log("Value: ", value);
    console.log("Index: ", index);
    console.log("Array: ", array);
    return value ** 2; //esponente
})

console.log("MappedArray: ", mappedArray)

/**
 * FILTER - Funzioen che crea un nuovo array con solamente i valori risultati (TRUE) che soddisfano una condizione */

let filteredArray = arrOrg.filter(function (value, index, array) {

    return value % 2 === 0; //resto della divisione per due da zero - operazione modulo
})

console.log("FilteredArray: ", filteredArray)

/**
 * REDUCE - Il reduce()metodo esegue una funzione di riduzione (fornita dall'utente) su ciascun elemento dell'array,
 * risultando in un singolo valore di output.
 * La funzione reducer accetta quattro argomenti: Accumulatore  Valore corrente Indice attuale  Array sorgente
 * Il valore restituito dalla funzione di riduzione viene assegnato all'accumulatore, il cui valore viene ricordato ad
 * ogni iterazione dell'array e alla fine diventa il singolo valore risultante finale. */

let reducedArray = arrOrg.reduce(function (acc, index, value, array) {
    return acc + value;
})

console.log("FilteredArray: ", reducedArray)

/**+
 * SOME - Ritorna true o false se c'è almeno un elkemento dell'0array che soddisfa la condizione
 * EVERY - Tutti gli elementi devono soddisfare la condizione*/

let bool1 = arrOrg.some(function (value, index) {
    return value > 4;
})

console.log(bool1)

let bool2 = arrOrg.every(function (value, index) {
    return typeof value == "number";
})

console.log(bool2)
