import app from '../../app.module.js';
import template from './template.html';
import controller from './controller.js';

app.directive('appTable', function() {
	return {
		template,
		controller,
        restrict: 'E',
        scope: {
        	tableHeader: '=',
        	tableData: '=',
        }
    };
});
