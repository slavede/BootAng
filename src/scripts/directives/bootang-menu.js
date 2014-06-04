angular.
	module('BootAng')
		.directive('bootangMenu', ['$window', function() {
			'use strict';
			return {
				restrict : 'E',
				templateUrl : 'views/directives/bootang-menu.tpl',
				scope : {
					bootangOptions : '='
				}
			};
		}]);