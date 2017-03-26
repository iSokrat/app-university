import app from '../../app.module.js';
import template from './template.html';
import controller from './controller.js';

app.directive('appSwitchBtn', function() {
	return {
		template,
        restrict: 'E',
        scope: {
        	switchState: '=',
            classOn: '@',
        	classOff: '@',
        },
        controller,
        controllerAs: 'btn',
        bindToController: true,
    };
});
