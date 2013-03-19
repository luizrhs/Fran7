describe("Base Fran7 :: Module", function() {

	var fran = require('../../lib/fran7.js');
	var _    = require('underscore');

	it("Should be an object", function() {
		expect(typeof fran).toBe('object'); 
	});

	it("Should have a version", function() {
		expect(typeof fran.version).toBe('string');	
	});

	it("Should have a list of models with ", function() {
		expect(_.size(fran.models)).toBe(0);	
	});

	it("Should have a helper method to add models", function() {
		fran.addModel('Test', {name: String});
		expect(fran.models.Test).toBeTruthy();
	});

});

