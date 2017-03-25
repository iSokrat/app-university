import app from '../../app.module.js';
import template from './template.html';
import controller from './controller.js';

app.directive('appInput', function() {
	return {
		template,
		controller,
        restrict: 'E',
        scope: {
        	title: '@',
        	id: '@',
        	filterName: '@',
            filterBy: '=',
        },
        controllerAs: 'input',
        bindToController: true
    };
});
