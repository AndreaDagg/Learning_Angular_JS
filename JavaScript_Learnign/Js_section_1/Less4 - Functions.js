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

countDown(10)
