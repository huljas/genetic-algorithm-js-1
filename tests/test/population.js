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

		it('should create a pool of given size', function() {
			var poolSize = 10;
			var	population = new genetic.Population("Hello World!", 10);
			expect(population.pool.length).to.be(poolSize);
		});

	});

	describe('#sortGenes', function() {

		it('sortGenes should be defined', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population.sortGenes).to.be.a('function');
		});

		it('should sort Genes by cost from goal', function() {
			var population = new genetic.Population("alpha", 10);
			population.pool = [];
			population.pool.push(new genetic.Gene("gamha"));
			population.pool.push(new genetic.Gene("delta"));
			population.pool.push(new genetic.Gene("alfha"));

			population.sortGenes();

			expect(population.pool[0].value).to.be.equal("alfha");
			expect(population.pool[1].value).to.be.equal("gamha");
			expect(population.pool[2].value).to.be.equal("delta");
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
			var population = new genetic.Population("Hello World!", 10);
			var lastFirst = population.pool[9];
			var lastSecond = population.pool[8];
			population.eliminateLastTwo();
			expect(population.pool.length).to.be(8);
			expect(population.pool).to.not.contain(lastFirst);
			expect(population.pool).to.not.contain(lastSecond);
		});

	});

	describe('#mateFirstTwo', function() {

		it('should be able to mateFirstTwo', function() {
			var population = new genetic.Population("Hello World!", 10);
			expect(population.mateFirstTwo).to.be.a('function');
		});

		it('should add two new genes to the pool', function() {
			var population = new genetic.Population("Hello World!", 10);
			var first = population.pool[0];
			var second = population.pool[1];
			population.mateFirstTwo();
			expect(population.pool.length).to.be(12);
		});

		it('the two new genes should be children of their parents', function() {
			var population = new genetic.Population("alpha", 10);
			population.pool[0] = new genetic.Gene("delta");
			population.pool[1] = new genetic.Gene("omega");
			population.mateFirstTwo();
			expect(population.pool[10].value).to.be.equal("deega");
			expect(population.pool[11].value).to.be.equal("omlta");
		});

	});

});