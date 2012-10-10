// Configure RequireJS
require.config({
    baseUrl:'.',
    urlArgs: "v="+(new Date()).getTime(),
    shim: {
        'mocha': {
            exports: 'mocha'
        },
        'expect': {
            exports: 'expect'
        }
    },
    paths: {
        specs:          'specs',
        mocha:          'lib/mocha',
        expect:         'lib/assertion/expect',
        jquery:         '../vision/jam/jquery/jquery',
        underscore:     '../vision/jam/underscore/underscore',
        backbone:       '../vision/jam/backbone/backbone',
        transparency:   '../vision/jam/transparency/lib/transparency',
        models:         '../vision/models',
        collections:    '../vision/collections',
        templates:      '../vision/templates',
        views:          '../vision/views',
        features:       '../vision/features',
        tools:          '../vision/tools',
        config:         'config'
    }
});

// Require libraries
require(['require',
         'expect',
         'mocha'],
        function(require) {
            var self = this;
            if(!self) {
                self = window;
            }

            // Require base tests before starting
            require(['specs'], function(){
                var runner = self.
                self.BUNYIP.hookup(runner);
            });
});