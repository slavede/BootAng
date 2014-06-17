'use strict';

describe('Directive: bootangMenu', function () {
	var $scope, element;
	// load the controller's module
	beforeEach(module('BootAng'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($rootScope, $compile) {
		$scope = $rootScope.$new();
		$scope.bootangOptions = {
			placement : 'bottom',
			title : 'My Popover Title',
			content : 'This will be conent of my popover, you know?'
		};

		$scope.bootangEvents = {};
		$scope.bootangEvents.show = function() {
			alert('Shown popover');
		};

		$scope.bootangMethods = {};

		element = $compile("<span class='bootang-popover' bootang-options='bootangOptions' bootang-methods='bootangMethods' bootang-events='bootangEvents'>My Span for Popover</span>")($scope);
		
		spyOn($scope.bootangEvents, 'show');
	}));

	it('should call bootstrap method and reset variables to false', function () {
		expect(element).toBeDefined('Element should be defined');

		$scope.$apply(function() {
			$scope.bootangMethods.show = true;
		});
		expect($scope.bootangMethods.show).toBe(false, 'Directive will call popover and reset show to false');

		$scope.$apply(function() {
			$scope.bootangMethods.hide = true;
		});
		expect($scope.bootangMethods.hide).toBe(false, 'Directive will call popover and reset hide to false');

		$scope.$apply(function() {
			$scope.bootangMethods.toggle = true;
		});
		expect($scope.bootangMethods.toggle).toBe(false, 'Directive will call popover and reset toggle to false');

		$scope.$apply(function() {
			$scope.bootangMethods.destroy = true;
		});
		expect($scope.bootangMethods.destroy).toBe(false, 'Directive will call popover and reset destroy to false');
	});

	it ('should call scope callbacks in case popover is being shown', function() {
		element.popover('show');
		expect($scope.bootangEvents.show).toHaveBeenCalled();
	});

});
