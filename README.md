BootAng
=======

Angular Directives  around Bootstrap components for less pain.

This library is used for getting simple AngularJS directives which are wrapped around the Bootstrap3.

# Installation

Via bower:

`bower install bootang --save`

Put this inside your html:

`<link rel="stylesheet" href="bower_components/bootang/dist/bootang.min.css" />`

`<script src="bower_components/bootang/dist/bootang.min.js"></script>` (this has to be loaded after AngularJS and Bootstrap)



# Components

## Menu

### Demo

![BootAng Menu - Large screens](http://s29.postimg.org/wc22yuel3/bootang_menu.png)
![BootAng Menu - Small screens](http://s30.postimg.org/r7fumyh35/bootang_menu_small.png)

### Usage - HTML

`<bootang-menu bootang-options="bootangOptions"></bootang-menu>`

### Usage - Controller
<pre>
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
</pre>

where:
* topMenu - if true, it will make menu without rounded corners
* inverse - bootstrap coloring
* items - list of menu entries, it can be type "dropdown" (submenu) or "url" (link)
 

## Popover

### Demo

![BootAng Popover](http://s7.postimg.org/97c2zisyz/popover_title.png)

### Usage - HTML

Assign class 'bootang-popover' to element to which you want to attach it.

`<span class='bootang-popover' bootang-options='bootangOptions' bootang-methods='bootangMethods' bootang-events='bootangEvents'>My Span for Popover</span>`

### Usage - Controller

Directive accepts three properties.

* bootang-options - default bootstrap options for popover described here http://getbootstrap.com/javascript/#popovers-usage
* bootang-methods - json with following properties:
	* show - when set to true, displays popover
	* hide - when set to true, hides popover
	* toggle - when set to true, toggles popover
	* destroy - when set to true, closes and removes popover from DOM
* bootang-events - callbacks being triggered when popover is shown or hidden, can be:
	* show - called just before showing popover
	* shown - called just after showing popover
	* hide - called just before hiding popover
	* hidden - called just after hiding popover

<pre>
	$scope.bootangOptions = {
		placement : 'bottom',
		title : 'My Popover Title',
		content : 'This will be conent of my popover, you know?'
	};
	
	$scope.bootangEvents = {};
	$scope.bootangEvents.show = function(e) {
		alert('I will show popover');
	};
	
	$scope.bootangMethods = {};
	
	// this can be event for ng-click on some button
	$scope.showPopover = function() {
		$scope.bootangMethods.show = true;
	};
	// this can be event for ng-click on some button
	$scope.hidePopover = function() {
		$scope.bootangMethods.hide = true;
	};
	// this can be event for ng-click on some button
	$scope.togglePopover = function() {
		$scope.bootangMethods.toggle = true;
	};
	// this can be event for ng-click on some button
	$scope.destroyPopover = function() {
		$scope.bootangMethods.destroy = true;
	};
</pre>
