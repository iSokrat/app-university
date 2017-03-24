const appDropdownListController = [
'$scope',
function ($scope) {
    this.limitRecords = 5;
    this.selectListItem = selectListItem;

    function selectListItem(info) {
    	$scope.selectTarget = info;
    	$scope.items = null;
    }
}];

export default appDropdownListController;