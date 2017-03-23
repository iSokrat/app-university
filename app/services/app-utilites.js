import app from '../app.module.js';

const service = [
function() {
	this.isEmptyObject = isEmptyObject;
	this.filterObject = filterObject;

	function isEmptyObject(emptyObject){
    	return JSON.stringify(emptyObject) === '{}';
	}

	function filterObject(obj, predicate) {
		const filteredObject = {};

		for (let key in obj) {
			const cond = (obj.hasOwnProperty(key) && predicate(obj[key], key));
			
			if (cond) {
				filteredObject[key] = obj[key];
			}
		}

		return filteredObject; 	
	}
}];

app.service('appUtilites', service);