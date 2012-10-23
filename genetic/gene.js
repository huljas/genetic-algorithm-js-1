/*

Implement Gene object in genetic/gene.js

var alpha = new genetic.Gene("alpha");
var betaa = new genetic.Gene("betaa");


cost – calculates the cost of this gene from given value

console.log("cost: " + alpha.cost("alphc"));

cost: 4


mutate – randomly modifies a single character in this genes value

alpha.mutate();
console.log("mutate: " + alpha.value);

mutate: aloha


mate – combine gene with given gene to produce two new genes

var nextGen = alpha.mate(betaa);
console.log("nextGen: '" + nextGen[0].value + "' , '" + nextGen[1].value);

nextGen: 'altaa' , 'beoha

*/