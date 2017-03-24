const appInputController = [
'$scope', 'appQuery',
function ($scope, appQuery) {
	$scope.$watch('filterBy', (newValue, oldValue) => {
        if (newValue === oldValue) {
            return;
        }
		
		if (newValue === '') {
			this.data = null;
			return;
		}

		const validator = (reqValue) => reqValue !== '';
		
		const reqParam = {};
		reqParam[$scope.filterName] = newValue;

        appQuery.reqUniversityInfo(
        	reqParam, 
        	validator, 
        	(data) => { 
        		this.data = data; 
        		console.log(this.data);
        });
    });
}];

export default appInputController;