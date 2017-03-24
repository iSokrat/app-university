import app from '../app.module.js';

const controller = [
'$scope','filterFilter', 'appQuery', 
function($scope, filterFilter, appQuery) {
	const validator = (reqValue) => reqValue !== '';
	
	this.reqInfo = (reqParams, paramValidator = validator) => {
		$scope.$broadcast('clearDropdown', null);
		this.showSpinnerState = true;

		const succsess = (data) => {
			this.data = data;
			this.showSpinnerState = false;
		}

		const error = (error) => {
			this.showSpinnerState = false;
			
			/*
				---
				\ /
				 |
				 |
			|	 |
			|   */
			$scope.$apply(); 
			
			console.error(error);
		};

		appQuery.reqUniversityInfo(
			reqParams, 
			paramValidator, 
			succsess, 
			error
		);
	};

	this.appName = 'University app';
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

	this.showSpinnerState = false;
}];

app.controller('appController', controller);