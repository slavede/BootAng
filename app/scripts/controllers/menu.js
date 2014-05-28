'use strict';

angular.module('BootAng')
	.controller('MenuCtrl', function ($scope) {
		$scope.bootangOptions = {
			items : [
				{
					type : 'url',
					display : 'Home',
					url : '#/home'
				},
				{
					type : 'url',
					display : 'Blog',
					url : '#/blog'
				},
				{
					type : 'dropdown',
					display : 'Social Media',
					items : [
						{
							type : 'url',
							display : 'Facebook',
							url : '#/facebook'
						},
						{
							type : 'url',
							display : 'Twitter',
							url : '#/twitter'
						},
						{
							type : 'divider'
						},
						{
							type : 'url',
							display : 'Google+',
							url : '#/googleplus'
						},
						{
							type : 'url',
							display : 'Instagram',
							url : '#/instagram'
						},
					]
				},
				{
					type : 'url',
					display : 'About Us',
					url : '#/about_us'
				}
			],
			topMenu : false,
			inverse : true
		};
	});