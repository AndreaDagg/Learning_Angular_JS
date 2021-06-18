let hp = 100;
hp = 0;
do {
    if (hp <= 0) {
        console.log("G:O");
    } else if (hp == 1) {

        console.log("G:1");
    } else {

        console.log("G:2");
    }
    hp++
} while (hp != 3) ;


/** Truty or falsey */
let name = ""
if (name) {
    console.log("True");
} else {
    console.log("false");
}

