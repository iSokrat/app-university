import app from '../../app.module.js';
import template from './template.html';
// import controller from './controller.js';

app.directive('appSwitchBtn', function() {
	return {
		template,
		// controller,
        restrict: 'E',
        scope: {
        },
        controllerAs: 'btn',
    };
});
