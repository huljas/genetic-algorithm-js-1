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

