<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?></title>
        <link href="/wp-content/themes/blankTheme/img/favicon-16x16.png" rel="shortcut icon">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<?php wp_head(); ?>


	</head>
	<body <?php body_class(); ?>>
		<main role="main">
		<header role="banner" class="siteHeader">
       
			<div class="siteHeader_primary">
				<div class="l-container l-flexContainer">
					<div class="siteHeader_name">
						<a href="/"><img src="/wp-content/themes/blankTheme/img/xx.svg" alt="Logo" class="logo-img"></a>
					</div>
					<div class="menuContainer">
						<div class="container">
							<div class="menu">
								
								<a href="#mobileNavGroup-main" class="nav_toggle" aria-controls="mobileNavGroup-main" aria-expanded="false">
									<img src="/wp-content/uploads/2021/02/menu.png">
								</a>
								<nav class="menuBar">
									<?php html5blank_nav(); ?>
								</nav>
								<div class="mobileMenuBar">
									<div class="navGroup" id="mobileNavGroup-main" aria-hidden="true">
										<h2>Menu</h2>
										<button type="button" aria-controls="mobileNavGroup-main" aria-expanded="false" aria-label="Close"><img src="/wp-content/themes/blankTheme/img/cross.svg" /></button>
										<?php mobile_nav(); ?>
										
									</div>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			</div>
    </header>