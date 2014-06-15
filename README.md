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
