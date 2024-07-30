<?php

define('BASE_PATH', dirname(__DIR__));
ini_set('display_errors', 'on');
ini_set('html_errors', 'on');
set_time_limit(30);
require_once BASE_PATH . "/plugins/Runtime/bay/Loader.php";

/* Create loader */
$loader = Loader::create(BASE_PATH);

/* Load main module */
$request_url = $loader->getRequestUri();
if (substr($request_url, 0, 7) == "/admin/") $loader->modules[] = "Project.Admin";
else $loader->modules[] = "Project.App";

/* Run web app */
$loader->entry_point = "Runtime.Web.BaseApp";
$loader->runApp();