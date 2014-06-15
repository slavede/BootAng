angular.
	module('BootAng')
		.directive('bootangPopover', [function() {
			'use strict';
			return {
				restrict : 'C',
				scope : {
					bootangOptions : '=',
					bootangMethods : '=?',
					bootangEvents : '=?'
				},
				link : function(scope, element) {
					if (scope.bootangMethods === undefined) {
						scope.bootangMethods = {};
					}
					if (scope.bootangEvents === undefined) {
						scope.bootangEvents = {};
					}

					scope.$watch('bootangMethods', function(newValue) {
						if (newValue.show === true) {
							element.popover('show');
							newValue.show = false;
						}

						if (newValue.hide === true) {
							element.popover('hide');
							newValue.hide = false;
						}

						if (newValue.toggle === true) {
							element.popover('toggle');
							newValue.toggle = false;
						}

						if (newValue.destroy === true) {
							element.popover('destroy');
							newValue.destroy = false;
						}
					}, true);

					element.popover(scope.bootangOptions);

					if (scope.bootangEvents.show !== undefined) {
						element.on('show.bs.popover', function() {
							scope.bootangEvents.show();
						});
					}
					if (scope.bootangEvents.shown !== undefined) {
						element.on('shown.bs.popover', function() {
							scope.bootangEvents.shown();
						});
					}
					if (scope.bootangEvents.hide !== undefined) {
						element.on('hide.bs.popover', function() {
							scope.bootangEvents.hide();
						});
					}
					if (scope.bootangEvents.hidden !== undefined) {
						element.on('hidden.bs.popover', function() {
							scope.bootangEvents.hidden();
						});
					}
				}
			};
		}]);