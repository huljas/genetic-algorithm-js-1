var genetic = genetic || {};

genetic.Gene = function(value) {
    this.value = value;
};

genetic.Gene.prototype = {
    // Returns the cost of this gene as a distance from the goal
    cost : function(goal) {
        return genetic.Utils.distance(this.value, goal);
    },
    
    // Randomly mutates single character
    mutate: function() {
        var i = Math.floor(Math.random() * this.value.length);
        var upOrDown = Math.random() <= 0.5 ? -1 : 1;
        var newChar = String.fromCharCode(this.value.charCodeAt(i) + upOrDown);
        this.value = this.value.substr(0, i) + newChar + this.value.substr(i + 1);
    },

    // Combines the first half and second half of given gene with this to get two new genes
    mate: function(gene) {
        var pivot = Math.round(this.value.length / 2) - 1;

        var child1 = this.value.substr(0, pivot) + gene.value.substr(pivot);
        var child2 = gene.value.substr(0, pivot) + this.value.substr(pivot);

        return [new genetic.Gene(child1), new genetic.Gene(child2)];
    }        
};