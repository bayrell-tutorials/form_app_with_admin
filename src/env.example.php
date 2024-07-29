<?php
return function($loader)
{
	$loader->setEnv("MYSQL_HOST", "");
	$loader->setEnv("MYSQL_LOGIN", "");
	$loader->setEnv("MYSQL_PASSWORD", "");
	$loader->setEnv("MYSQL_DATABASE", "");
}