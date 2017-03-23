import app from '../app.module.js';

const controller = [
'$scope','filterFilter', 'appQuery', 'appUtilites',
function($scope, filterFilter, appQuery, appUtilites) {
	this.reqInfo = (reqParams) => {
		const correctReqParams = appUtilites.filterObject(reqParams, (reqValue) => reqValue !== '');
		const isParamsEmpty = appUtilites.isEmptyObject(correctReqParams);

		if (isParamsEmpty) {
			return;
		}

		appQuery.universityInfo
				.query(correctReqParams)
					.$promise
					.then((data) => {
						this.data = data;
					}).catch(console.error);
	}

	this.header = [
		'Name',
		'Country',
		'Web Page',
		'Alpha Code',
		'Domain',
	];
	
	this.filters = {
		// name: undefined,
		// country: '',
	}

	$scope.$watch('app.filters.country', (newValue, oldValue) => {
		if (oldValue === newValue) {
			return;
		}

		//this.filteredData = filterFilter(data, this.filters.country);
	});

	$scope.$watch('app.filters.name', (newValue, oldValue) => {
		if (oldValue === newValue) {
			return;
		}

		//this.filteredData = filterFilter(data, this.filters.name);
	});
}];

app.controller('appController', controller);