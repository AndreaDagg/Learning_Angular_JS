let name = "jasse"

function doLoggin(prefisso, name) {
    if (name && true) {
        console.log("Hello, " + prefisso + " " + name)
    }
}

doLoggin("Dott", "Andrea")

function add(num1, num2) {
    return num1 + num2;
}

console.log("Sum: " + add(1, 2));

if (add(34, 54)) {
    console.log("Truthy")
} else {
    console.log("falsely")
}

/** Recursion */
function countDown(int) {
    console.log(int);
    if (int > 0) {
        countDown(int - 1);
    } else {
        console.log("happy neew year!!")
    }
}

countDown(10);


/*  Sintassi per dichiarare e richiamre la funzione senza dover riscrivere il nome, quidni possiamo usare questa sintassi
*   per dichiarare e runnare subito la funzione  */
(function detectChanges() {
    console.log("Detect Changes");
})();


/** Rest operator
 * Passiamo quanti argoemnti vogliamo e finiranno in una sorta di array
 * @num1: prende il primo valore passato
 * @num2: prende il secondo valore come parametro
 * @...nums: è un array che prende in input tutti gli altri valori passati come parametro */
(function buttonManager(num1, num2, ...nums) {
    console.log(nums);
    let sum = 0;
    for (let i = 0; i < nums; i++) {
        sum += nums[i];
    }
    console.log(sum);
    return sum;

})(1, 2, 3,);

//Alternativa richiamo:
// buttonManager(1, 2, 3, 4, 5, 6, 7, 8, 9)