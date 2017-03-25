const appDropdownListController = [
'$scope',
function ($scope) {
    this.limitRecords = 5;
    this.selectListItem = (info) => {
    	this.selectTarget = info;
    	this.items = null;
    }
}];

export default appDropdownListController;