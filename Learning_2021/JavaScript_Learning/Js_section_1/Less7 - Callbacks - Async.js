/* Le callcack sono funzioni che si passano ad altre fuinzioni come parametro
*   che possono poi essere richiamate
*   In questo esempio il code non è asyncrono ma viene eseguito immediatamente.
*   Solitamente i metodi di callback sono usati in maniera asincrona
*
*   un callback è, in genere, una funzione, o un "blocco di codice" che viene
*   passata come parametro ad un'altra funzione. In particolare, quando ci si riferisce
*   alla callback richiamata da una funzione, la callback viene passata come argomento
*   ad un parametro della funzione chiamante */

function connect(callback) {
    console.log("Connecting...")
    callback("Finish...");
}

connect(function (value) {
    console.log("..." + value + " ...")
})

/** Async callback example */

function cookFood() {
    console.log("Just started cooking");
    setTimeout(function () {
        console.log("Time to eat!")
        eat()
    }, 2000)
}

function eat() {
    clearTimeout(readingId)
    setTimeout(function () {
        console.log("Done eating...")
        read()
    }, 2000)
}

function read() {
    let timerId = setTimeout(function () {
        console.log("Reading...")
        read();
    }, 3000)
    return timerId;
}

let readingId = read();
cookFood()

/** Async Loop */
setInterval(function () {
    console.log("Do this every 100 milliseconds")
}, 100)

