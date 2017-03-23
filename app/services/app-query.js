import app from '../app.module.js';

const service = [
'$resource', 
function($resource) {
	const url = 'http://universities.hipolabs.com/search';

	this.universityInfo = $resource(url, {}, {});
}];

app.service('appQuery', service);