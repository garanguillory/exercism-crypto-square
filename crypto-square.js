
var Crypto = function(input){

	this.normalizePlaintext = function(){

		return input.replace(/(\s|\W)/g,'').toLowerCase();

	};

};


module.exports = Crypto;