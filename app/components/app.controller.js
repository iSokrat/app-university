import app from '../app.module.js';

const controller = [
'$scope','filterFilter', 'appQuery',
function($scope, filterFilter, appQuery) {
	const validator = (reqValue) => reqValue !== '';
	
	this.reqInfo = (reqParams, paramValidator = validator) => {
		appQuery.reqUniversityInfo(
			reqParams, 
			paramValidator, 
			(data) => {
				this.data = data;
		});
	};

	this.header = [
		'Name',
		'Country',
		'Web Page',
		'Alpha Code',
		'Domain',
	];
	
	this.filters = {
		// name
		// country
	}
}];

app.controller('appController', controller);