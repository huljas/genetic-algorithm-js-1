describe('Utils', function() {

    describe('#namespace', function() {

        it('should have a "genetic" namespace', function() {
            expect(genetic).to.be.an('object');
        });

        it('should have a "genetic.Utils" namespace', function() {
        	expect(genetic.Utils).to.be.an('object');
        });

    });

    describe('#randomString', function() {

    	it('should have a function to produce random strings', function() {
 			expect(genetic.Utils.randomString).to.be.a('function');
    	});

    	it('should be able to produce a random string', function() {
    		var string = genetic.Utils.randomString(10);
            expect(string).to.be.a('string');
        });

        it('should return a correct length string', function() {
    		var length = 10,
    			string = genetic.Utils.randomString(length);
            expect(string.length).to.be(length);
        });

        it('should return a random string', function() {
        	var string = genetic.Utils.randomString(10),
        		anotherString = genetic.Utils.randomString(10);

        	expect(string).not.to.be(anotherString);
        });

    });

     describe('#distance', function() {

    	it('should be able to calculate squared euclidean distance of two same length strings', function() {
    		var distance = genetic.Utils.distance(genetic.Utils.randomString(10), genetic.Utils.randomString(10));
            expect(distance).to.be.a('number');
        });

  	});


});