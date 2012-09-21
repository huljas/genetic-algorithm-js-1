// Population contains the Genes
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

    this._round = function() {};
};

genetic.Population.prototype = {
    round: function(callback) {
        this._round = callback;
        return this;
    },
    
    tryMutate : function(gene) {    
        var random = Math.random();
        if (random < 0.5) {
            gene.mutate();
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
        for (var i = 0; i < this.members.length; i++) {
            var gene = this.members[i];
            this.tryMutate(gene);
        }
        this.sortGenes();
        this.eliminateLastTwo();
        this.mateFirstTwo();
        var bestGene = this.members[0];
        var match = bestGene.value === this.goal;
        return {match : match, generation : this.generationNumber++, cost : bestGene.cost(this.goal), value : bestGene.value};
    }
};