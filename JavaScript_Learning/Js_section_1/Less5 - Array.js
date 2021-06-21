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


