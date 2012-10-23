describe('Gene', function() {

    describe('#constructor', function() {

        it('should create a new Gene Object', function() {
            var alpha = new genetic.Gene("alpha");
            expect(alpha).to.be.ok();
        });

        it('should be an instance of Gene', function() {
            var alpha = new genetic.Gene("alpha");
            expect(alpha).to.be.a(genetic.Gene);
        });

	    it('should contain value', function() {
		    var alpha = new genetic.Gene("alpha");
		    expect(alpha.value).to.be.equal("alpha");
	    });

    });

    describe('#cost', function() {

        it('should be able to calculate cost', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.cost).to.be.a('function');
        });

        it('should use distance as cost', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.cost('alphb')).to.be.equal(1);
	        expect(alpha.cost('clphb')).to.be.equal(5);
        });

    });

    describe('#mutate', function() {

        it('should be able to mutate', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mutate).to.be.a('function');
        });

        it('should return new Gene object', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mutate()).to.be.a(genetic.Gene);
        });

        it('should change the value by single point', function() {
            var alpha = new genetic.Gene('alpha');
	        var alphaMutated = alpha.mutate();
	        expect(alphaMutated.cost(alpha.value)).to.be.equal(1);
        });

    });

    describe('#mate', function() {

        it('should be able to mate', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mate).to.be.a('function');
        });

        it('should return 2 Genes', function() {
            var alpha = new genetic.Gene('alpha'),
                beta = new genetic.Gene('betaa'),
                generation = alpha.mate(beta);

            expect(generation.length).to.be(2);

            $.each(generation, function(idx, gene) {
                expect(gene).to.be.a(genetic.Gene);
            });
        });

	    it('returned genes should be parents children', function() {
		    var alpha = new genetic.Gene('alpha');
		    var beta = new genetic.Gene('betaa');

		    var children = alpha.mate(beta);
		    expect(children[0].value).to.be.equal("altaa");
		    expect(children[1].value).to.be.equal("bepha");
	    });

    });

});