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
