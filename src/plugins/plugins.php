<?php
return function($loader)
{
	$loader->add("Project.Admin",  __DIR__ . "/Project.Admin/php");
	$loader->add("Project.App",  __DIR__ . "/Project.App/php");
	$loader->add("Project.Database",  __DIR__ . "/Project.Database/php");
	$loader->add("Runtime",  __DIR__ . "/Runtime/php");
	$loader->add("Runtime.Crypt",  __DIR__ . "/Runtime.Crypt/php");
	$loader->add("Runtime.ORM",  __DIR__ . "/Runtime.ORM/php");
	$loader->add("Runtime.Web",  __DIR__ . "/Runtime.Web/php");
	$loader->add("Runtime.Widget",  __DIR__ . "/Runtime.Widget/php");
};