var _ = require('underscore');

var data = {
	name: 'Stephan',
	limit: 100,
	keywords: 'Red',
	user: 10100
}

var flds = [ 'user', 'limit', 'name', 'keywords' ]

var t = _.chain(data)
		.pairs()
		.sortBy(function(val) {
			return _.indexOf(flds, val[0])
		})
		.map(function(val) {
			return val.join('=');
		})
		.join('&')
		.value()

console.log(t)