import app from '../../app.module.js';
import template from './template.html';
import controller from './controller.js';

app.directive('appDropdownList', function() {
	return {
		template,
		controller,
		controllerAs: 'list',
        bindToController: true,
        restrict: 'E',
        scope: {
        	items: '=',
            selectTarget: '=',
        	visibleFields: '=',
        	uniqueBy: '='
        }
    };
});
