let company = {
    name: "Apple",
    founded: 1976,
    fouders: ["Steve", "Ronald"],
    products: ["iPhone", "Mac"],
    createNewProduct: function (prd) {
        this.products.push(prd)
        console.log("ADDED!!");
        return this.products;
    }
}

/* Access by point and by key */

console.log(company.createNewProduct("IPad"));
console.log(company["fouders"]);


/** Destructoring in function
 * psassiamo come parametro il nome del tipo dell'oggetto */

let obj = {
    title: "New Born",
    band: "MUSE"
}

function controller(title, {band}) {
    console.log(title);
    console.log(band);
}

controller("Bliss", obj)