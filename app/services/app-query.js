import app from '../app.module.js';

const service = [
'$resource', 
function($resource) {
	this.universityInfo = $resource(
		'http://universities.hipolabs.com/search', {}, {
			jsonp: {
				method: 'JSONP',
				params: {
					callback: 'JSON_CALLBACK'
				},
				isArray: true
			}
		});
}];

app.service('appQuery', service);