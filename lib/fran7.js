var express  = require('express');
var mongoose = require('mongoose');
var _        = require('underscore');

var Fran7 = (function init() {

	var $     = {};

	$.version = "0.0.1";
	$.e       = express();
	$.m       = mongoose;
	$.models  = {};

	$.e.configure(function() {
		$.e.set('port', process.env.PORT || 3001);
		$.e.use(express.bodyParser());
		$.e.use(express.methodOverride());
		$.e.use($.e.router);
		$.e.use(express.static('../client/'));
	});

	$.e.configure('development', function() {
		$.e.use(express.errorHandler());
	});


	$.listen = function() {
		$.e.listen($.e.get('port'));
		console.log('Listening on http://localhost:' + $.e.get('port') + '/');
	};

	$.connect = function(options) {
		$.m.connection.on('open', function() {
			console.log('Connection opened to MongoDB at ' + options.uri);
		});

		$.m.connect(options.uri, options.options);
	};


	$.addModel = function(name, specs, schemaCallback) {

		var methods = null;
		var statics = null;		

		if(specs.methods !== undefined) {
			methods = _.clone(specs.methods);
			delete specs.methods;
		}

		if(specs.statics !== undefined) {
			statics = _.clone(specs.statics);
			delete specs.statics;
		}

		var schema     = $.m.Schema(specs);
		schema.methods = methods;
		schema.statics = statics;

		if(typeof schemaCallback === 'function') { callback(schema); }

		$.models[name] = $.m.model(name, schema);
	};

	return $;

})();

module.exports = Fran7;
