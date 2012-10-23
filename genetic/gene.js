/*

Implement genetic.Gene object in genetic/gene.js with the following functions:

	new genetic.Gene( value ) - constructor creates a new gene with given value

	cost( goal ) : int – calculates the cost of this gene from given string 'goal'

	mutate( ) : Gene – randomly modifies a single character in this genes value

	mate( gene ) : [Gene, Gene] – combine this with given gene, returns two new genes in an array

*/
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
		var newValue = this.value.substr(0, i) + newChar + this.value.substr(i + 1);
		return new genetic.Gene(newValue);
	},

	// Combines the first half and second half of given gene with this to get two new genes
	mate: function(gene) {
		var pivot = Math.round(this.value.length / 2) - 1;

		var child1 = this.value.substr(0, pivot) + gene.value.substr(pivot);
		var child2 = gene.value.substr(0, pivot) + this.value.substr(pivot);

		return [new genetic.Gene(child1), new genetic.Gene(child2)];
	}
};
