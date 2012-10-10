define(['tools/eventmachine'], function(eventMachine) {
    describe('eventMachine', function() {
        beforeEach(function() {

        });
        describe('#subscribe', function() {
            it('should subscribe an event handler to given event', function(done) {
                eventMachine.subscribe('foo', function() {
                    done();
                });
                eventMachine.publish('foo');
            });
        });
        describe('#unsubscribe', function() {
            it('should unsubscribe an event handler from given event', function(done) {
                var handler = function(correct) {
                    done(correct);
                };
                eventMachine.subscribe('foo', handler);
                eventMachine.unsubscribe('foo', handler);
                eventMachine.publish('foo', "BREAKAGE!");
                handler();
            });
        });
        describe('#publish', function() {
            it('should call event handlers when published', function(done) {
                eventMachine.subscribe('lör', function() {
                    done();
                });
                eventMachine.publish('lör');
            });
            it('should pass parameters to the event handlers', function(done) {
                eventMachine.subscribe('☃', function(eventData) {
                    expect(eventData.one).to.eql(1);
                    expect(eventData.two).to.eql(2);
                    done();
                });
                eventMachine.publish('☃', {
                    "one": 1,
                    "two": 2
                });
            });
        });
        describe('#clear', function() {
            it('should clear all the subscriptions', function(done) {
                eventMachine.subscribe('årr', function() {
                    done('årr handler still got called!');
                });
                eventMachine.subscribe('murr', function() {
                    done('murr handler still got called!', function() {
                    });
                });
                eventMachine.clear();
                eventMachine.publish('årr');
                eventMachine.publish('murr');
                done();
            });
            it('should publish a eventMachine:clear event when cleared', function(done) {
                eventMachine.subscribe('eventMachine:clear', function(eventData) {
                    expect(eventData.machine).to.be.ok();
                    expect(eventData.subscriptions).to.not.be.empty();
                    expect(eventData.subscriptions['eventMachine:clear']).to.not.be.empty();
                    done();
                });
                eventMachine.clear();
            });
        });
    });
});
