describe('Population', function() {

	describe('#constructor', function() {

		it('should create a new Population Object', function() {
			var population = new genetic.Population("Hello World!", 10);
			 expect(population).to.be.ok();
		});

		it('should be an instance of Population', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population).to.be.a(genetic.Population);
		});

		it('should have a population amount of the value in arguments', function() {
			var poolSize = 10,
				population = new genetic.Population("Hello World!", 10);
			expect(population.pool.length).to.be(poolSize);
		});

	});

	describe('#sortGenes', function() {

		it('should be able to sort Genes', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population.sortGenes).to.be.a('function');
		});

	});

	describe('#tryMutate', function() {

		it('should be able to tryMutate', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population.tryMutate).to.be.a('function');
		});

	});

	describe('#eliminateLastTwo', function() {

		it('should be able to eliminateLastTwo', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population.eliminateLastTwo).to.be.a('function');
		});

		it('should remove two last items from the pool', function() {
			var population = new genetic.Population("Hello World!", 10),
				lastTwo = population.pool.slice(8);
			population.eliminateLastTwo();
			expect(population.pool.length).to.be(8);
			expect(population.pool.slice(6)).not.to.be(lastTwo);
		});

	});

	describe('#mateFirstTwo', function() {

		it('should be able to mateFirstTwo', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population.mateFirstTwo).to.be.a('function');
		});

		it('should mate two first items from the pool', function() {
			var population = new genetic.Population("Hello World!", 10),
				firstTwo = population.pool.slice(0,2);
			population.mateFirstTwo();
			expect(population.pool.length).to.be(12);
			expect(population.pool.slice(10)).not.to.be(firstTwo);
		});

	});

});