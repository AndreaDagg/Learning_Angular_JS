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