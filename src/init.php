<?php
return function($loader)
{
	/* Enable constructor */
	$loader->include("/src/baylang.php");
	
	/* Setup environments */
	$loader->setEnv("LOCALE", "en");
	$loader->setEnv("TZ", "Asia/Almaty");
	$loader->setEnv("TZ_OFFSET", 5);
	if (isset($_SERVER["HTTP_X_FORWARDED_PREFIX"]))
		$loader->setEnv("ROUTE_PREFIX", $_SERVER["HTTP_X_FORWARDED_PREFIX"]);
	
	/* Read environments */
	$loader->include(__DIR__ . "/env.php");
};