describe('Gene', function() {

    describe('#constructor', function() {

        it('should create a new Gene Object', function() {
            var alpha = new genetic.Gene("alpha");
            expect(alpha).to.be.ok();
        });

        it('should be an instance of Gene', function() {
            var alpha = new genetic.Gene("alpha");
            expect(alpha).to.be.a(Gene);
        });

    });

    describe('#cost', function() {

        it('should be able to calculate cost', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.cost).to.be.a('function');
        });

        it('should return a number', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.cost()).to.be.a('number');
        });

    });

    describe('#mutate', function() {

        it('should be able to mutate', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mutate).to.be.a('function');
        });

        it('should return a string', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mutate()).to.be.a('string');
        });

        it('should change the value', function() {
            var alpha = new genetic.Gene('alpha'),
                value = alpha.value,
                mutatedValue = alpha.mutate();

            expect(mutatedValue).not.to.be(value);
        });

    });

    describe('#mate', function() {

        it('should be able to mate', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mate).to.be.a('function');
        });

        it('should return an array', function() {
            var alpha = new genetic.Gene('alpha');
            expect(alpha.mate()).to.be.an('array');
        });

        it('should return an array of Genes', function() {
            var alpha = new genetic.Gene('alpha'),
                beta = new genetic.Gene('betaa'),
                generation = alpha.mate(beta);

            expect(generation.length).to.be(2);

            $.each(generation, function(idx, gene) {
                expect(gene).to.be.a(Gene);
            });
        });

    });

});