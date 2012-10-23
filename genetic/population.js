/*

Implement Population object in genetic/population.js.

Constructor takes the goal string and population size and generates a pool of randomly generated Genes

var population = new genetic.Population("Hello World!", 10);


The sortGenes orders the genes in the pool based on their cost (distance from goal)

population.sortGenes();


The tryMutate mutates each gene in the pool with 50% probability

population.tryMutate();


The eliminateLastTwo removes the two poorest genes from the pool

population.eliminateLastTwo();


The mateFirstTwo mates the two best genes and pushes their children at the end of the pool

population.mateFirstTwo();

*/
var genetic = genetic || {};

genetic.Population = function(goal, size) {
    this.members = [];
    this.goal = goal;
    this.generationNumber = 1;

    for (var i = 0; i < size; i++) {
        var random = genetic.Utils.randomString(goal.length);
        var gene = new genetic.Gene(random);
        this.members.push(gene);
    }
};

genetic.Population.prototype = {
    tryMutate : function() {
	    for (var i = 0; i < this.members.length; i++) {
		    var gene = this.members[i];
		    var random = Math.random();
		    if (random < 0.5) {
			    gene.mutate();
		    }
	    }
    },
    
    sortGenes : function() {
        var goal = this.goal;
        this.members.sort(function(g1, g2) {
            return g1.cost(goal) - g2.cost(goal);                
        });
    },
    
    eliminateLastTwo : function() {
        this.members.splice(this.members.length - 2, 2);            
    },
    
    mateFirstTwo : function() {
        var children = this.members[0].mate(this.members[1]);
        this.members.push(children[0]);
        this.members.push(children[1]);
    },

    generation : function() {
        this.tryMutate();
        this.sortGenes();
        this.eliminateLastTwo();
        this.mateFirstTwo();
        var bestGene = this.members[0];
        var match = bestGene.value === this.goal;
        return {match : match, generation : this.generationNumber++, cost : bestGene.cost(this.goal), value : bestGene.value};
    }
};
