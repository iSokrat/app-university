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
	
	this.noResultMsg = 'Results not found:( Don\'t worry! Try again;)';
	
	this.welcomeMsg = {
		header: 'Welcome!',
		text: 'It helps you to find information about any university in the world!',
	}

	this.filters = {/* name, country */}

	this.showSpinnerState = false;

	$scope.$watch('app.data.length', (newVal, oldVal) => {
		if (newVal === oldVal) {
			return;
		}

		if (newVal === 0) {
			this.dataState = 'NO_RESULT';
		} else {
			this.dataState = 'FULLY';
		}
	});
}];

app.controller('appController', controller);