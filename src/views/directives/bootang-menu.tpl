<div ng-class='{navbar : true, "navbar-inverse" : bootangOptions.inverse, "navbar-static-top" : bootangOptions.topMenu}'>
	
	<!-- When this button is pressed it's gonna deal with .navHeaderCollapse -->
	<button class='navbar-toggle' data-toggle='collapse' data-target='.navHeaderCollapse'>
		<span class='icon-bar'></span>
		<span class='icon-bar'></span>
		<span class='icon-bar'></span>
	</button>

	<div class='collapse navbar-collapse navHeaderCollapse'>
		<ul class='nav navbar-nav' ng-repeat='menuEntry in bootangOptions.items'>
			<li ng-if='menuEntry.type == "url"'>
				<a href='{{menuEntry.url}}'>{{menuEntry.display}}</a>
			</li>
			<li ng-if='menuEntry.type == "dropdown"' class='dropdown'>
				<a ng-click='' class='btn btn-navbar dropdown-toggle' data-toggle='dropdown'>{{menuEntry.display}} <b class='caret'></b></a>
				<ul class='dropdown-menu'>
					<li ng-repeat='submenuEntry in menuEntry.items' ng-class='{divider:submenuEntry.type == "divider"}'>
						<a ng-if='submenuEntry.type == "url"' href='{{submenuEntry.url}}'>{{submenuEntry.display}}</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>