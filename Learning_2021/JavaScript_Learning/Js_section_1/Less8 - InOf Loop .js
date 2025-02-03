let names = ["jessie", "al", "jack"]

for (name of names) {
    console.log("Hello: " + name + ". How are you?")
}


var car = {"sportiiva": "pista", "utilitaria": "citta", "berlina": "viaggio", "furgone": "lavoro"};

for (type in car){
    console.log(type + " - " + car[type])
}
