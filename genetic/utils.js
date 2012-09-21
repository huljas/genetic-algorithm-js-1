// Utility functions

var genetic = genetic || {};

genetic.Utils = {
    // Generates a random ASCII string with given length
    randomString: function(length) {
        var str = "";
        for (var i = 0; i < length; i++) {
            str += String.fromCharCode(Math.floor(Math.random() * 255));
        }
        return str;
    },

    distance: function(str1, str2) {
        var ss = 0;
        for (i = 0; i < str1.length; i++) {
            var d = str1.charCodeAt(i) - str2.charCodeAt(i);
            ss += d * d;
        }
        return ss;
    }
};