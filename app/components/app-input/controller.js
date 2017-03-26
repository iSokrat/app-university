const appInputController = [
'$scope', 'appQuery',
function ($scope, appQuery) {
	this.clearDropdown = () => {
        this.data = null;
    }

    $scope.$on('clearDropdown', this.clearDropdown);
	$scope.$watch('input.filterBy', (newValue, oldValue) => {
        if (newValue === oldValue) {
            return;
        }

		const validator = (reqValue) => reqValue !== '';
		
		const reqParam = {};
		reqParam[this.filterName] = newValue;

        appQuery.reqUniversityInfo(
        	reqParam, 
        	validator, 
        	(data) => {
                this.data = data;
        });
    });
}];

export default appInputController;