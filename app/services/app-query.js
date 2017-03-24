import app from '../app.module.js';

const service = [
'$resource', 'appUtilites',
function($resource, appUtilites) {
	const url = 'http://universities.hipolabs.com/search';

	this.reqUniversityInfo = reqUniversityInfo;

	function reqUniversityInfo(reqParams, paramValidator, callback) {
		const correctReqParams = appUtilites.filterObject(reqParams, paramValidator);
		const isParamsEmpty = appUtilites.isEmptyObject(correctReqParams);

		if (isParamsEmpty) {
			return;
		}
		
		$resource(url, {}, {})
				.query(correctReqParams)
				.$promise
					.then(callback)
					.catch(console.error);
	}
}];

app.service('appQuery', service);