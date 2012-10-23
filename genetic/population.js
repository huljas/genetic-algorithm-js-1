/*

Implement genetic.Population object in genetic/population.js.

	new genetic.Population(goal, size) - Constructor takes the goal string and pool size and generates a pool of randomly generated Genes

	population.sortGenes() - Sort genes in ascending order based on the cost from goal

	population.tryMutate() - Mutates each gene in the pool with 50% probability

	population.eliminateLastTwo() - Removes last two genes from the pool

    population.mateFirstTwo() - Mates the first gene with the second gene, adds their children at the end of the pool

	population.generation() : <status object> - Runs single generation which:

	    1. mutates the genes
	    2. sorts them
	    3. removes least fitting
	    4. mates best ones

	at the end of generation returns the following status object:

	{match : <boolean was goal found>, generation : <int generation number starting from 1>, cost : <int, cost of best gene in the generation>, value : <string, value of the best gene in generation>}
*/
var genetic = genetic || {};

genetic.Population = function(goal, size) {
    this.pool = [];
    this.goal = goal;
    this.generationNumber = 1;

    for (var i = 0; i < size; i++) {
        var random = genetic.Utils.randomString(goal.length);
        var gene = new genetic.Gene(random);
        this.pool.push(gene);
    }
};

genetic.Population.prototype = {
    tryMutate : function() {
	    for (var i = 0; i < this.pool.length; i++) {
		    var gene = this.pool[i];
		    var random = Math.random();
		    if (random < 0.5) {
			    this.pool[i] = gene.mutate();
		    }
	    }
    },
    
    sortGenes : function() {
        var goal = this.goal;
        this.pool.sort(function(g1, g2) {
            return g1.cost(goal) - g2.cost(goal);                
        });
    },
    
    eliminateLastTwo : function() {
        this.pool.splice(this.pool.length - 2, 2);
    },
    
    mateFirstTwo : function() {
        var children = this.pool[0].mate(this.pool[1]);
        this.pool.push(children[0]);
        this.pool.push(children[1]);
    },

    generation : function() {
        this.tryMutate();
        this.sortGenes();
        this.eliminateLastTwo();
        this.mateFirstTwo();
        var bestGene = this.pool[0];
        var match = bestGene.value === this.goal;
        return {match : match, generation : this.generationNumber++, cost : bestGene.cost(this.goal), value : bestGene.value};
    }
};
