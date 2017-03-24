import app from '../app.module.js';

const service = [
'$resource', 'appUtilites',
function($resource, appUtilites) {
	const url = 'http://universities.hipolabs.com/search';

	this.reqUniversityInfo = reqUniversityInfo;

	function reqUniversityInfo(reqParams, paramValidator, callback, error = console.error) {
		const correctReqParams = appUtilites.filterObject(reqParams, paramValidator);
		const isParamsEmpty = appUtilites.isEmptyObject(correctReqParams);

		if (isParamsEmpty) {
			const errMsg = "After validation reqParams is empty.";
			
			Promise
				.reject(new Error(errMsg))
				.catch(error);

			return;
		}
		
		$resource(url, {}, {})
				.query(correctReqParams)
				.$promise
					.then(callback)
					.catch(error);
	}
}];

app.service('appQuery', service);