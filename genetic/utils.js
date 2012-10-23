/*

 Implement following utility functions in file genetic/utils.js

  genetic.Utils.randomString(length) : string – generates random string of given length

  genetic.Utils.distance(str1, str2) : int – squared euclidean distance of two same length strings, that is:

    D = (str1[0] - str2[0])^2 + ... + (str1[N] - str2[N])^2

*/
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
		for (var i = 0; i < str1.length; i++) {
			var d = str1.charCodeAt(i) - str2.charCodeAt(i);
			ss += d * d;
		}
		return ss;
	}
};
