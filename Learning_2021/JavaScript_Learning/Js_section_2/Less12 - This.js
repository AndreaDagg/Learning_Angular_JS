/* La keyword this si usa sempre per riferire un oggetto */


/** Come possiamo vedere dal primo log this si riferisce all'ogetto person*/
var person = {
    name: "Jasse",
    sleep: function () {
        //console.log(this)
        console.log(`${this.name} is going to sleep`);
    }
}

person.sleep()


/** In questo caso this viene restituito undefined perché staimo referenziando solamente la funzione non l'intero oggetto */
let sleep = person.sleep
sleep()


/** Attrverso il metodo call possiamo referenziare un'iggetto e passare come argomento i paramentri della funzione */
function eatAnddrink(food, drink) {
    console.log(`${this.name} eat ${food} and drink ${drink}  `);
}

eatAnddrink.call(person, "salsicce", "birra");
