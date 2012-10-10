(function(window, document) {
    define(['jquery', 'tools/templateStorage'], function($, templateStorage) {

        describe('templateStorage', function() {
            describe('#html', function() {
                it('should set html if given', function() {
                    templateStorage.html("<div id='trololoo'></div>");
                    expect(templateStorage.get('#trololoo')).to.be.ok();
                });
                it('should have deferred object resolved when the html is set', function(testDone) {
                    templateStorage.html("<div id='trololoo'></div>");
                    $.when(templateStorage.loaded).done(function() {
                        expect(templateStorage.get('#trololoo')).to.be.ok();
                        testDone();
                    });
                });
                it('should always replace the current template when html is called', function(testDone) {
                    templateStorage.html("<div id='trololoo'></div>");
                    templateStorage.html("<div id='trololoo22'></div>");
                    $.when(templateStorage.loaded).done(function() {
                        expect(templateStorage.get('#trololoo')).to.be.empty();
                        testDone();
                    });
                });
            });
        });
    });
})(window, document);