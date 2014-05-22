'use strict';

angular
.module('bootAngApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		});
}]).run(['$rootScope', function($rootScope) {
	$rootScope.tabActive = {
		home : true,
		participants : false
	};

	$rootScope.$on('$locationChangeStart', function(scope, next) {
		var splittedNext = next.split('#/');

		if (splittedNext[1] === '') {
			splittedNext[1] = 'home';
		}

		$rootScope.tabActive[splittedNext[1]] = true;

		angular.forEach($rootScope.tabActive, function(value, key) {
			if (key === splittedNext[1]) {
				$rootScope.tabActive[key] = true;
			} else {
				$rootScope.tabActive[key] = false;
			}
		});
	});
}]);
