const appTableController = [
'$scope', 'orderByFilter',
function ($scope, orderBy) {
	const tableFilter = {
		currClassOn:  'glyphicon glyphicon-sort-by-attributes',
		currClassOff: 'glyphicon glyphicon-sort-by-attributes-alt',
		defaultClass: 'glyphicon glyphicon-sort',
	}
	this.sortBy = (propName) => {
		this.sortState = (this.currentSortPropName === propName)
			?(!this.sortState)
			:false;
		this.currentSortPropName = propName;
    	this.tableData = orderBy(
    		this.tableData, 
    		this.currentSortPropName, 
    		this.sortState
    	);
	}

	this.sortState = true;
	this.currentSortPropName = this.defaultSortProperty;
	this.sortBy(this.currentSortPropName);
}];

export default appTableController;